"use client";

import { Bricolage_Grotesque } from "next/font/google";

const bricolageGrotesque = Bricolage_Grotesque({ subsets: ["latin"] });

export function WhyUsSection() {
  return (
    <div className="py-32 bg-[#212B36] flex flex-col items-center self-stretch">
      <div className="text-center relative w-full">
        <div className="absolute rotate-[-20] xl:right-[20%] translate-x-[50%] top-[50px] right-[10%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="103"
            height="64"
            viewBox="0 0 103 64"
            fill="none"
          >
            <g clipPath="url(#clip0_11100_37295)">
              <path
                d="M15.5563 45.7488L15.1646 44.6727C14.0941 41.7314 15.6143 38.468 18.555 37.3977C21.4957 36.3274 24.7595 37.8495 25.8307 40.7924C28.8485 49.0839 38.0442 53.3748 46.3278 50.3598C54.613 47.3442 58.897 38.1453 55.8798 29.8554C54.8092 26.9141 56.331 23.6501 59.2717 22.5798C62.2124 21.5095 65.4762 23.0316 66.5474 25.9745C69.5652 34.266 78.7593 38.5575 87.043 35.5425C95.3282 32.5269 99.6122 23.328 96.5949 15.0381L96.2033 13.9621L86.5107 17.4899L86.9023 18.5659C87.9734 21.5088 86.4522 24.7744 83.5115 25.8447C80.5708 26.915 77.3064 25.3913 76.2352 22.4484C73.2184 14.1548 64.0243 9.86331 55.7407 12.8783C47.4554 15.8939 43.1709 25.0912 46.1882 33.3811C47.2593 36.324 45.738 39.5896 42.7973 40.6599C39.8567 41.7302 36.5922 40.2065 35.5211 37.2636C32.5023 28.9743 23.3082 24.6828 15.023 27.6983C6.73932 30.7133 2.45476 39.9107 5.47204 48.2006L5.86367 49.2766L15.5563 45.7488Z"
                fill="#FFBBF4"
              />
            </g>
            <defs>
              <clipPath id="clip0_11100_37295">
                <rect
                  width="96.9697"
                  height="32"
                  fill="white"
                  transform="translate(0 33.1663) rotate(-20)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="absolute xl:left-[20%] left-[5%] translate-x-[50%] top-[50px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
          >
            <g clipPath="url(#clip0_11100_37291)">
              <path
                d="M56 28.0012C42.1536 24.6591 31.3411 13.8486 28.001 0.000244141C24.6589 13.8486 13.8484 24.6591 0 28.0012C13.8464 31.3433 24.6589 42.1538 28.001 56.0022C31.3431 42.1538 42.1536 31.3433 56.002 28.0012H56Z"
                fill="#FFB885"
              />
            </g>
            <defs>
              <clipPath id="clip0_11100_37291">
                <rect
                  width="56"
                  height="56"
                  fill="white"
                  transform="translate(0 0.000244141)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div
          className={`${bricolageGrotesque.className} text-[64px] leading-[80px] font-semibold text-white`}
        >
          Tại Sao Chúng Tôi
        </div>
        <div
          className={`${bricolageGrotesque.className} text-[64px] leading-[80px] font-semibold text-white`}
        >
          Khác Biệt
        </div>
      </div>
      <div className="text-secondary max-w-[550px] text-center">
        Chúng tôi không chỉ dạy toán, chúng tôi truyền cảm hứng và thắp sáng
        niềm đam mê toán học trong mỗi bạn nhỏ
      </div>
      <div className="pt-16 flex items-start justify-center self-stretch gap-8 md:max-w-3xl max-w-sm lg:max-w-5xl xl:max-w-7xl mx-auto w-full lg:px-10 px-5 md:flex-row flex-col">
        <div className="flex-1 flex flex-col p-8 items-center gap-6 bg-white rounded-[40px]">
          <img className="w-60" src="/images/home/img_20.png" />
          <div className="flex flex-col gap-2 items-start">
            <div
              className={`${bricolageGrotesque.className} text-2xl font-semibold self-stretch`}
            >
              Học ở bất cứ đâu
            </div>
            <div className="text-secondary text-xl">
              Học toán mọi lúc, mọi nơi, chỉ cần có internet.
            </div>
            <div className="self-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="49"
                height="48"
                viewBox="0 0 49 48"
                fill="none"
              >
                <path
                  d="M27.5192 0.5V17.1143L28.3727 16.2607L39.2662 5.36621L43.2985 9.39844L32.4059 20.2939L31.5524 21.1475H48.1666V26.8525H31.5524L32.4059 27.7061L43.2985 38.5996L39.2662 42.6318L28.3727 31.7393L27.5192 30.8857V47.5H21.8141V30.8857L20.9606 31.7393L10.0651 42.6318L6.03284 38.5996L16.9274 27.7061L17.7809 26.8525H1.16663V21.1475H17.7809L6.03284 9.39941L10.066 5.36621L21.8141 17.1143V0.5H27.5192Z"
                  stroke="#212B36"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col p-8 items-center gap-6 bg-white rounded-[40px] mt-20">
          <img className="w-60" src="/images/home/img_21.png" />
          <div className="flex flex-col gap-2 items-start">
            <div
              className={`${bricolageGrotesque.className} text-2xl font-semibold self-stretch`}
            >
              Giảng viên giàu kinh nghiệm
            </div>
            <div className="text-secondary text-xl">
              Đội ngũ giáo viên chuyên môn cao, truyền cảm hứng học toán.
            </div>
            <div className="self-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="49"
                height="48"
                viewBox="0 0 49 48"
                fill="none"
              >
                <path
                  d="M27.5192 0.5V17.1143L28.3727 16.2607L39.2662 5.36621L43.2985 9.39844L32.4059 20.2939L31.5524 21.1475H48.1666V26.8525H31.5524L32.4059 27.7061L43.2985 38.5996L39.2662 42.6318L28.3727 31.7393L27.5192 30.8857V47.5H21.8141V30.8857L20.9606 31.7393L10.0651 42.6318L6.03284 38.5996L16.9274 27.7061L17.7809 26.8525H1.16663V21.1475H17.7809L6.03284 9.39941L10.066 5.36621L21.8141 17.1143V0.5H27.5192Z"
                  stroke="#212B36"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col p-8 items-center gap-6 bg-white rounded-[40px]">
          <img className="w-60" src="/images/home/img_22.png" />
          <div className="flex flex-col gap-2 items-start">
            <div
              className={`${bricolageGrotesque.className} text-2xl font-semibold self-stretch`}
            >
              Các lớp học linh hoạt
            </div>
            <div className="text-secondary text-xl">
              Lịch học phù hợp mọi thời gian biểu, cá nhân hóa từng học sinh.
            </div>
            <div className="self-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="49"
                height="48"
                viewBox="0 0 49 48"
                fill="none"
              >
                <path
                  d="M27.5192 0.5V17.1143L28.3727 16.2607L39.2662 5.36621L43.2985 9.39844L32.4059 20.2939L31.5524 21.1475H48.1666V26.8525H31.5524L32.4059 27.7061L43.2985 38.5996L39.2662 42.6318L28.3727 31.7393L27.5192 30.8857V47.5H21.8141V30.8857L20.9606 31.7393L10.0651 42.6318L6.03284 38.5996L16.9274 27.7061L17.7809 26.8525H1.16663V21.1475H17.7809L6.03284 9.39941L10.066 5.36621L21.8141 17.1143V0.5H27.5192Z"
                  stroke="#212B36"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}