import Image from "next/image";
import bg from "../../../../public/background/contact.jpg";
import Form from "@/components/Contact/Form";

export const metadata = {
  title: "Contact Yilmaz Bingol",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent  font-semibold text-center text-4xl capitalize">
            Unleash the Innovator
          </h1>
          <h2 className="text-center  xs:text-base ">
            Thank you for reaching out! I'm thrilled to hear from you. Whether
            you have a question, a project idea, or just want to say hello, I'm
            all ears. Your message is important to me, and I'll do my best to
            respond as promptly as possible. Let's collaborate and bring your
            ideas to life!
          </h2>
        </div>
        <Form />
      </article>
    </>
  );
}
