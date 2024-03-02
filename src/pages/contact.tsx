import type { NextPage } from "next";
import Head from "next/head";
import ContactSection from "~/components/contactSection";

const Contact: NextPage = ({}) => {
  return (
    <>
      <Head>
        <title>Saivamsi Addagada | Contact</title>
      </Head>
      <main className="flex flex-1 pt-20">
        <ContactSection className="w-full" />
      </main>
    </>
  );
};
export default Contact;
