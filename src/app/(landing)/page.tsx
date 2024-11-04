import { Heading } from "@/components/heading"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { Check } from "lucide-react"
import { ShinyButton } from "@/components/shiny-button"

const Page = () => {
  return (
    <>
      <section className="relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper className="text-center">
          <div
            className="relative mx-auto text-center flex flex-col
            items-center gap-10"
          >
            <Heading>
              <span>Real-Time SaaS Insights,</span>
              <br />
              <span
                className="relative bg-gradient-to-r from-brand-700
                  to-brand-800 text-transparent bg-clip-text"
              >
                Delivered to Your Discord
              </span>
            </Heading>

            <p
              className="text-base/7 text-gray-600 max-w-prose text-center
              text-pretty"
            >
              PingPanda is the easiest way to monitor your SaaS. Get instant
              notifications for{" "}
              <span className="font-semibold text-gray-700">
                sales, new users or any other events{" "}
              </span>{" "}
              sent directly to your Discord.
            </p>

            <ul
              className="space-y-2 text-base/7 text-gray-600 text-left flex
              flex-col items-start"
            >
              {[
                "Real-time Discord alerts for critical events",
                "Buy once, use forever",
                "Track sales, new users or any other events",
              ].map((item) => (
                <li key={item} className="flex gap-1.5 items-center text-left">
                  <Check />
                  {item}
                </li>
              ))}
            </ul>

            <div className="w-full max-w-80">
              <ShinyButton
                className="relative z-10 h-14 w-full text-base shadow-lg
                transition-shadow duration-300 hover:shadow-xl"
                href="/sign-up"
              >
                Start for free today
              </ShinyButton>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </>
  )
}
export default Page
