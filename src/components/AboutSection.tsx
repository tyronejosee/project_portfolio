import { Button } from "../components";
import { FULL_NAME, ABOUT_ME, GMAIL, GITHUB, LINKEDIN } from "../constants";
import signature from "/svg/signature_example.svg";

export const AboutSection = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${import.meta.env.BASE_URL}cv_template.pdf`;
    link.download = 'cv_template.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="w-full h-[600px] flex items-center justify-center">
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
        <article className="order-2 md:order-1 flex flex-col justify-center">
          <div className="max-w-sm mx-auto space-y-2">
            <span className="text-lg font-medium leading-tight">Portfolio / About</span>
            <h2 className="scroll-m-20 text-4xl font-bold tracking-tight border-b dark:border-neutral-800 pb-6">
              Hello, I'm <span className="text-chartreuse-500">{FULL_NAME}</span>
            </h2>
            <p className="text-neutral-500">{ABOUT_ME}</p>
            <img
              src={signature}
              alt="Signature"
              className="hidden md:block w-52"
            />
            <div>
              <div className="space-x-2">
                <Button variant="primary">Contact</Button>
                <Button variant="secondary" onClick={handleDownload}>Download CV</Button>
              </div>
              <div className="flex space-x-2 mt-4">
                <a
                  href={GMAIL}
                  className="p-4 hover:bg-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-chartreuse-400 items-center rounded-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                  </svg>
                </a>
                <a
                  href={LINKEDIN}
                  className="p-4 hover:bg-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-chartreuse-400 items-center rounded-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href={GITHUB}
                  className="p-4 hover:bg-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-chartreuse-400 items-center rounded-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </article>
        <figure className="order-1 md:order-2 flex justify-center">
          <div className="flex flex-col justify-center aspect-square">
            <img
              className="overflow-hidden rounded-full border dark:border-neutral-800 dark:hover:border-neutral-500 hover:shadow-2xl dark:hover:shadow-chartreuse-500 transition-all ease-in-out"
              src="/images/profile.webp"
              alt="Profile"
            />
          </div>
        </figure>
      </div>
    </section>
  );
};
