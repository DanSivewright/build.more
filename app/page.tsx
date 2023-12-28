import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Grid } from "@/components/ui/grid"
import { Input } from "@/components/ui/input"
import { Paragraph } from "@/components/ui/paragraph"
import { Title, titleVariants } from "@/components/ui/title"
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
        <Section
          size="sm"
          className="relative w-full h-[58vh] lg:h-[55vh] xl:h-[45vh]"
        >
          <div className="p-6 flex gap-8 overflow-x-scroll no-scrollbar w-[calc(100vw-3%)] absolute top-0 left-1/2 -translate-x-1/2">
            <div className="rotate-[-1deg] flex flex-col gap-2">
              <div className="h-[55vh] shadow aspect-video flex rounded-xl overflow-hidden">
                <div className="h-full card w-1/2 bg-[#1A1A1A]">
                  <div className="p-10 card-content h-full flex flex-col justify-between">
                    <div className="flex items-center text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4"
                      >
                        <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                      </svg>
                      <span>Acme Inc</span>
                    </div>
                    <p className="text-md font-mono text-white">
                      {`"Build.more has been instrumental in our startup journey.
                      The dedicated developer and streamlined process have
                      accelerated our product development. This service has
                      saved us valuable time and allowed us to iterate on our
                      ideas rapidly." `}
                      <span className="font-normal text-xs">- Jake W.</span>
                    </p>
                  </div>
                </div>
                <div className="h-full w-1/2 bg-white flex flex-col justify-center items-center px-16">
                  <p
                    className={titleVariants({
                      level: 5,
                    })}
                    style={{ margin: 0 }}
                  >
                    Create an account
                  </p>
                  <p className="text-xs text-muted-foreground/60">
                    Enter your email below to create your account
                  </p>
                  <div className="mt-4 flex flex-col gap-2 w-full">
                    <Input sizing="sm" placeholder="name@example.com" />
                    <Button size={"sm"}>Sign in with email</Button>
                    <p className="text-xs my-2 text-center text-muted-foreground/60">
                      OR CONTINUE WITH
                    </p>
                    <Button variant={"outline"} size={"sm"}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 48 48"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2"
                      >
                        <path
                          fill="#FFC107"
                          d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
                        />
                        <path
                          fill="#FF3D00"
                          d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"
                        />
                        <path
                          fill="#4CAF50"
                          d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"
                        />
                        <path
                          fill="#1976D2"
                          d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"
                        />
                      </svg>{" "}
                      Google
                    </Button>
                    <p className="px-8 text-center text-xs text-muted-foreground/60 mt-3">
                      By clicking continue, you agree to our{" "}
                      <Link
                        href="#"
                        className="underline underline-offset-4 hover:text-primary"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/#"
                        className="underline underline-offset-4 hover:text-primary"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>
              <Paragraph size="xs" className="text-muted-foreground/60">
                Authentication
              </Paragraph>
            </div>
            <div className="rotate-[1deg] flex flex-col gap-2">
              <div className="h-[55vh] shadow aspect-video flex rounded-xl overflow-hidden">
                <div className="h-full card w-1/2 bg-[#1A1A1A]">
                  <div className="p-10 card-content h-full flex flex-col justify-between">
                    <div className="flex items-center text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4"
                      >
                        <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                      </svg>
                      <span>Acme Inc</span>
                    </div>
                    <p className="text-md font-mono text-white">
                      {`"Build.more has been instrumental in our startup journey.
                      The dedicated developer and streamlined process have
                      accelerated our product development. This service has
                      saved us valuable time and allowed us to iterate on our
                      ideas rapidly." `}
                      <span className="font-normal text-xs">- Jake W.</span>
                    </p>
                  </div>
                </div>
                <div className="h-full w-1/2 bg-white flex flex-col justify-center items-center px-16">
                  <p
                    className={titleVariants({
                      level: 5,
                    })}
                    style={{ margin: 0 }}
                  >
                    Create an account
                  </p>
                  <p className="text-xs text-muted-foreground/60">
                    Enter your email below to create your account
                  </p>
                  <div className="mt-4 flex flex-col gap-2 w-full">
                    <Input sizing="sm" placeholder="name@example.com" />
                    <Button size={"sm"}>Sign in with email</Button>
                    <p className="text-xs my-2 text-center text-muted-foreground/60">
                      OR CONTINUE WITH
                    </p>
                    <Button variant={"outline"} size={"sm"}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 48 48"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2"
                      >
                        <path
                          fill="#FFC107"
                          d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
                        />
                        <path
                          fill="#FF3D00"
                          d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"
                        />
                        <path
                          fill="#4CAF50"
                          d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"
                        />
                        <path
                          fill="#1976D2"
                          d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"
                        />
                      </svg>{" "}
                      Google
                    </Button>
                    <p className="px-8 text-center text-xs text-muted-foreground/60 mt-3">
                      By clicking continue, you agree to our{" "}
                      <Link
                        href="#"
                        className="underline underline-offset-4 hover:text-primary"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/#"
                        className="underline underline-offset-4 hover:text-primary"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>
              <Paragraph size="xs" className="text-muted-foreground/60">
                Authentication
              </Paragraph>
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-[55vh] shadow aspect-video flex rounded-xl overflow-hidden">
                <div className="h-full card w-1/2 bg-[#1A1A1A]">
                  <div className="p-10 card-content h-full flex flex-col justify-between">
                    <div className="flex items-center text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4"
                      >
                        <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                      </svg>
                      <span>Acme Inc</span>
                    </div>
                    <p className="text-md font-mono text-white">
                      {`"Build.more has been instrumental in our startup journey.
                      The dedicated developer and streamlined process have
                      accelerated our product development. This service has
                      saved us valuable time and allowed us to iterate on our
                      ideas rapidly." `}
                      <span className="font-normal text-xs">- Jake W.</span>
                    </p>
                  </div>
                </div>
                <div className="h-full w-1/2 bg-white flex flex-col justify-center items-center px-16">
                  <p
                    className={titleVariants({
                      level: 5,
                    })}
                    style={{ margin: 0 }}
                  >
                    Create an account
                  </p>
                  <p className="text-xs text-muted-foreground/60">
                    Enter your email below to create your account
                  </p>
                  <div className="mt-4 flex flex-col gap-2 w-full">
                    <Input sizing="sm" placeholder="name@example.com" />
                    <Button size={"sm"}>Sign in with email</Button>
                    <p className="text-xs my-2 text-center text-muted-foreground/60">
                      OR CONTINUE WITH
                    </p>
                    <Button variant={"outline"} size={"sm"}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 48 48"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2"
                      >
                        <path
                          fill="#FFC107"
                          d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
                        />
                        <path
                          fill="#FF3D00"
                          d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"
                        />
                        <path
                          fill="#4CAF50"
                          d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"
                        />
                        <path
                          fill="#1976D2"
                          d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"
                        />
                      </svg>{" "}
                      Google
                    </Button>
                    <p className="px-8 text-center text-xs text-muted-foreground/60 mt-3">
                      By clicking continue, you agree to our{" "}
                      <Link
                        href="#"
                        className="underline underline-offset-4 hover:text-primary"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/#"
                        className="underline underline-offset-4 hover:text-primary"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>
              <Paragraph size="xs" className="text-muted-foreground/60">
                Authentication
              </Paragraph>
            </div>
          </div>
        </Section>
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
                <span className="text-primary font-bold">Request.</span> Submit
                design requests, we&apos;ll complete them one by one within 2
                business days on average.
              </Paragraph>
            </div>
            <div className="col-span-6 p-4 rounded-xl bg-gradient-to-tl flex flex-col gap-8 from-[#FFEADA] to-[#FFFCF6]">
              <div className="w-20 h-20 rounded-full bg-[#FFE9C4] border-2 border-white"></div>
              <Paragraph className="text-muted-foreground/70">
                <span className="text-primary font-bold">Revise.</span> Need
                more tweaks? We&apos;ll revise your design until it&apos;s
                exactly how you envisioned it.
              </Paragraph>
            </div>
            <div className="col-span-6 p-4 rounded-xl bg-gradient-to-tl flex flex-col gap-8 from-[#DBF1EE] to-[#FCFEFE]">
              <div className="w-20 h-20 rounded-full bg-[#C0F0EA] border-2 border-white"></div>
              <Paragraph className="text-muted-foreground/70">
                <span className="text-primary font-bold">Grow.</span> Witness
                your project and vision evolving and coming to life after each
                design request.
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
