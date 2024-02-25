import type { NextPage } from "next";
import Head from "next/head";
import ContactSection from "~/components/contactSection";

const Contact: NextPage = ({}) => {
  return (
    <>
      <Head>
        <title>Saivamsi Addagada | Contact</title>
      </Head>
      <ContactSection />
    </>
  );
};
export default Contact;
