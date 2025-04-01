import Heading from "./components/heading"
import MaxWidthWrapper from "./components/max-width-wrapper"

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <MaxWidthWrapper className="flex text-center justify-center relative mx-auto gap-10">
        <Heading>Neon Stack</Heading>
      </MaxWidthWrapper>
    </main>
  )
}
