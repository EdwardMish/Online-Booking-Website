import React from "react";
import Container from "components/UI/Container/Container";
import Heading from "components/UI/Heading/Heading";
import PageWrapper from "./Privacy.style";
import { Col, Row } from "antd";
import { Table } from "antd";

export default function Privacy() {
  return (
    <PageWrapper>
      <Container>
        <Heading as="h1" className="privacy-title" content="Reservations Center Privacy Statement" />
        <Heading as="h4" style={{ color: "#4772FF", paddingTop: 0 }} content="Last Updated: March 31, 2021" />
        <p>
          This privacy policy is in place to provide you with information about how we collect, use, and share
          information through this website, its associated web pages, and any associated mobile application (which we
          refer to, together with all associated content, functionality, and connected services, as the “site”).
        </p>
        <p>
          The site is owned and operated by Reservations Center, LLC (“Reservations Center”). In addition, the site
          utilizes a service provider (the “service provider”), which has a platform that it licenses to Reservations
          Center and performs services related to reservations made through the site. Reservations Center and service
          provider are collectively referred to as “us”, “we” or “our” throughout this policy. When we refer to “you”
          and “your” in this policy, we are referring to you as a visitor to and user of the site.
        </p>

        <p>
          Your access to the site and all communications between you and us are subject to this privacy policy.{" "}
          <strong>
            PLEASE READ THIS PRIVACY POLICY COMPLETELY AND CAREFULLY BEFORE USING THE SITE OR SUBMITTING ANY
            INFORMATION, PARTICULARLY PERSONAL INFORMATION, THROUGH THE SITE. BY USING THE SITE, YOU ARE AGREEING TO
            THIS PRIVACY POLICY.
          </strong>
        </p>
        <p>
          This privacy policy is a part of the site terms and conditions, located here Reservations Center/policies,
          which is incorporated into this policy by reference.
        </p>
        <p>
          Because of changes in Internet technology and practices, this privacy policy may change from time to time. We
          will post any changes we make to this privacy policy on this page, and any changes will be effective once the
          new policy is posted. It is your responsibility to check this privacy policy for updates. You can determine
          when this privacy policy was last updated by referring to the “Last Updated” legend at the top.{" "}
          <strong>
            {" "}
            By using the site after we post any changes to this privacy policy, you agree to accept those changes,
            whether or not you have reviewed them.
          </strong>
        </p>
        <Heading
          as="h2"
          content="1. HOW WE COOLECT AND USE YOUR PERSONAL INFORMATION"
          className="terms-section-header"
        />

        <Heading as="h3" content="A. What Is Personal Information?" className="terms-section-header" />
        <p>
          Personal information refers to information that we can use to personally identify a specific individual.
          Different states and countries define personal information (and similar terms, such as personal data and
          personally identifiable information) to include different things, but it generally includes information like
          your name, mailing address, email address, and phone number. It may also include your computer or mobile
          device IP address, if that IP address can be linked to a particular person, or geo-location information, again
          if that information can be used to pinpoint a specific person.
        </p>
        <Heading as="h3" content="B. Providing Personal Information Is Your Choice." className="terms-section-header" />
        <p>
          You are in control of whether you provide us with your personal information – you can visit and view the site
          without disclosing any personal information about yourself. However, if you choose to make use of certain
          features of the site, you may need to provide certain personal information to us. For example, if you choose
          to use the site to make reservations or post reviews or other content, you will be required to enter certain
          personal information.
        </p>
        <p>
          If you are not comfortable with providing information to us, you should not do so. Although that will affect
          your ability to use our reservations platform, that is your choice. If you do provide us with any personal
          information, you agree that it will be accurate and complete, and you understand that it is your
          responsibility to update your personal information as necessary to keep it current.
        </p>
        <Heading
          as="h3"
          content="C. The Personal Information We Collect, Why We Collect It, and How We Use It."
          className="terms-section-header"
        />
        <p>
          The amount and type of personal information we collect from you depends on your activities and use of our
          site. Below, we describe the types of personal information we collect, our reasons for collecting that
          information, and how we use it.
        </p>
        <Row gutter={30} className="terms-section pl-50">
          <Col xl={24} xs={24}>
            <Heading as="h4" content="Device and Browsing Information." style={{ fontSize: "18px" }} />
            <p>
              When you visit our site, we may collect your device IP address, referring website(s), browser and device
              types, and the pages that you visit. We collect this information to provide you with a more personalized
              site experience. Note that although this information may be considered personal information under some
              laws, we do not link it to other personal information about you.
            </p>
          </Col>
          <Col xl={24} xs={24}>
            <Heading as="h4" content="Identification and Contact Information. " style={{ fontSize: "18px" }} />
            <p>
              This is information that identifies you as an individual (like your first and last name), and information
              that enables us to contact you (like your email address, mailing address, or phone number). It also may
              include information about you, such as information about reservations made and how you have interacted
              with our site.
            </p>
            <p>
              We will collect this information if you make a reservation or create an account on our site, if you sign
              up to receive our emails, newsletters, or other promotional materials, or if you participate in any
              interactive services or features our site may offer from time to time, such as contests, surveys, and
              other activities. We will also be provided with your name and email address if you reach out to us using
              any “Contact Us” features of the site.
            </p>
            <p>
              We collect and use this information for the purposes of (a) verifying your identity when you make a
              reservation, create an account, or access certain features of our site; (b) transacting business with you,
              which includes managing your reservation and/or account on our site, fulfilling bookings, contacting you
              about your reservation, conducting customer service, and seeking feedback on our products and services;
              (c) responding to any inquiry you send to us; and (d) subject to your right to opt out and subject to
              applicable law, sending you newsletters and other promotional materials.
            </p>
          </Col>
          <Col xl={24} xs={24}>
            <Heading as="h4" content="Billing Information. " style={{ fontSize: "18px" }} />
            <p>
              If you make reservations using our site, the service provider will collect applicable billing information
              from you, such as credit card or bank account information, or, depending on payment options, information
              about your third party payment account. The service provider collects and uses this information to process
              required payments.
            </p>
          </Col>
          <Col xl={24} xs={24}>
            <Heading as="h4" content="Location Information. " style={{ fontSize: "18px" }} />
            <p>
              If you make reservations using our site, we will collect information relating to the location of your
              travel, in order to provide you with relevant hotel information and in order to process your reservation.
            </p>
          </Col>
        </Row>
        <Heading
          as="h3"
          content="D. Certain Generally-Applicable Uses of Personal Information."
          className="terms-section-header"
        />
        <p>
          In addition to the specific uses described above, the personal information we collect may be used for the
          following additional purposes, all of which are related to our operation of our business and our provision of
          services:
        </p>
        <ul className="terms-list">
          <li>Managing and personalizing your experience on the site;</li>
          <li>Evaluating and improving our site and our product and service quality;</li>
          <li>Complying with legal requirements; and</li>
          <li>Preventing and addressing fraud and breaches of our site requirements and policies.</li>
        </ul>
        <Heading as="h3" content="E. How Long We Keep Personal Information." className="terms-section-header" />
        <p>
          We collect personal information for as long as we continue to have a business need to do so (which will be at
          least as long as you continue have an open reservation or, if applicable, an account on our site), unless a
          longer period is required by law. Business needs include legal, taxation, accounting, risk management, and
          other business purposes.
        </p>
        <Heading as="h2" content="2. HOW AND WHY WE SHARE PERSONAL INFORMATION" className="terms-section-header" />
        <p>
          We restrict access to your personal information to those who need to access it to use it as described in this
          privacy policy. We share personal information with third parties in the following circumstances:
        </p>
        <ul className="terms-list">
          <li>
            Reservations Center and the service provider receive and share information as necessary to process
            reservations and booking requests.
          </li>
          <li>
            We will provide personal information to our other trusted service providers who need to use that information
            to conduct business on our behalf. These third parties include the accommodation providers, the credit card
            processing companies to complete billing and payment, and others who may assist us with email and newsletter
            distribution. We provide these service providers only with the information they need to perform their
            services, and work with them to respect and protect your privacy.
          </li>
          <li>
            We may share your personal information with our company affiliates and business partners for our and their
            legitimate business purposes, including so that we or they may provide you with promotional emails, special
            offers, or other materials that may interest you. If you do not wish for us to share your information in
            this manner, please let us know by contacting us at <strong> Booking@reservations-center.com</strong>.
            However, please note that we are not responsible for the privacy policies of these third parties once they
            have received your information.
          </li>
          <li>
            We will release information, including personal information, if we believe that doing so is appropriate to
            (a) comply with law, regulations, legal process or governmental request, (b) enforce any policies applicable
            to the site, including potential violations, (c) detect, prevent or otherwise address fraud, security or
            technical issues, or (d) otherwise protect the rights, property or personal safety of us, our employees,
            site users, or others.
          </li>
          <li>
            We may share information, including personal information, in connection with, during negotiations of, or as
            a part of the closing of, any merger, sale of company assets, financing or acquisition of all or a portion
            of our business to another company in which personal information about the users of our site is among the
            assets transferred.
          </li>
        </ul>
        <p>
          We do not sell, rent, or lease any personal information that we collect about you through the site to anyone
          for any purpose, other than as disclosed, unless you have given us your separate express permission to do so.
        </p>
        <Heading as="h2" content="3. COOKIES AND OTHER TRACKING TECHNOLOGY" className="terms-section-header" />
        <Heading as="h3" content="A. How We Use Cookies." className="terms-section-header" />
        <p>
          Cookies are small text files that are stored on your browser, device, or the page you are viewing when you
          visit a website. Some cookies are deleted once you close your browser or application (session cookies), while
          other cookies are retained even after you exit so that you can be recognized when you return (persistent
          cookies). We use session cookies to make it easier for you to navigate our site. We use persistent cookies to
          store your email address and, subject to our site features and your setting preferences, your account login
          information, so you don’t have to enter it more than once. We also use persistent cookies to store purchase
          and log data, and to personalize your shopping experience, and to track and target the interests of our users
          to enhance their experience on our site.
        </p>
        <p>
          Cookies do not typically contain any information that personally identifies a user, and we do not link the
          information stored in cookies to any personal information that you submit when using our site.
        </p>
        <p>
          Most web browsers automatically accept cookies and other tracking technologies, but you can usually change
          your settings to prevent that, such as by having your device warn you each time a cookie is being sent or
          choosing to turn off all cookies. On our site, you will be able to disable all cookies other than persistent
          cookies that are required when you make a purchase. This can be done through your web browser settings, and
          because each browser is different, you should look at your browser’s “Help” menu to learn how to modify your
          cookie settings.
        </p>
        <p>
          If you do disable cookies from your browser you may not be able to access certain sections of the site that
          use essential cookies, and this may make your experiences on the site less efficient.
        </p>
        <Heading as="h3" content="B. Third Party Tracking Technologies." className="terms-section-header" />
        <p>
          We may allow third parties to set cookies during your visit to the site. These are third parties that provide
          us with information about how you use the site. They may also use cookies, on our behalf, to promote our
          newest products and services on other websites based on your activity on our site. For example, you may see
          hotels that you viewed on our site presented on other websites as you move around the internet.
        </p>
        <p>
          In addition, various third parties, including our analytics providers and our ad partners, may use cookies,
          alone or with other tracking technology, to collect information about you when you use the site for their own
          purposes, independent from us. These third parties may be able to associate the information they collect with
          your personal information, or they may collect information, including personal information, about your online
          activities over time and across other website and online services. They may use this information to provide
          you with behavioral advertising or other targeted content on other websites and through other media.
        </p>
        <p>
          We cannot control any third parties’ tracking technologies or how they may be used. If you have any questions
          about an advertisement or other targeted content, you should contact the responsible provider directly.
        </p>
        <Heading as="h3" content="C. Do Not Track Requests." className="terms-section-header" />
        <p>
          Currently, certain browsers offer a “do not track” (DNT) option. This option, using a technology known as a
          DNT header, sends a signal to websites visited by the user about the user’s DNT preference, if any, set on the
          browser. We do not currently commit to responding to browsers’ DNT signals. We cannot make this commitment
          because there is not a common understanding among industry groups, technology companies, or regulators about
          how to interpret the DNT signal.
        </p>
        <Heading as="h2" content="4. THIRD PARTY SITE AND SOCIAL SHARING FEATURES" className="terms-section-header" />
        <p>
          Our site may include links to other websites, including hotel sites and travel review sites. We do not control
          the privacy practices of any third parties, and if you submit personal information to any of those sites,
          their collection and use of your information is governed by their privacy policies, which differ from ours. We
          encourage you to carefully read the privacy policy of any website you visit.
        </p>
        <p>
          Our site may offer social network and similar sharing features, such as Facebook, Twitter, Instagram, and
          similar buttons, which let you share information related to the site through your preferred social media
          platforms. If you permit a connection between our site and your social network page(s), we (and the social
          network) may be able to identify you, and associate the information we (and they) receive with information we
          (and they) already have about you. In addition, depending on how you use those features and your settings with
          the social network provider(s), the information you share to your social network pages will be available to
          others, including your friends and/or the public. For more information about how your information may be
          shared through those social networks once it is provided to them, you should review the privacy policies of
          those social networks.
        </p>
        <Heading as="h2" content="5. Our Security Measures" className="terms-section-header" />
        <p>
          We use a variety of industry-standard security measures to maintain the safety of your personal information,
          including measures designed to secure your personal information from accidental loss and from unauthorized
          access, use, alteration and disclosure. We store the personal information you provide on secure (password- and
          firewall-protected) servers. All electronic financial transactions conducted through our site are protected by
          encryption technology.
        </p>
        <p>
          Unfortunately, no electronic data transmission over the Internet can be guaranteed to be 100% secure. As a
          result, while we believe that we use reasonable measures to protect personal information, we cannot ensure or
          warrant the security of any information transmitted or otherwise provided to us or received from us.
        </p>
        <p>
          It is your responsibility for keeping all information associated with your reservation and, if applicable, all
          account information, confidential. We will never ask for any password (unless one is necessary to create an
          account).
        </p>
        <Heading as="h2" content="6. YOUR RIGHTS REGARDING Your Information" className="terms-section-header" />
        <Heading as="h3" content="A. General Rights." className="terms-section-header" />
        <Row gutter={30} className="terms-section pl-50">
          <Col xl={24} xs={24}>
            <Heading as="h4" content="Providing Personal Information Is Your Choice," style={{ fontSize: "18px" }} />
            <p>
              You can browse the site without providing any personal information, other than browsing data (which we
              will not attempt to link to any other personal information). However, if you choose to use the site to
              engage with us, such as by booking reservations or requesting information, you will be required to provide
              us with the necessary information. If you do not want to provide us with any information, you should not
              use our site.
            </p>
          </Col>
          <Col xl={24} xs={24}>
            <Heading
              as="h4"
              content="Your Rights to Opt Out of Certain Communications, "
              style={{ fontSize: "18px" }}
            />
            <p>
              You can always opt out of receiving promotional communications such as our newsletters by selecting the
              “unsubscribe” link included in any email communications, or by contacting us at us at
              Booking@reservations-center.com. Please note that despite your email preferences, we may need to contact
              you regarding outstanding orders, as required by law, or regarding legal matters. However, we will not
              send you marketing communications after you have opted out of receiving them.
            </p>
          </Col>
          <Col xl={24} xs={24}>
            <Heading as="h4" content="How to Update and Change Your Information, " style={{ fontSize: "18px" }} />
            <p>
              If you have a reservation on our site that you wish to change, you can access and edit your reservation
              online. In addition, you can contact us at any time at Booking@reservations-center.com to request that we
              make any edits to any personal information that you believe we maintain.
            </p>
          </Col>
          <Col xl={24} xs={24}>
            <Heading as="h4" content="How to Request Deletion of Your Information, " style={{ fontSize: "18px" }} />
            <p>
              As noted above, we have standard retention practices with respect to the personal data we collect, and
              your personal information will be retained and used as described in this privacy policy. If you would like
              to request any earlier removal of your personal information, you can also contact us at
              Booking@reservations-center.com. Please note that we may not be able to completely remove personal
              information from the site or our systems in certain circumstances. This will be true if the data is not in
              a searchable format or if it is retained in backup systems or cashed or archived pages. Once we no longer
              need it to provide you with requested services, we will retain and use your information only as necessary
              to comply with our legal obligations, resolve disputes, prevent fraud or future abuse, and enforce our
              agreements, including any site terms.
            </p>
          </Col>
        </Row>
        <Heading as="h3" content="B. Certain Rights of California Residents." className="terms-section-header" />
        <p>If you are a California resident, please see the Additional Information for California Residents, below.</p>
        <Heading as="h3" content="C. Certain Rights of Nevada Residents." className="terms-section-header" />
        <p>
          If you are a Nevada resident, please note that we do not sell information as defined in and for purposes of
          Nevada’s online privacy law.
        </p>
        <Heading as="h3" content="D. Certain Rights of EU Persons." className="terms-section-header" />
        <p>
          For our users in the European Union (EU), this privacy policy is intended to comply with Regulation (EU) 2016
          of the European Parliament and of the Council of 27 April 2016, known commonly as the General Data Protection
          act, or the GDPR. If you are in the EU, you have the following rights, subject to certain limitations and
          exceptions imposed by the GDPR:
        </p>
        <ul className="terms-list">
          <li>Right to Access – this is the right to request copies of your personal information from us.</li>
          <li>
            Right to Correct – this is the right to have personal information corrected if it is accurate or incomplete.
          </li>
          <li>
            Right to Erasure – this is the right to ask us to delete or remove your personal information from our
            systems.
          </li>
          <li>
            Right to Restrict Use – this is your right to block us from using, or to limit the ways we can use, your
            personal information.
          </li>
          <li>
            Right to Data Portability – this is your right to request that certain of your personal information be
            transferred to a different provider.
          </li>
          <li>
            Right to Object – this is your right to object to our use of your personal information, including when we
            use it for our legitimate interests, including for marketing purposes.
          </li>
        </ul>
        <p>
          If you have questions relating to the above rights, you can contact us at Booking@reservations-center.com. If
          you are not satisfied with how we have responded to any request you make regarding the above rights, you may
          be able to raise your complaint with the Data Protection Authority in your jurisdiction. You can find your
          national Data Protection Authority here.
        </p>
        <p>
          In addition, if you are from the EU or are otherwise located in the European Economic Area (EEA), we are
          required to give you information about the transfer of your information outside the EEA. When we transfer
          information outside of the EEA, it is our practice to enter into Standard Contractual Clauses to ensure the
          protection of the information we shared.
        </p>
        <p>
          For purposes of the GDPR, if you are located in the EU, Reservations Center and the service provider are joint
          controllers of the personal information you provide.
        </p>
        <Heading as="h2" content="7. A Note about Children" className="terms-section-header" />
        <p>
          Our site is not targeted to, and we have no interest in collecting information from, children. We do not
          knowingly gather any personal information from children under the age of 13. If you are a parent or legal
          guardian who believes that your child has provided us with any personal information, please contact us at
          Booking@reservations-center.com.
        </p>
        <Heading as="h2" content="8. INTERNATIONAL USERS" className="terms-section-header" />
        <p>
          If you are accessing the site from outside the United States and provide us with personal information through
          the site, you understand that your personal information will be transferred to and processed in the United
          States. The laws that apply to the use and protection of your personal information in the United States are
          different than the laws of other countries. By using our site, regardless of your country of origin and/or the
          country in which you access or use the site, you consent to the collection, sharing and use of your
          information, including any personal information, as described in this privacy policy.
        </p>
        <p
          style={{
            color: "#959595",
            fontWeight: 700,
            fontSize: "18px",
          }}
        >
          Additional Information for California Residents
        </p>
        <Heading
          as="h2"
          content="1. APPLICABILITY OF AND GENERAL INFORMATION ABOUT THIS CALIFORNIA PRIVACY NOTICE"
          className="terms-section-header"
        />
        <p>
          This Additional Information for California Residents(this “California Privacy Notice”) applies solely to
          residents of California (who are referred to as “you” or as “consumers” in this California Privacy Notice). It
          is provided as a supplement to the information contained in our privacy policy and is intended to provide
          additional details regarding our collection and use of personal information.
        </p>
        <p>
          This California Privacy Notice has been adopted to comply with the California Consumer Privacy Act of 2018,
          referred to as the “CCPA>”, so any terms defined in the CCPA (such as “personal information,” “consumer,”
          “service provider,” “third party,” and “sale/sell”) will have the same meaning when used in this California
          Privacy Notice. For example, a “consumer” refers to a natural person that is a resident of the state of
          California.
        </p>
        <Heading
          as="h2"
          content="2. THE CATEGORIES OF PERSONAL INFORMATION WE COLLECT"
          className="terms-section-header"
        />
        <p>
          For purposes of the CCPA, the table below describes the categories of personal information we have collected
          within the last 12 months and the categories of third parties with whom we have shared that information for a
          business or commercial purpose.
        </p>
        <div className="privacy-table">
          <table className="p-table">
            <thead>
              <th>Categories of Information We Collect</th>
              <th>Categories of Sources of this Information</th>
              <th>Purposes of Collection</th>
              <th>Categories of Third Parties to whom Information is Disclosed</th>
            </thead>
            <tr>
              <td>
                Identifiers - includes your name, mailing address, unique personal identifier (account ID), email
                address, phone number, and other, similar, identifiers
              </td>
              <td>·Directly from you</td>
              <td>
                ·Creating reservations on the site
                <br />
                ·Verifying a user’s identity
                <br />
                ·Providing our users with services
                <br />
                ·Communicating with users
                <br />
                ·Processing and completing reservations
                <br />
                ·Marketing
              </td>
              <td>
                ·Service Provider
                <br />
                ·Other service providers, including insurance providers, payment processors, email marketing platform
                providers, distribution partners, mail couriers, and internet/platform hosting providers
                <br />
                ·Hotel providers
              </td>
            </tr>
            <tr>
              <td>
                Personal information categories listed in the California Consumer Records statute (Cal. Civ. Code
                §1798.80(e)) – includes your name, postal address, telephone number, and credit card or similar account
                information
              </td>
              <td>·Directly from you</td>
              <td>
                ·Creating reservations on the site
                <br />
                ·Verifying a user’s identity
                <br />
                ·Providing our users with services
                <br />
                ·Communicating with users
                <br />
                ·Processing and completing reservations
                <br />
                ·Marketing
              </td>
              <td>
                ·Service Provider
                <br />
                ·Other service providers, including insurance providers, payment processors, email marketing platform
                providers, distribution partners, mail couriers, and internet/platform hosting providers
                <br />
                ·Hotel providers
              </td>
            </tr>
            <tr>
              <td>Commercial information – records of reservations</td>
              <td>·Providing our users with services</td>
              <td>
                ·Communicating with users
                <br />
                ·Processing and completing reservations
                <br />
                ·Marketing
              </td>
              <td>
                ·Service Provider
                <br />
                ·Hotel providers
              </td>
            </tr>
            <tr>
              <td>
                Internet or other similar network activity – includes browsing history, search history, or information
                on interaction with a website, application, or advertisement
              </td>
              <td>·Cookies and other tracking technologies</td>
              <td>
                ·Analytics
                <br />
                ·Evaluating and enhancing Site functionality
              </td>
              <td>·Service Provider</td>
            </tr>
            <tr>
              <td>Geolocation data – includes physical location</td>
              <td>·Directly from you (including through your device settings)</td>
              <td>·Providing location-based information (such as hotels in your travel destination)</td>
              <td>·Service Provider</td>
            </tr>
          </table>
        </div>
        <p>
          In addition to the business or commercial purpose of collection of personal information described above, we
          may use any of the personal information we collect for the general purposes disclosed in our main privacy
          policy, and may disclose personal information for our business and commercial purposes as described in our
          main privacy policy.
        </p>
        <Heading
          as="h2"
          content="3. INFORMATION ABOUT SALES OF PERSONAL INFORMATION"
          className="terms-section-header"
        />
        <p>In the past 12 months, we have not sold any personal information.</p>
        <p>
          While the CCPA has a broad definition of what constitutes a sale of information, many types of transfers of
          information do not qualify as “sales” under the CCPA. We have carefully evaluated the manner in which we share
          information to determine that we do not sell your personal information.
        </p>
        <p>
          As noted above, we share information with our service providers (including the platform service provider) who
          need the information in order to perform contracted services for us. This may include transfers such as those
          to the platform service provider as necessary to process reservations, and transfers to our credit card
          processors to complete payments. We enter into agreements with each service provider that limit the purposes
          for which the personal information may be used and that require the third party to keep that personal
          information confidential. With these protections, these transfers are not considered “sales” under the CCPA.
        </p>
        <Heading
          as="h2"
          content="4. YOUR RIGHTS AND CHOICES REGARDING YOUR PERSONAL INFORMATION UNDER THE CCPA"
          className="terms-section-header"
        />
        <p>
          The CCPA provides California residents with certain specific rights regarding their personal information. This
          section describes your CCPA rights, and explains how to exercise them. Please note that your rights are
          subject to limitations and exceptions described in the CCPA.
        </p>
        <ul className="terms-list">
          <li>
            Right to Access Certain Information – You have the right to ask us to provide you with information about our
            collection and use of your personal information over the past 12 months.
          </li>
          <li>
            Right to Data Portability – You have the right to ask us to provide you with copies of personal information
            that we have collected about you, in a portable and readily-usable format.
          </li>
          <li>
            Right to Request Deletion of Certain Information – You have right to ask us to delete personal information
            about you that we have collected and retained.
          </li>
          <li>
            Right to Non-Discrimination – You have the right not to be discriminated against for exercising any of your
            CCPA rights.
          </li>
        </ul>
        <p>
          If you make a request to delete your personal information, we can deny that request if we or our service
          providers need to keep the information to:
        </p>
        <ul className="terms-list">
          <li>
            Complete the transaction for which we collected the personal information, provide you with a product or
            service you have requested, take other actions reasonably anticipated within the context of our ongoing
            business relationship with you, or otherwise perform a contract with you;
          </li>
          <li>
            Detect security incidents, protect against illegal or fraudulent behavior, or engage in legal actions with
            persons responsible for such activities;
          </li>
          <li>Debug products to identify and repair errors impacting the functionality of our site or services;</li>
          <li>
            Exercise free speech or ensure other consumers’ rights to free speech, or otherwise exercise rights provided
            by law;
          </li>
          <li>Comply with the California Electronic Communications Privacy Act (Cal. Penal Code §1546);</li>
          <li>
            Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest
            that adheres to all other applicable ethics and privacy laws, when the information’s deletion may likely
            render impossible or seriously impair the research’s achievement, if you previously provided informed
            consent;
          </li>
          <li>
            Enable solely internal uses that are reasonably aligned with consumer expectations based on your
            relationship with us;
          </li>
          <li>Comply with a legal obligation; or</li>
          <li>
            Make other internal and lawful uses of that information that are compatible with the context in which you
            provided it.
          </li>
          <p>
            To exercise any of the rights described above, you must submit a verifiable consumer request to us. You can
            do so by:
          </p>
        </ul>
        <ul className="terms-list">
          <li>
            Sending us an email with the subject heading “California Privacy Rights” at Booking@reservations-center.com;
            or
          </li>
          <li>Calling us at 833-612-1634.</li>
        </ul>
        <p>
          Only you, or a person registered with the California Secretary of State that you expressly authorize to act on
          your behalf, can make a verifiable consumer request related to your personal information. You may also make a
          verifiable consumer request on behalf of your minor child.
        </p>
        <p>
          If you contact us to exercise your California privacy rights, you must attest to the fact that you are a
          California resident, and provide us with a current California address. We cannot respond to your request or
          provide you with information if we cannot identify you or confirm your authority to make the request, so any
          request will require you to provide sufficient information to allow us to reasonably verify your identity
          and/or the identity and authorization of your agent (if applicable). We will only use any personal information
          provided in a verifiable consumer request to verify the requesting party’s identity or authority to make the
          request, by matching that information with the personal information we already have about you.
        </p>
        <p>
          We will respond to any verifiable consumer request in the manner and within the timeframes required by the
          CCPA.
        </p>
        <p>
          You may only make a verifiable consumer request for access or data portability twice within any 12-month
          period.
        </p>
        <Heading
          as="h2"
          content="5. YOUR RIGHTS AND CHOICES REGARDING YOUR PERSONAL INFORMATION UNDER THE CCPA"
          className="terms-section-header"
        />
        <p style={{ marginBottom: "80px" }}>
          In addition to the CCPA, California’s “Shine the Light” law permits California residents to request certain
          details about our disclosure of their personal information to third parties for those third parties’ own
          direct marketing purposes. If you are a California resident and you would like to make such a request, please
          contact us at Booking@reservations-center.com. Please note that there are legal limits on how often you can
          make such a request, and we are only obligated to respond to one information request per customer per year. In
          addition, if any California residents under the age of 18 have used the site, created a reservation and posted
          content or information on the site, they can request removal by contacting us at
          Booking@reservations-center.com detailing where the content is posted and confirming that they posted it.
          Following such a request, we will terminate the unauthorized reservation, and will make reasonable good faith
          efforts to remove any post or information from public view, or anonymize it so that the minor cannot be
          individually identified. However, removal of public postings cannot ensure complete or comprehensive removal,
          as third parties may republish, archive, or cache web content in a manner that is out of our control.
        </p>
      </Container>
    </PageWrapper>
  );
}
