import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllPosts } from '@/lib/getAllPosts'
import { formatDate } from '@/lib/formatDate'

function Blog({ blog }) {
  return (
    <blog className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/blog/${blog.slug}`}>{blog.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={blog.date}
          className="md:hidden"
          decorate
        >
          {formatDate(blog.date)}
        </Card.Eyebrow>
        <Card.Description>{blog.description}</Card.Description>
        <Card.Cta>Read blog</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={blog.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(blog.date)}
      </Card.Eyebrow>
    </blog>
  )
}

export default function BlogsIndex({ blogs }) {
  return (
    <>
      <Head>
        <title>Blog - Thomas Juranek</title>
        <meta
          name="description"
          content="All of my long-form thoughts on programming, learning, my hobbies, and more, collected in chronological order."
        />
      </Head>
      <SimpleLayout
        title="Writing on my life, software development, building products, and how I do it."
        intro="All of my long-form thoughts on programming, learning, my hobbies, and more, collected in chronological order."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {blogs.map((blog) => (
              <Blog key={blog.slug} blog={blog} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      blogs: (await getAllPosts()).map(({ component, ...meta }) => meta),
    },
  }
}
