import ContactButton from "../ui/contact-button";

export default function Page() {
    return (
      <div className="mt-10 flex flex-wrap justify-center">
        <ContactButton which="facebook"/>
        <ContactButton which="x" />
        <ContactButton which="github" />
        <ContactButton which="google" />
      </div>
    );
  }