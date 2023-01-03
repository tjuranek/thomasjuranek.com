import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Thomas Juranek</title>
        <meta
          name="description"
          content="The devices and tools I use to enable my best work"
        />
      </Head>
      <SimpleLayout
        title="The devices and tools I use to enable my best work"
        intro="I'm a firm believer that having a productive environment promotes a productive person. I enjoy reading what tools make other people productive and evaluating if it fits in my workflow. Here's a big list of what I currently use."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="PowerSpec Desktop - i7 32GB 3070 2TB">
              I'm at my desk a huge majority of the time anyways - a desktop
              makes sense. I currently dual-boot Windows 11 and Linux Mint on
              two separate terabyte drives so I get the best of both worlds.
              Most my coding is done in linux.
            </Tool>

            <Tool title={`ASUS 34" Ultrawide Monitor`}>
              I've tried two monitors in every orientation my monitor arm
              supports. None of them beat having an ultrawide. With good window
              management tools and multiple virtual desktops it's easy to keep
              my screen organized.
            </Tool>

            <Tool title="Logitech MX Keys for Mac">
              I have to use a Mac for work and it's pretty easy to use the same
              keyboard on my personal devices. I do miss having a mechanical
              keyboard occasionally.
            </Tool>

            <Tool title="FENGE 2-tier Standing Desk">
              Standing desks are the best. I try to avoid sitting for the
              majority of the day - and actually don't even have an office chair
              right now. The multiple tiers are great for keeping monitors at
              eye level.
            </Tool>
          </ToolsSection>

          <ToolsSection title="Development tools">
            <Tool title="Visual Studio Code">
              Solid editor. The Vim extension is a must - I wish I was better
              with it. Huge fan of plugin support.
            </Tool>
          </ToolsSection>

          <ToolsSection title="Design">
            <Tool title="Figma">
              I'm not great with it yet, but almost every project I start from
              scratch gets a mockup in Figma first.
            </Tool>
          </ToolsSection>

          <ToolsSection title="On the Evaluation List">
            <Tool title="Sunsama">
              Linking tickets in my calendar seems super appealing. Excited to
              try this one out.
            </Tool>

            <Tool title="Copilot.money">
              As someone who needs to get better at budgeting, this looks like
              the best Mac based option.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
