import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Grid } from "@/components/ui/grid"
import { Paragraph } from "@/components/ui/paragraph"
import { Title } from "@/components/ui/title"
import { Section, sectionVariants } from "@/components/section"

export default function Home() {
  return (
    <div>
      <div
        className={sectionVariants({
          side: "t",
          spacer: "p",
          className:
            "w-full max-w-[540px] border-l border-r min-h-screen mx-auto px-4",
        })}
      >
        <section className="flex flex-col gap-4">
          <div>
            <Title className="text-muted-foreground/70" showAs={3}>
              <span className="text-primary">
                Your software development collaborator.
              </span>
              <br /> Unlock immediate access to top-notch development services
              for a straightforward monthly subscription.
            </Title>
            <Paragraph>
              Bypass the cumbersome hiring process and secure immediate access
              to a seasoned developer poised to breathe life into your concept,
              all at a fixed monthly cost.
            </Paragraph>
          </div>

          <div className="flex items-center gap-4">
            <Button>See Plans</Button>
            <Button variant={"secondary"}>Book a call</Button>
          </div>

          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2">
              <div className="p-0.5 bg-gradient-to-tl shadow-inner border text-xs from-[#FDD6D5] to-[#F5F6F5] rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  focusable="false"
                  className="select-none w-3 h-3"
                >
                  <g>
                    <path d="M218.29,182.17a12,12,0,0,1-16.47,4.12L140,149.19V216a12,12,0,0,1-24,0V149.19l-61.82,37.1a12,12,0,1,1-12.35-20.58L104.68,128,41.83,90.29A12,12,0,1,1,54.18,69.71L116,106.81V40a12,12,0,0,1,24,0v66.81l61.82-37.1a12,12,0,1,1,12.35,20.58L151.32,128l62.85,37.71A12,12,0,0,1,218.29,182.17Z"></path>
                  </g>
                </svg>
              </div>
              <span>Dedicated Developer</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="p-0.5 bg-gradient-to-tl shadow-inner border text-xs from-[#FCEEE1] to-[#DBD4FA] rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  focusable="false"
                  className="select-none w-3 h-3"
                >
                  <g>
                    <path d="M218.29,182.17a12,12,0,0,1-16.47,4.12L140,149.19V216a12,12,0,0,1-24,0V149.19l-61.82,37.1a12,12,0,1,1-12.35-20.58L104.68,128,41.83,90.29A12,12,0,1,1,54.18,69.71L116,106.81V40a12,12,0,0,1,24,0v66.81l61.82-37.1a12,12,0,1,1,12.35,20.58L151.32,128l62.85,37.71A12,12,0,0,1,218.29,182.17Z"></path>
                  </g>
                </svg>
              </div>
              <span>Private Slack channel</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="p-0.5 bg-gradient-to-tl shadow-inner border text-xs from-[#F2F1F2] to-[#D5FDE2] rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  focusable="false"
                  className="select-none w-3 h-3"
                >
                  <g>
                    <path d="M218.29,182.17a12,12,0,0,1-16.47,4.12L140,149.19V216a12,12,0,0,1-24,0V149.19l-61.82,37.1a12,12,0,1,1-12.35-20.58L104.68,128,41.83,90.29A12,12,0,1,1,54.18,69.71L116,106.81V40a12,12,0,0,1,24,0v66.81l61.82-37.1a12,12,0,1,1,12.35,20.58L151.32,128l62.85,37.71A12,12,0,0,1,218.29,182.17Z"></path>
                  </g>
                </svg>
              </div>
              <span>1:1 async communication</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="p-0.5 bg-gradient-to-tl shadow-inner border text-xs from-[#E7F8FA] to-[#E0D6FE] rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  focusable="false"
                  className="select-none w-3 h-3"
                >
                  <g>
                    <path d="M218.29,182.17a12,12,0,0,1-16.47,4.12L140,149.19V216a12,12,0,0,1-24,0V149.19l-61.82,37.1a12,12,0,1,1-12.35-20.58L104.68,128,41.83,90.29A12,12,0,1,1,54.18,69.71L116,106.81V40a12,12,0,0,1,24,0v66.81l61.82-37.1a12,12,0,1,1,12.35,20.58L151.32,128l62.85,37.71A12,12,0,0,1,218.29,182.17Z"></path>
                  </g>
                </svg>
              </div>
              <span>No hiring required</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="p-0.5 bg-gradient-to-tl shadow-inner border text-xs from-[#E7F8FA] to-[#E0D6FE] rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  focusable="false"
                  className="select-none w-3 h-3"
                >
                  <g>
                    <path d="M218.29,182.17a12,12,0,0,1-16.47,4.12L140,149.19V216a12,12,0,0,1-24,0V149.19l-61.82,37.1a12,12,0,1,1-12.35-20.58L104.68,128,41.83,90.29A12,12,0,1,1,54.18,69.71L116,106.81V40a12,12,0,0,1,24,0v66.81l61.82-37.1a12,12,0,1,1,12.35,20.58L151.32,128l62.85,37.71A12,12,0,0,1,218.29,182.17Z"></path>
                  </g>
                </svg>
              </div>
              <span>Pause or cancel anytime</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="p-0.5 bg-gradient-to-tl shadow-inner border text-xs from-[#F2F2F2] to-[#F1D0F0] rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  focusable="false"
                  className="select-none w-3 h-3"
                >
                  <g>
                    <path d="M218.29,182.17a12,12,0,0,1-16.47,4.12L140,149.19V216a12,12,0,0,1-24,0V149.19l-61.82,37.1a12,12,0,1,1-12.35-20.58L104.68,128,41.83,90.29A12,12,0,1,1,54.18,69.71L116,106.81V40a12,12,0,0,1,24,0v66.81l61.82-37.1a12,12,0,1,1,12.35,20.58L151.32,128l62.85,37.71A12,12,0,0,1,218.29,182.17Z"></path>
                  </g>
                </svg>
              </div>
              <span>No contracts</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="p-0.5 bg-gradient-to-tl shadow-inner border text-xs from-[#F2F1F2] to-[#D5FDE2] rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  focusable="false"
                  className="select-none w-3 h-3"
                >
                  <g>
                    <path d="M218.29,182.17a12,12,0,0,1-16.47,4.12L140,149.19V216a12,12,0,0,1-24,0V149.19l-61.82,37.1a12,12,0,1,1-12.35-20.58L104.68,128,41.83,90.29A12,12,0,1,1,54.18,69.71L116,106.81V40a12,12,0,0,1,24,0v66.81l61.82-37.1a12,12,0,1,1,12.35,20.58L151.32,128l62.85,37.71A12,12,0,0,1,218.29,182.17Z"></path>
                  </g>
                </svg>
              </div>
              <span>No meetings</span>
            </li>
          </ul>
        </section>
        <Section spacer="p" className="flex flex-col gap-4">
          <Title className="text-muted-foreground/70" showAs={3} level={2}>
            <span className="text-primary">Request-driven development.</span> We
            streamline the development process by breaking down projects into
            highly focused and manageable requests, simplifying the overall
            workflow.
          </Title>
          <Grid gap="sm">
            <div className="col-span-6 p-4 rounded-xl bg-gradient-to-tr flex flex-col gap-8 from-[#D2EDFE] to-[#F9FCFF]">
              <div className="w-20 h-20 rounded-full bg-[#B8E5FF] border-2 border-white"></div>
              <Paragraph className="text-muted-foreground/70">
                <span className="text-primary font-bold">Subscribe.</span>{" "}
                We&apos;ll invite you to a private Slack channel where
                you&apos;ll be assigned a world-class designer.
              </Paragraph>
            </div>
            <div className="col-span-6 p-4 rounded-xl bg-gradient-to-tr flex flex-col gap-8 from-[#F6EDFF] to-[#F8F0FF]">
              <div className="w-20 h-20 rounded-full bg-[#DACCFF] border-2 border-white"></div>
              <Paragraph className="text-muted-foreground/70">
                <span className="text-primary font-bold">Subscribe.</span>{" "}
                We&apos;ll invite you to a private Slack channel where
                you&apos;ll be assigned a world-class designer.
              </Paragraph>
            </div>
            <div className="col-span-6 p-4 rounded-xl bg-gradient-to-tl flex flex-col gap-8 from-[#FFEADA] to-[#FFFCF6]">
              <div className="w-20 h-20 rounded-full bg-[#FFE9C4] border-2 border-white"></div>
              <Paragraph className="text-muted-foreground/70">
                <span className="text-primary font-bold">Subscribe.</span>{" "}
                We&apos;ll invite you to a private Slack channel where
                you&apos;ll be assigned a world-class designer.
              </Paragraph>
            </div>
            <div className="col-span-6 p-4 rounded-xl bg-gradient-to-tl flex flex-col gap-8 from-[#DBF1EE] to-[#FCFEFE]">
              <div className="w-20 h-20 rounded-full bg-[#C0F0EA] border-2 border-white"></div>
              <Paragraph className="text-muted-foreground/70">
                <span className="text-primary font-bold">Subscribe.</span>{" "}
                We&apos;ll invite you to a private Slack channel where
                you&apos;ll be assigned a world-class designer.
              </Paragraph>
            </div>
          </Grid>
        </Section>
        <Section spacer="p">
          <Title className="text-muted-foreground/70" showAs={3} level={2}>
            <span className="text-primary">What do we do? </span>
            We&apos;re the go-to for many founders, startups and agencies for
            web and mobile apps.
          </Title>
        </Section>
      </div>
    </div>
  )
}
