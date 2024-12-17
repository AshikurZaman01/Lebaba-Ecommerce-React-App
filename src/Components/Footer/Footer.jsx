import Company from "./Company"
import ContactInfo from "./ContactInfo"
import InstagramFooter from "./InstagramFooter"
import UsefulLinks from "./UsefulLinks"

const Footer = () => {
    return (
        <div>
            <footer className="section__container footer__container">

                <ContactInfo></ContactInfo>

                <Company></Company>

                <UsefulLinks></UsefulLinks>

                <InstagramFooter></InstagramFooter>

            </footer>

            <p className="text-center mb-10">© {new Date().getFullYear()} Lebaba. All Rights Reserved.</p>


        </div>
    )
}

export default Footer