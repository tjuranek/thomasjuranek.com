export default {
	on: { push: ["master"] },
	steps: [
		{
			name: "probe",
			run: [
				'A="https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID/pages/projects/thomasjuranek/upload-token"',
				'R=$(curl -s -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" "$A")',
				'echo "$R" | head -c 120 | sed -E "s/eyJ[A-Za-z0-9._-]+/<jwt>/"; echo',
				'J=$(echo "$R" | sed -E \'s/.*"jwt":"([^"]+)".*/\\1/\')',
				'echo "jwt parts: $(echo "$J" | tr "." "\\n" | wc -l) length: ${#J}"',
				'echo "$J" | cut -d. -f2 | tr "_-" "/+" | base64 -d 2>/dev/null | head -c 400; echo',
				'curl -s -o /tmp/out -w "check-missing: %{http_code}\\n" -X POST -H "Authorization: Bearer $J" -H "content-type: application/json" -d \'{"hashes":["0123456789abcdef0123456789abcdef"]}\' https://api.cloudflare.com/client/v4/pages/assets/check-missing; head -c 300 /tmp/out; echo',
			].join("\n"),
		},
	],
};
