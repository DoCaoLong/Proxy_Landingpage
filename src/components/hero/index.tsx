import React from "react";

// Kiểu cho các props của Feature component
interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const HeroSection: React.FC = () => (
  <section className="text-center px-4 pt-[135px]">
    <h1 className="text-5xl max-w-[68.75rem] mx-auto font-bold text-white">
      <p>Residential Proxies P2P</p>
      <p className="mt-2">Share internet and make money online</p>
    </h1>
    <p className="mt-4 max-w-2xl mx-auto text-white text-size-normal">
      We offer the world's leading proxy exchange platform with support for P2P
      connections. Share Your Internet and Make Money Online Easily.
    </p>
    <button className="mt-8 px-[16px] py-[10px] bg-white text-red-500 font-semibold rounded-md hover:bg-gray-200">
      Get started
    </button>
  </section>
);

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="flex justify-center gap-x-[20px] items-start">
    <div className="inline-block p-4 rounded-full">{icon}</div>
    <div>
      <h6 className="text-H6 text-lg font-semibold text-white">{title}</h6>
      <p className="mt-[8px] text-small text-white">{description}</p>
    </div>
  </div>
);

const FeaturesSection: React.FC = () => (
  <section className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-4 px-4">
    <Feature
      icon={
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26.5996 9.95383C29.4105 7.12985 33.9389 6.99674 36.9108 9.65074L37.8982 10.5325C38.5855 11.1463 39.4746 11.4855 40.3961 11.4855H54.375C55.4105 11.4855 56.25 12.325 56.25 13.3605C56.25 14.396 55.4105 15.2355 54.375 15.2355H50.625V35.625C50.625 35.8985 50.5665 36.1583 50.4612 36.3925H54.375C55.4105 36.3925 56.25 37.232 56.25 38.2675C56.25 39.3031 55.4105 40.1425 54.375 40.1425H42.4006C42.1801 40.4603 41.9329 40.7639 41.6595 41.0501L33.0527 50.0572C30.3599 52.8752 25.9574 53.1609 22.923 50.7146L11.6186 41.601C10.9519 41.0635 10.1213 40.7704 9.26494 40.7704H5.625C4.58947 40.7704 3.75 39.9309 3.75 38.8954C3.75 37.8599 4.58947 37.0204 5.625 37.0204H9.26494C9.30165 37.0204 9.33834 37.0207 9.375 37.0212V15.6541H5.625C4.58947 15.6541 3.75 14.8146 3.75 13.7791C3.75 12.7435 4.58947 11.9041 5.625 11.9041L24.6583 11.9041L26.5996 9.95383ZM47.0388 36.3925C46.9335 36.1583 46.875 35.8985 46.875 35.625V15.2355H40.3961C38.5532 15.2355 36.7749 14.557 35.4004 13.3296L34.413 12.4478C32.927 11.1208 30.6628 11.1873 29.2574 12.5993L21.7782 20.1132C21.1892 20.705 21.0257 21.5985 21.367 22.3605C21.8102 23.3499 22.9562 23.812 23.9617 23.4067L29.3139 21.2492C32.8601 19.8197 36.914 21.2867 38.7241 24.6545L42.8432 32.3178C43.5313 33.598 43.8157 35.0112 43.7187 36.3925H47.0388ZM13.9722 38.6816C13.6782 38.4445 13.3682 38.2312 13.0452 38.0428C13.0971 37.871 13.125 37.6888 13.125 37.5V15.6541L20.9257 15.6541L19.1204 17.4678C17.4362 19.1598 16.9687 21.7147 17.9447 23.8935C19.2118 26.7225 22.4887 28.0436 25.3637 26.8847L30.716 24.7272C32.489 24.0125 34.516 24.746 35.4211 26.4299L39.5401 34.0932C40.2207 35.3594 40.1114 36.8859 39.2989 38.0339L33.6901 32.4275C32.9539 31.6916 31.7683 31.6872 31.0419 32.4176C30.3155 33.148 30.3235 34.3367 31.0597 35.0726L36.7497 40.7602L35.1753 42.4078L29.6927 36.9215C28.9636 36.1919 27.7772 36.1971 27.0429 36.9329C26.3086 37.6688 26.3043 38.8569 27.0334 39.5864L32.5737 45.1304L30.3415 47.4665C28.9951 48.8755 26.7938 49.0184 25.2766 47.7952L13.9722 38.6816Z"
            fill="white"
          />
        </svg>
      }
      title="Proxy Transparent"
      description="A Transparent Proxy is an ideal solution for those who want to enhance security and network management."
    />
    <Feature
      icon={
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M38.9797 25.5261C39.6155 24.7087 39.4682 23.5307 38.6508 22.8949C37.8334 22.2592 36.6554 22.4064 36.0196 23.2238L28.567 32.8057L23.8188 28.105C23.0829 27.3764 21.8957 27.3824 21.1672 28.1183C20.4386 28.8542 20.4446 30.0414 21.1805 30.7699L27.4305 36.9574C27.8115 37.3346 28.3358 37.5307 28.8709 37.496C29.4059 37.4614 29.9005 37.1993 30.2297 36.7761L38.9797 25.5261Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M32.785 4.7197C30.9969 4.00446 29.0022 4.00447 27.2141 4.7197L12.723 10.5162C10.7364 11.3108 9.34671 13.1766 9.23777 15.3602C9.12544 17.6119 9.00092 21.2166 9.09895 24.9492C9.19586 28.6393 9.51264 32.6202 10.3446 35.5441C11.6609 40.1698 14.9092 44.3073 18.192 47.5548C21.5033 50.8305 25.0171 53.3632 27.1072 54.7575C28.8649 55.9301 31.1342 55.9301 32.8919 54.7575C34.982 53.3632 38.4958 50.8305 41.8071 47.5548C45.0899 44.3073 48.3382 40.1698 49.6544 35.5441C50.4864 32.6202 50.8032 28.6393 50.9002 24.9492C50.9982 21.2166 50.8737 17.612 50.7614 15.3603C50.6525 13.1766 49.2628 11.3108 47.2762 10.5162L32.785 4.7197ZM28.6068 8.20149C29.5009 7.84387 30.4982 7.84387 31.3923 8.20149L45.8835 13.998C46.5531 14.2658 46.9825 14.8735 47.0161 15.5471C47.1259 17.7489 47.2461 21.2497 47.1515 24.8507C47.0558 28.4943 46.7426 32.0753 46.0476 34.5178C44.9918 38.2283 42.276 41.8161 39.1698 44.8889C36.0921 47.9335 32.7922 50.3161 30.8108 51.6379C30.3131 51.97 29.686 51.97 29.1882 51.6379C27.2069 50.3161 23.9069 47.9335 20.8293 44.8889C17.7231 41.8161 15.0073 38.2283 13.9515 34.5178C13.2565 32.0753 12.9433 28.4943 12.8477 24.8507C12.7531 21.2497 12.8733 17.7489 12.9831 15.5471C13.0167 14.8735 13.4461 14.2658 14.1157 13.998L28.6068 8.20149Z"
            fill="white"
          />
        </svg>
      }
      title="No usage logs"
      description="Ensures privacy by not recording user activities. Optimize network traffic and improve user experience."
    />
    <Feature
      icon={
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.2998 33.2H31.0248V51.2C31.0248 53.85 34.3248 55.1 36.0748 53.1L54.9998 31.6C56.6498 29.725 55.3248 26.8 52.8248 26.8H45.0998V8.8C45.0998 6.15 41.7998 4.9 40.0498 6.9L21.1248 28.4C19.4998 30.275 20.8248 33.2 23.2998 33.2Z"
            fill="#F77937"
            stroke="white"
            stroke-width="3"
            stroke-linejoin="round"
          />
          <path
            opacity="0.4"
            d="M21.25 10H3.75M18.75 50H3.75M11.25 30H3.75"
            stroke="white"
            stroke-width="3"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      }
      title="High speed"
      description="Maximizes speed for an optimal browsing experience with lower ping times for faster response."
    />
  </section>
);

const Hero: React.FC = () => (
  <div className="from-pink-500 via-orange-500 to-red-500 bg-no-repeat bg-top bg-cover bg-hero-pattern min-h-[722px] overflow-hidden">
    <HeroSection />
    <FeaturesSection />
  </div>
);

export default Hero;
