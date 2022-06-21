import React from "react";
import Container from "components/UI/Container/Container";
import Heading from "components/UI/Heading/Heading";
import PageWrapper from "./terms.style";
import { Col, Row } from "antd";

export default function Terms() {
  return (
    <PageWrapper>
      <Container>
        <Heading as="h1" style={{ fontSize: "46px" }} content="Reservations Center Terms and General Terms of Use" />
        <Heading as="h4" style={{ color: "#4772FF", paddingTop: 0 }} content="Last Updated: March 31, 2021" />
        <p>
          Welcome to Reservations Center. Below, we describe the terms and conditions for booking through our site, as
          well as the terms and conditions covering use of our site. References to the “terms” refer to collectively to
          the booking terms and the general terms of use.
        </p>
        <p>
          When we use the term “site” throughout these terms, we are referring to www.Reservations Center and any
          affiliated sites and/or mobile applications, as well as all associated content, functionality, and services.
        </p>
        <p>
          The site is owned and operated by Reservations Center, LLC, who we refer to as “Reservations Center” or the
          “site owner”. In addition, to provide you with services through the site, including assistance with fulfilling
          reservations, Reservations Center uses the services of and licenses a platform from a third party vendor, who
          we refer to in these terms as the “service provider.” References in these terms to “we,” “us,” and “our” refer
          to Reservations Center and/or the service provider, as the context may require, and the service provider is a
          third-party beneficiary of all provisions of these terms relating to dispute resolution, disclaimers,
          limitations of liability, indemnification, and releases.
        </p>
        <Heading as="h3" content="Acceptance of terms" className="terms-section-header" />
        <Row gutter={30} className="terms-section">
          <Col xl={12} xs={24}>
            <p>
              <strong> YOU SHOULD CAREFULLY READ ALL OF THESE TERMS.</strong> By accessing, browsing, or otherwise using
              our site, including by booking any stays, you are entering into a binding contract with us, and you are
              acknowledging that you have read, understood, and agree to be bound by these terms. If you do not want to
              agree to these terms, you should not access or use the site.
            </p>
            <p>
              In order to provide services to you through the site, it is critical for us to have an agreement in place
              with you that establishes your responsibilities, and your acknowledgement of that agreement. Therefore,
              you understand that as a condition to using the site for any reason, including to book accommodations, you
              represent, warrant, and agree that: (a) you are at least 18 years old and have the capacity to enter into
              a contract, (b) you are using your actual identity, (c) you have provided only true, accurate, current,
              and complete information to us, (d) you will maintain and promptly update the information you provide to
              us to keep it true, accurate, current, and complete, (e) when making any booking, you are acting only for
              yourself or for another person (or entity) that has expressly authorized you to make such booking, and (f)
              you have read, understood, and agreed to these terms.
            </p>
          </Col>
          <Col xl={12} xs={24}>
            <p>
              We may make changes to the site or these terms at any time. Any modifications will be effective when the
              changes are posted to the site. You can review the most current version of these terms at any time by
              accessing the site, and you can determine when the terms were last revised by referring to the “Last
              Updated” legend at the top. It is your responsibility to check these terms for updates.
              <strong>
                You understand and agree that your continued access to and/or use of the site after any posted
                modifications to these terms indicates your acceptance of the modifications, even if you did not take
                the time to read them.
              </strong>
            </p>
          </Col>
        </Row>
        <Heading as="h3" content="Booking terms" className="terms-section-header" />
        <p>
          In addition to the General Site Terms posted below, the following terms apply to any reservations and stays
          you book through the site.
        </p>
        <Heading as="h4" content="1. Our Role as Service Provider" className="terms-section-header" />
        <Row gutter={30} className="terms-section">
          <Col xl={12} xs={24}>
            <p>
              Reservations Center and our service provider are providing the site to connect you with hotels and other
              accommodation providers, to facilitate your making reservations from the providers of those accommodations
              and related services. Our sole role is to facilitate booking services, and you understand that we are not
              a hotel or hospitality company, and you have not been led to believe that you are booking a room with a
              hotel directly by using the site. We do not in any way own, manage, operate, or control any accommodation
              provider, do not purport to act as an agent or representative of any accommodation provider, and are not
              directly involved in providing accommodations and/or related services and amenities.
            </p>
          </Col>
          <Col xl={12} xs={24}>
            <p>
              As a result, we have no control over, and make no representations regarding, the quality, safety,
              legality, or sufficiency of the accommodations or other services offered, and/or the truth or accuracy of
              the listings on our site. We are not liable for any incidents occurring during your travel or your stay at
              any hotel. We do not control room location or assignment of the room(s). The accommodation suppliers are
              exclusively liable and responsibility for providing lodging and services to the people who have booked
              stays through the site, and for any incidents that may occur. The accommodation providers may have
              additional terms and conditions beyond those you see on the site. It is your responsibility when booking
              to review those terms and conditions.
            </p>
          </Col>
        </Row>

        <Heading as="h4" content="2. Authorization of Charge; Fees and Taxes" className="terms-section-header" />
        <Row gutter={30} className="terms-section">
          <Col xl={12} xs={24}>
            <p>
              You acknowledge that, by making a booking, you are requesting that we provide you with booking services,
              and authorize us to act as your agent in booking reservations on your behalf. You authorize us to book
              reservations for the prices charged by the respective hotel(s), plus any applicable fees and taxes
              (including our service fees). By submitting a reservation request through the site, you authorize us to
              process any and all reservations on your behalf, including making any payment arrangements.
            </p>
            <p>
              Rates and fees may under some circumstances be nonrefundable or have other restrictions set by the
              applicable hotels, and there may be other fees imposed by hotels, including limits on cancellation. You
              understand that if your reservation is nonrefundable or is not cancelled within the time required, the
              entire amount, including fees, taxes, and other charges, may be forfeited.
            </p>
          </Col>
          <Col xl={12} xs={24}>
            <p>
              We charge fees for using the site, including for delivery, fulfillment, and customer service fees. These
              service fees may vary depending on the type of booking you make. We have the sole discretion to determine
              the amount of service fees, which – together with taxes – will be disclosed to you prior to your
              finalizing any booking on the site. Service fees are nonrefundable, and we will retain them even if you
              change or cancel a booking or do not fulfill your obligations under these terms. In addition, we may
              retain a processing fee if you change or cancel reservations booked from our unpublished rates (for
              example, call center only specials or pre-negotiated promotions).
            </p>
          </Col>
        </Row>

        <Heading as="h4" content="3. Quoted Pricing; Hotel Provider Terms" className="terms-section-header" />
        <Row gutter={30} className="terms-section">
          <Col xl={12} xs={24}>
            <p>
              Prices quoted on the site are subject to change and correction at any time, but changes will not affect
              bookings that have already been accepted and confirmed. Bookings are not accepted and confirmed until all
              required payment has been made. WE EXPRESSLY RESERVE THE RIGHT TO CORRECT ANY PRICING ERRORS. IN SUCH
              EVENT, IF AVAILABLE, WE WILL OFFER YOU THE OPPORTUNITY TO KEEP YOUR PENDING RESERVATION AT THE CORRECT
              PRICE OR WE WILL CANCEL YOUR RESERVATION WITHOUT PENALTY. Special offers and discount pricing are only
              available at participating providers of those services pursuant to their terms, may be subject to certain
              requirements such as a minimum stay, restrictions on loyalty program qualifying stays, and may be subject
              to blackout dates or other restrictions. Prices shown on the site include applicable discounts and are
              based upon rates set by each hotel providing those services. Minimum stays may be required. Sale offers
              are subject to availability and may be discontinued without notice. Additional restrictions and blackout
              dates may apply. Fees and taxes for the room rate(s) will be listed, such as on the final pricing and on
              the confirmation email. However, the final rate quoted in the confirmation email does not include specific
              charges assessed by the hotel for miscellaneous expenses that you may incur, such as parking, room
              service, resort fees, city taxes, other taxes, internet use, or other miscellaneous charges. Posted rates
              are intended merely as guidelines and not as any form of guarantee of the final charges after your hotel
              stay. Because we only assist you in making reservations, we have no control or authority over the hotel
              providers’ rates, charges, or services, or over hotel providers’ maintenance, updates, renovations,
              quality, or deterioration of hotel rooms.
            </p>
          </Col>
          <Col xl={12} xs={24}>
            <p>
              Your applicable hotel provider may have additional terms and conditions, including regarding payments,
              availability, and liability waivers, which you must agree to abide by and should review carefully. The
              hotel provider terms and conditions could also include health related requirements. Your failure to comply
              with the requirements may result in the forfeiture of monies paid. Violation of any such terms and
              conditions may result in cancellation of your reservation or purchase and/or denial of access to any
              hotel(s). You may forfeit any monies paid for such reservation(s) or purchase(s), including all fees; and
              you authorize us to debit your account for any costs we incur as a result of any such violation. You may
              be required to provide official state or authorized government issued ID upon check-in for any booking. In
              addition, you may be required to provide a credit or debit card upon request from the hotel for
              incidentals (such as room service, valet, additional hotel taxes, fees, internet, beverages, spa services,
              and other fees and incidentals). Your failure to produce such ID may result in forfeiture of the booking
              without any right to refund.
            </p>
          </Col>
        </Row>

        <Heading as="h4" content="4. Cancellations and Changes" className="terms-section-header" />
        <Row gutter={30} className="terms-section">
          <Col xl={12} xs={24}>
            <p>
              Each accommodation provider is different. When making a booking, you should review any cancellation or
              change policy associated with your reservation, which will be enforceable and binding.
            </p>
            <p>
              If you would like to change any existing reservation, such as by adding nights, changing your
              accommodation requests and preferences, or otherwise, you should contact our customer service department.
              Any changes will be subject to availability and to any restrictions imposed by the hotel provider. You may
              be charged change and/or cancellation fees, depending on the nature of the request.
            </p>
            <p>
              Each reservation is subject to the hotel providers’ change and cancellation policy, which varies by
              provider. In the case of hotels and room reservations, the typical provider usually requires notice of
              cancellation at least 24 to 72 hours prior to your arrival date. You may cancel your prepaid hotel
              reservation(s), but you will be charged the change or cancellation fee(s) as stated on your confirmation
              email or as indicated in the policy for the hotel. If you do not change or cancel your reservation before
              the period applicable to the hotel you reserved, you will be subject to a charge as outlined in the
              hotel’s policy, which may be equal to applicable nightly rates, tax recovery charges, and service fees.{" "}
              <strong> NOTE: Some hotels charge for the entire stay.</strong> There are no refunds for no-shows or early
              check-outs. Late check-outs will result in an additional fee being owed to the hotel provider. If you
              intend to arrive at your hotel after the first night of your reservation, you MUST contact us prior to the
              commencement of the applicable cancellation policy to prevent cancellation of your reservation and avoid
              applicable fees from the hotel provider. You agree to pay any change or cancellation fees that you incur.
              You also agree to abide by the terms imposed with respect to your prepaid travel reservations. As noted
              above, our service fees are nonrefundable, even if you change or cancel a booking.
            </p>
          </Col>
          <Col xl={12} xs={24}>
            <p>
              We are entitled to act on instructions received using your email address and itinerary number or credit
              card. No reservation made by us, of any type, may be assigned or transferred to any third party except as
              expressly permitted by us in writing. We reserve the right to cancel any and all bookings or other
              transactions you have made using the site after you have been prohibited from using it.
            </p>
            <p>
              We will make no refund in the event of, and has no responsibility for expenses caused by, any act of God,
              fire, earthquake, substantial snowstorm, flood, epidemic, pandemic, disease, government-mandated
              shut-down, travel restrictions, quarantine, accident, explosion, casualty, strike, lockout, labor
              controversy, riot, civil disturbance, act of public enemy, embargo, war, any law ordinance or regulation,
              legal order (unless caused by our default hereunder), any failure or delay of any transportation, power,
              or communications system or any other similar cause not under our direct control. In the event that a
              hotel provider is unable to honor your reservation, we will not be liable for any cost or loss incurred
              due to rebooking.
            </p>
          </Col>
        </Row>

        <Heading as="h4" content="5. Chargebacks and Fraudulent Charges" className="terms-section-header" />
        <Row gutter={30} className="terms-section">
          <Col xl={12} xs={24}>
            <p>
              If we receive a chargeback or dispute from a credit or debit card company or bank for any reservation, we
              reserve the right to cancel any existing and/or future reservation without notice, and retain any service
              fee. We also reserve the right to recover any fees passed on to us by the credit or debit card company or
              bank, plus any amounts accrued as a result of the chargeback. You should contact our customer service
              department directly to resolve any billing issues.
            </p>
            <p>
              If your booking or account shows signs of fraud, abuse, or suspicious activity, we may cancel any bookings
              associated with your name, and, if applicable, suspend or terminate your account or access to the site. If
              you believe that we have made an error in cancelling your reservation or in suspending or terminating your
              account or access to the site, you should contact customer service.
            </p>
          </Col>
          <Col xl={12} xs={24}>
            <p>
              We reserve the right to take any legal action we believe is reasonably necessary to address any fraudulent
              or suspicious activity, including the initiation of a chargeback, and you may be liable for monetary loss,
              including litigation costs and damages.
            </p>
          </Col>
        </Row>

        <Heading as="h4" content="6. International Transactions" className="terms-section-header" />
        <Row gutter={30} className="terms-section">
          <Col xl={12} xs={24}>
            <p>
              Some banks and credit or debit card companies impose fees for international transactions. If you are
              making a booking from outside of the United States on a United States credit or debit card, your bank may
              convert the payment amount, both for the room and the membership fee charged by us, to your local currency
              and charge you a conversion fee. This means that the amount listed on your credit or bank card statement
              may be in your local currency and therefore may be a different figure than the figure shown on the billing
              summary page for the reservation booked through the site. In addition, a foreign transaction fee may be
              assessed if the bank that issued your credit or debit card is located outside of the United States.
              Booking international travel may be considered to be an international transaction by the bank or card
              company, since we may pass on your payment to an international travel supplier. If you have any questions
              about these fees or the exchange rate applied to your booking, please contact your bank.
            </p>
            <p>
              Currencies fluctuate in value. All payments and refunds are currently processed in United States dollars
              and will reflect the exchange rate in effect on the date of the payment or refund. All refunds are subject
              to this variation, and we are not responsible for any difference in exchange rates between time of payment
              and the time of refund.
            </p>
          </Col>
          <Col xl={12} xs={24}>
            <p>
              Currency rates are based on various publicly available sources and should be used as guidelines only.
              Rates are not verified as accurate, and actual rates may vary. Currency quotes are not updated in real
              time. You should check the date on the currency converter feature for the day that currency was last
              updated. The information supplied by this application is believed to be accurate, but Travel Agent and the
              providers do not warrant or guarantee such accuracy. When using this information for any financial
              purpose, we advise you to consult a qualified professional to verify the accuracy of the currency rates.
              We do not authorize the use of this information for any purpose other than your personal use, and you are
              prohibited from the use of this information for commercial purposes. Some jurisdictions may have different
              requirements, so these provisions may not apply to you.
            </p>
            <p>
              Although the site may be accessible worldwide, we make no representation that its content is appropriate
              or available for use in locations outside of the United States.
            </p>
          </Col>
        </Row>

        <Heading as="h4" content="7. Travel Risks and Advisories" className="terms-section-header" />
        <Row gutter={30} className="terms-section">
          <Col xl={12} xs={24}>
            <p>
              Travel to certain destinations may involve greater risk than others. By displaying hotels in particular
              areas, we do not represent or warrant that travel to those destinations is advisable or risk-free, and we
              are not liable for damages or losses that result from travel to those destinations. We urge you to review
              travel prohibitions, warnings, announcements, and advisories issued by the United States Government prior
              to booking travel to international destinations.
            </p>
          </Col>
          <Col xl={12} xs={24}>
            <p>
              You are responsible for ensuring that you meet foreign entry requirements and that your travel documents,
              such as passports and visas (transit, business, tourist, and otherwise), are in order and that any other
              foreign entry requirements are met. Information on conditions in various countries and the level of risk
              associated with travel to particular destinations can be found at www.state.gov, www.tsa.gov, www.dot.gov,
              www.faa.gov, www.cdc.gov, www.treas.gov, and www.customs.gov.
            </p>
          </Col>
        </Row>

        <Heading as="h3" content="GENERAL SITE TERMS" className="terms-section-header" />
        <Heading as="h4" content="1. Privacy Policy and Other Policies" className="terms-section-header" />
        <Row gutter={30} className="terms-section">
          <Col xl={12} xs={24}>
            <p>
              Please refer to or Privacy Policy for information about how we collect, use and disclose information about
              you. In addition to these terms, your use of the site is governed by our Privacy Policy and any other
              Reservations Center policies posted from time to time, all of which are incorporated by reference into
              these terms.
            </p>
          </Col>
          <Col xl={12} xs={24}></Col>
        </Row>
        <Heading as="h4" content="2. Accounts" className="terms-section-header" />
        <Row gutter={30} className="terms-section">
          <Col xl={12} xs={24}>
            <p>
              Depending on our site features, users of the site may have the ability to create an account to book
              reservations and to access other features of the site. If you create an account, you authorize us to act
              on any instructions received using your account information.
            </p>
            <p>
              If you have an account, you agree not to disclose or share your login information to or with any third
              party.
            </p>
          </Col>
          <Col xl={12} xs={24}>
            <p>
              If you have an account, you agree not to disclose or share your login information to or with any third
              party. You also agree that you will be solely responsible for the maintenance and security of your login
              information, and that you will be solely responsible for any activities conducted on or through the site,
              including any bookings made, in connection with your login information, regardless of whether or not you
              are the individual who undertakes such activities. This includes any unauthorized access and/or use of
              your account, your computer, or your mobile device.
            </p>
          </Col>
        </Row>

        <Heading as="h4" content="3. Your Responsibility When Using the Site" className="terms-section-header" />

        <Row gutter={30} className="terms-section">
          <Col xl={24} xs={24}>
            <p>
              You agree to use the site, and to share information from the site, only for its intended purpose, as
              described on the site and in these terms and any other applicable policy. Without limiting that general
              requirement, and in addition to your other obligations throughout these terms, you agree that you will
              not, directly or indirectly:
            </p>
            <ul className="terms-list">
              <li>
                Use the site in any manner that could interfere with, disrupt, negatively affect or inhibit other users
                from fully enjoying the site, or that could damage, disable, overburden or impair the functioning of the
                site in any manner;
              </li>
              <li>
                Engage in any discriminatory, defamatory, hateful, harassing, abusive, obscene, threatening, physically
                dangerous, or otherwise objectionable conduct while using the site;
              </li>
              <li>
                Attempt to indicate in any manner that you have a relationship with Reservations Center or that
                Reservations Center has endorsed you or any products or services for any purpose, unless Reservations
                Center has provided you with prior written permission to do so;
              </li>
              <li>
                Use the site to send any unsolicited or unauthorized advertising, solicitations, promotional materials,
                spam, junk mail, chain letters or pyramid schemes, or harvest or collect the email addresses or other
                contact information of other site users or any other person for any such purposes;
              </li>
              <li>
                Attempt to reverse engineer any aspect of the site or do anything that might discover source code or
                bypass or circumvent measures employed to prevent or limit access to any area, content or code of the
                site (except as otherwise expressly permitted by law);
              </li>{" "}
              <li>
                Access or attempt to access another’s reservation, or otherwise use or attempt to use another’s account
                without authorization from both Reservations Center and the other party;
              </li>
              <li>
                Interfere with the security of the site, including by attempting to obtain any other person’s personal
                information or by attempting to gain access to any reservation, account, or user information in a
                fraudulent manner;
              </li>
              <li>
                Develop any third-party application that interacts with our site or any content without Reservations
                Center’s prior written permission;
              </li>
              <li>
                Use any robot, iframe, spider, crawler, scraper or other automated means to interfere with, prevent, or
                otherwise disrupt access to the site, or to engage in any “screen scraping,” “database scraping,” or
                similar activities, including for the purpose of copying, extracting, aggregating, displaying,
                publishing or distributing any content made available via the site;
              </li>
              <li>
                Otherwise accumulate or index, directly or indirectly, through automated means or otherwise, any content
                made available through the site;
              </li>
              <li>Use the site to establish independent data files or otherwise amass statistical information;</li>
              <li>
                Use the site for any illegal or unauthorized purpose, or engage in, encourage or promote any activity
                that violates these terms or any applicable law.
              </li>
            </ul>
          </Col>
        </Row>

        <Heading
          as="h4"
          content="4. Interaction with Social Media; Links to Third Party Sites"
          className="terms-section-header"
        />
        <Row gutter={30} className="terms-section">
          <Col xl={12} xs={24}>
            <p>
              We may from time to time include features on the site that allow you to share information from the site,
              or provide comments and feedback regarding the site. Any comments and feedback will be subject to these
              terms and to any other policies and guidelines we may publish from time to time regarding user content. In
              addition, these interactive features may link to, or require you to log into, one of your social media,
              networking, or social sharing accounts (such as Facebook, Instagram, Twitter, Google, etc.), or may
              otherwise access or use your social media or other account information. We are not in control of your
              social media account(s) or how the social media service provider uses your information, which is governed
              by the setting and privacy policies of the social media account service providers. It is your
              responsibility to review the terms of use and other policies posted on the social media sites.
            </p>
            <p>
              The site may also include links to web pages, websites, and various resources or locations on the web
              provided by third parties, including travel review sites and sites operated by accommodations providers
              (collectively, including social media sites, “third party sites”).
            </p>
          </Col>
          <Col xl={12} xs={24}>
            <p>
              Links to third party sites are provided only for the convenience of our users. We do not operate, control,
              endorse or guarantee any third party sites, and neither these terms no any of our other policies apply to
              any third party sites. Instead, any use by you of any third party sites will be subject to the terms of
              use, privacy policy, and other policies that are posted on those third party sites. Again, you should
              review those third party site terms and policies.
            </p>
            <p>
              YOU AGREE THAT YOUR USE OF ANY THIRD PARTY SITE IS AT YOUR SOLE RISK AND WITHOUT WARRANTIES OF ANY KIND BY
              US, EXPRESSED, IMPLIED OR OTHERWISE. UNDER NO CIRCUMSTANCES ARE WE LIABLE FOR DAMAGES ARISING FROM ANY
              TRANSACTION BETWEEN YOU AND ANY THIRD PARTY SITE OR FOR ANY INFORMATION APPEARING ON THIRD PARTY SITES.
            </p>
          </Col>
        </Row>
        <Heading as="h4" content="5. Community Tools and User Content" className="terms-section-header" />
        <Row gutter={30} className="terms-section">
          <Col xl={24} xs={24}>
            <p>
              Certain sections of the site are free to access without registration. However, certain features are
              available only to registered users.
            </p>
            <p>
              The site may from time to time enable users to submit and share photos, stories, experiences, opinions,
              and travel blogs, all of which constitute “user content”. You are solely responsible for user content you
              disclose, submit or offer to us. You are also responsible for all activities conducted by any person
              accessing the site on your behalf or, if applicable, utilizing your account, even if you are not the
              individual who undertakes such activities. This includes any unauthorized access and/or use of your
              account or your computer or mobile device.
            </p>
            <p>
              Each time you submit any user content, you represent and warrant to us that you are the sole author and
              owner of all intellectual property and other rights in that user content, or you have the full legal right
              to submit it to us and grant us all rights to use it, without our needing to obtain any consent of any
              third party, and the user content does not and will not violate any of these terms.
            </p>
            <p>
              If you submit any user content to the site, you understand and agree that we have the right, but not the
              obligation, to use that user content, or any part of it, in our discretion and for any purpose, including
              advertising and promotional activities and/or any other commercial purposes, without any right of
              compensation to you or any third party. Accordingly, when you submit any user content, you grant to us a
              non-exclusive, transferable, perpetual, royalty-free, worldwide right and license to copy, use, reproduce,
              distribute, display, publish, adapt, prepare derivative works of, and/or amend any of that user content in
              any format, in any media and manner, and for any purpose (whether commercial, promotional, or otherwise),
              including within and to promote our site, without obtaining any further consent from you. You understand
              that no user content disclosed, submitted or offered to us will be treated as confidential, and you agree
              that you will not provide any user content that includes any confidential or proprietary information.
            </p>
            <p>
              All user content must comply with these terms and any other requirements we may implement from time to
              time. To that end, you will not, directly or indirectly post, upload to, transmit, distribute store,
              create or otherwise publish or send through the site any of the following:
            </p>
            <ul className="terms-list">
              <li>
                User content that is unlawful, libelous, defamatory, offensive, obscene, pornographic, indecent, lewd,
                suggestive, harassing, threatening, harmful, invasive of privacy or publicity rights, abusive,
                inflammatory, fraudulent, false, misleading, or otherwise objectionable;
              </li>
              <li>
                User content that would constitute, encourage or provide instructions for a criminal offense, violate
                the rights of any party, or otherwise create liability or violate any local, state, national or
                international law;
              </li>
              <li>
                User content that may infringe any patent, trademark, trade secret, copyright or other proprietary right
                of any party;
              </li>
              <li>
                User content that you do not have a right to submit, whether by law or under any contractual or
                fiduciary relationship;
              </li>
              <li>
                User content that contains or depicts any statements, remarks or claims that do not reflect your honest
                views and experiences;
              </li>{" "}
              <li>
                User content that contains personal information about any person, including names, addresses, email
                address, credit card information, or images of any individual, without that person’s permission;
              </li>
              <li>
                User content that impersonates or misrepresents your affiliation with any person or entity, including
                through the use of forged headers or identifiers that disguise the origin of any user content;
              </li>
              <li>Unsolicited promotions, political campaigning, advertising or solicitations;</li>
              <li>Viruses, corrupted data or other harmful, disruptive or destructive files or content; or</li>
              <li>
                User content that, in our sole judgment, is objectionable or which restricts or inhibits any other
                person from using or enjoying the site, or which may expose us, our business partners, our users, or any
                third parties to any harm or liability of any type.
              </li>
            </ul>
          </Col>
        </Row>
        <Heading as="h4" content="6. Site Ownership and Intellectual Property" className="terms-section-header" />
        <Row gutter={30} className="terms-section">
          <Col xl={12} xs={24}>
            <p>
              The site and our service provider’s platform, including all site software, databases, trademarks, logos,
              service marks, proprietary information and materials (and any intellectual property and other rights
              relating thereto) is owned or licensed by Reservations Center and/or our service provider, and will remain
              the property of the same. You acknowledge and agree that you do not acquire any ownership or licensing
              rights by using the site.
            </p>
            <p>
              You may use the site solely for your personal, non-commercial use in connection with accessing,
              evaluating, obtaining, and using our services. You are not granted any other right or license to use the
              site. Without limiting that general statement, you may not reproduce, represent, publish, distribu ]te,
              transmit, display, modify, create derivative work from, extract data from, or use or exploit in any way,
              in whole or in part, any site content without our prior written permission.
            </p>{" "}
            <p>
              You are permitted, and Reservations Center grants you a limited, non-exclusive, non-transferable license,
              to use view, download, and print any content from the site solely for the permitted use of such content,
              and not for republication, distribution, assignment, sublicense, sale, preparation of derivative works, or
              any other use. Without limiting that statement, you may not download, republish, retransmit, reproduce, or
              use in any other way any image on the site as a stand-alone file (i.e. separate from the article, text,
              caption, or other graphics used with the image in context on the site). No other rights or licenses
              whatsoever are granted to you or any other party except as expressly set forth herein.
            </p>
          </Col>
          <Col xl={12} xs={24}>
            <p>
              “Reservations Center” and all related names, logos, brands, product and service names, designs and slogans
              are trademarks of Reservations Center or our licensors. You may not use or reproduce, in whole or in part,
              any of these marks without our prior written permission. Further, you may not use any metatags, meta
              elements, "hidden text" or other equivalents using these names or any other colorable equivalent without
              our prior written permission. You will not remove or modify any copyright, trademark or other proprietary
              rights notice that appears on any portion of the site.
            </p>
            <p>
              Any violation of these restrictions and requirements may subject you to liability to the fullest extent
              provided under applicable law, including intellectual property law, for infringement and other legal
              action.
            </p>
          </Col>
        </Row>
        <Heading as="h4" content="7. Copyright Complaints" className="terms-section-header" />
        <Row gutter={30} className="terms-section">
          <Col xl={12} xs={24}>
            <p>
              Reservations Center takes claims of copyright infringement seriously. Accordingly, we accommodate and do
              not interfere with standard technical measures used by copyright owners to protect their materials.
            </p>
            <p>
              In the United States, the Digital Millennium Copyright Act, 17 U.S.C. Section 512 (as amended from time to
              time, the “DMCA”), provides a complaint procedure for copyright owners who believe that any materials on
              the site infringe their rights under US copyright law. If you are a US person, and you believe that your
              work has been improperly copied and posted on the site, you may request removal of those materials (or
              access thereto) by submitting written notification to our Copyright Agent (designated below). To comply
              with the DMCA, lease provide our Copyright Agent with the following information: (a) an electronic or
              physical signature of the person authorized to act on behalf of the owner of the copyright interest; (b) a
              description of the copyrighted work that you claim has been infringed; (c) a description of where the
              material that you claim is infringing is located on the site; (d) your address, telephone number and email
              address; (e) a statement by you that you have a good faith belief that the disputed use is not authorized
              by the copyright owner, its agent, or the law; and (f) a statement by you, made under penalty of perjury,
              that the above information in your notice is accurate and that you are the copyright owner or authorized
              to act on the copyright owner's behalf.
            </p>
          </Col>
          <Col xl={12} xs={24}>
            <p>
              Our Copyright Agent for notice of claims of copyright infringement can be reached at:{" "}
              <strong> copyright@Reservations Center</strong>.
            </p>
            <p>
              There can be penalties for false claims under the DMCA, so we strongly suggest that you consult your legal
              advisor before filing a DMCA notice with our copyright agent.
            </p>
          </Col>
        </Row>
        <Heading as="h4" content="8. Termination of Service" className="terms-section-header" />
        <Row gutter={30} className="terms-section">
          <Col xl={12} xs={24}>
            <p>
              We are free at any time and for any reason to refuse, interrupt, or suspend access to, to modify, and to
              remove or take down all or part of the site, including for operational or maintenance reasons We reserve
              the right at any time to suspend cancel your account or other use of the site for any reason and with no
              liability to you, including if you fail to comply with these terms. If we do cancel your account, you will
              no longer have any access any of the information associated with your account or any content submitted
              through your account. However, termination of your account or access to the site will not relieve you from
              any outstanding obligations regarding any booking you may have in progress at the time your account or
              access is terminated.{" "}
            </p>
          </Col>
          <Col xl={12} xs={24}>
            <p>
              We have the right, but not the obligation, to monitor the site (including any user content), at our
              discretion or at the request of third parties, in order to verify compliance with these terms and any
              other policies. However, we assume no responsibility or liability arising from any use of the site, and we
              are under no obligation to enforce these terms or any other policy on your behalf against any other user
              or other party.{" "}
            </p>
          </Col>
        </Row>
        <Heading as="h4" content="9. Limitation of Liability" className="terms-section-header" />
        <Row gutter={30} className="terms-section">
          <Col xl={12} xs={24}>
            <p>
              The accommodation providers available through the site are not our affiliates, agents, employees, or
              representatives, and we are not liable in any way for their acts, errors, omissions, representations,
              warranties, breaches, or violations.
            </p>
            <p>
              WE WILL NOT BE LIABLE TO ANY USER, TRAVELER, OR THIRD PARTY UNDER ANY THEORY OF LIABILITY – WHETHER BASED
              ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, WARRANTY, OR OTHERWISE – FOR ANY DAMAGES OR INJURY,
              INCLUDING INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, EXEMPLARY OR CONSEQUENTIAL DAMAGES (INCLUDING LOST
              PROFITS AND DAMAGES THAT RESULT FROM INCONVENIENCE, DELAY, OR LOSS OF USE), ARISING OUT OF OR IN ANY WAY
              CONNECTED WITH YOUR ACCESS TO USE OF THE SITE OR ANY CONTENT OR OTHER INFORMATION, MATERIALS, AND PRODUCTS
              INCLUDED ON OR OTHERWISE MADE AVAILABLE THROUGH THE SITE, INCLUDING (A) ANY FAILURE OF PERFORMANCE, ERROR,
              OMISSION, INTERRUPTION, DEFECT, DELAY IN OPERATION OF TRANSMISSION, COMPUTER VIRUS, OR LINE FAILURE, AND
              (B) ANY INABILITY TO USE, OR RELIANCE UPON, THE SITE, ANY CONTENT OR ANY SERVICES OBTAINED ON OR THROUGH
              THE SITE, IN EACH CASE EVEN IF THERE IS NEGLIGENCE BY US OR OUR AUTHORIZED REPRESENTATIVE, AND EVEN IF WE
              HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
          </Col>
          <Col xl={12} xs={24}>
            <p>
              OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THESE TERMS, THE SITE, OR ANY CONTENT OR
              OTHER INFORMATION, MATERIALS, AND PRODUCTS INCLUDED ON OR OTHERWISE MADE AVAILABLE THROUGH THE SITE,
              REGARDLESS OF THE FORM OF THE ACTION, IS LIMITED TO THE GREATER OF (I) THE AMOUNT PAID BY YOU TO US TO
              ACCESS OR USE THE SITE, OR (II) $100.
            </p>
            <p>
              CERTAIN OF THE ABOVE LIMITATIONS OR EXCLUSIONS MAY NOT APPLY TO YOU TO THE EXTENT THAT APPLICABLE LAW MAY
              NOT ALLOW A PARTICULAR LIMITATION OR EXCLUSION OF LIABILITY FOR SUCH DAMAGES.
            </p>
          </Col>
        </Row>
        <Heading as="h4" content="10. Disclaimer" className="terms-section-header" />
        <Row gutter={30} className="terms-section">
          <Col xl={12} xs={24}>
            <p>YOU ACKNOWLEDGE, AGREE AND UNDERSTAND THAT:</p>
            <p>
              WE ATTEMPT TO DISPLAY ALL HOTEL, BOOKING, AND STAY INFORMATION AND ALL OTHER CONTENT, MATERIALS, AND
              INFORMATION YOU VIEW ON THE SITE AS ACCURATELY AS POSSIBLE. HOWEVER, WE DO NOT GUARANTEE THE ACCURACY,
              COMPREHENSIVENESS, AVAILABILITY, OR TIMELINESS OF SUCH INFORMATION AND MATERIALS, AND ARE NOT RESPONSIBLE
              FOR ANY CLAIMS ARISING OR RESULTING FROM YOUR RELIANCE ON THEM.
            </p>
            <p>
              THE SITE MAY CONTAIN INFORMATION ABOUT TRAVEL ARRANGEMENTS AND ACCOMMODATIONS THAT ARE NOT AVAILABLE AT
              ALL TIMES OR IN ALL AREAS. WE MAKE NO WARRANTY THAT YOU WILL RECEIVE THE LOWEST AVAILABLE PRICE FOR A
              BOOKING, OR ANY OTHER REPSENTATION REGARDING THE AVAILABILITY OF ANY PRODUCTS OR SERVICES, OR THE QUALITY
              OF OR RESULTS OF ANY SERVICES. BY OFFERING TRAVEL TO OR WITHIN PARTICULAR DESTINATIONS, WE DO NOT WARRANT
              THAT TRAVEL TO SUCH AREAS IS ADVISABLE, AND WE ARE NOT LIABLE FOR ANY DAMAGES OR LOSSES THAT MAY RESULT
              FROM TRAVEL TO OR WITHIN SUCH DESTINATIONS.
            </p>
          </Col>
          <Col xl={12} xs={24}>
            <p>
              THE SITE AND ALL CONTENT AND OTHER INFORMATION, AND MATERIALS INCLUDED ON OR OTHERWISE MADE AVAILABLE
              THROUGH THE SITE ARE PROVIDED ON AN “AS IS” AND “WHERE AVAILABLE” BASIS AND WITHOUT WARRANTIES OF ANY
              KIND. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING
              IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT.
            </p>
            <p>
              WE DO NOT REPRESENT OR WARRANT THAT THE SITE WILL BE UNINTERRUPTED OR ERROR-FREE, THAT ANY DEFECTS WILL BE
              CORRECTED, OR THAT THE SITE AND INFORMATION, AND MATERIALS INCLUDED ON OR OTHERWISE MADE AVAILABLE THROUGH
              THE SITE, THE SERVERS THAT MAKE THE SITE AVAILABLE, OR EMAIL OR OTHER CORRESPONDENCE SENT THROUGH THE
              SITE, ARE OR WILL BE FREE OF VIRUSES OR ANYTHING ELSE HARMFUL. WE DO NOT MAKE ANY WARRANTIES OR
              REPRESENTATIONS REGARDING THE USE OF ANY INFORMATION, CONTENT, MATERIALS, PRODUCTS AND SERVICES INCLUDED
              ON OR OTHERWISE MADE AVAILABLE THROUGH THE SITE IN TERMS OF THEIR CORRECTNESS, ACCURACY, ADEQUACY,
              USEFULNESS, RELIABILITY OR OTHERWISE.
            </p>
            <p>
              CERTAIN OF THE ABOVE LIMITATIONS AND EXCLUSIONS MAY NOT APPLY TO YOU TO THE EXTENT THAT APPLICABLE LAW MAY
              NOT ALLOW A PARTICULAR LIMITATION OR EXCLUSION.
            </p>
          </Col>
        </Row>
        <Heading as="h4" content="11. Consent to Contact by Us" className="terms-section-header" />
        <Row gutter={30} className="terms-section">
          <Col xl={12} xs={24}>
            <p>
              If you have any questions regarding these terms or any other policy, or regarding the site, you can
              contact us at <strong>Booking@reservations-center.com</strong>.
            </p>
            <p>
              We use e-mail as a vital and primary communication channel with you. By using the site, if you provide us
              with an e-mail address, such as when using the “Contact Us” or any similar features of the site, creating
              an account, making a booking, or opting into our newsletter, you grant us permission to communicate with
              you by e-mail for any purposes, including for any matters relating to your booking, other disclosures,
              system messages and, subject to our obligations under applicable law, other marketing purposes.
            </p>
          </Col>
          <Col xl={12} xs={24}>
            <p>
              We will use our best efforts to honor any request to opt out of marketing messages, but you may not
              opt0out of communications that are related to any booking you have made, and under no circumstances will
              we have any liability for sending you any e-mail. You agree that any notice, agreement, disclosure or
              other communication that we send you by e-mail will satisfy any legal communication requirements,
              including that such communication be in writing.
            </p>
          </Col>
        </Row>
        <Heading as="h4" content="12. Indemnification and Release" className="terms-section-header" />
        <Row gutter={30} className="terms-section">
          <Col xl={12} xs={24}>
            <Heading as="h4" content="A. Indemnification for Use of the Site" className="terms-section-header" />
            <p>
              You will defend, indemnify, and hold harmless, Reservations Center, the service provider, our directors,
              officers, shareholders, agents, employees, contractors, volunteers, licensors, and partners from any
              claims or damages, including reasonable attorneys’ fees, arising out of (a) your access to, use of, or
              conduct in connection with our Site; (b) any user content you provide; (c) your violation of these terms,
              any other site policies, or any agreement between you and any accommodations or services booked through
              the site; (d) your violation, misappropriation, or infringement of any rights of another (including
              intellectual property rights or privacy rights); and (e) any claims made by any third parties that
              participate in any arrangements or services purchased through site.
            </p>
            <Heading
              as="h4"
              content="C. Your Liability in Regard to Your Communications"
              className="terms-section-header"
            />
            <p>
              You acknowledge that you (and not Reservations Center or the service provider) are solely liable for any
              and all electronic information and content (including user content) you upload to the site, and
              acknowledge that neither Reservations Center nor the service provider shall incur any liability in this
              respect whatsoever.
            </p>
          </Col>
          <Col xl={12} xs={24}>
            <Heading
              as="h4"
              content="B. Your Liability in Regard to Assistance/Insurance"
              className="terms-section-header"
            />
            <p>
              With respect to your intended travel, it is advisable to take out insurance including coverage for
              personal assistance services and payment of medical expenses, accident insurance, luggage insurance,
              cancellation insurance, and coverage of legal liability. It shall be your responsibility to check your
              insurance coverage and if necessary, take out insurance with your insurance broker or through an insurance
              agency that you connect with through the site.
            </p>
            <Heading
              as="h4"
              content="D. Release of Reservations Center and Service Provider"
              className="terms-section-header"
            />
            <p>
              You expressly release and forever discharge Reservations Center, the service provider, our directors,
              officers, shareholders, agents, employees, contractors, volunteers, licensors, partners, and
              representatives (collectively, “released party”) from any and all claims, demands, and damages (actual and
              consequential) of every kind and nature, known and unknown, suspected and unsuspected, disclosed and
              undisclosed, arising out of or in any way connected with any dispute with any accommodations provider or
              any other damage, harm, bodily injury, death, or economic loss you may suffer in connection with any
              disputes, dealings, or interactions between you and any persons providing accommodations or other services
              to you, any other users of the site, or other third parties. The released party shall not be liable for
              indirect, special or consequential damages. You hereby expressly release released party from any and all
              liability, controversies, claims, suits, injuries, loss, harm or damages arising from or related to.
            </p>
          </Col>
        </Row>
        <Heading as="h4" content="13. Arbitration and Dispute Resolution" className="terms-section-header" />
        <Row gutter={30} className="terms-section">
          <Col xl={12} xs={24}>
            <p>
              You on the one hand and Reservations Center and the service provider on the other hand, each agree that
              any and all disputes, controversies, or claims arising out of or relating to: (a) these terms; (b) your
              use of, or access to, the site; (c) Reservations Center and/or the service provider’s services; or (d) any
              bookings made through the site shall be resolved exclusively through final and binding arbitration in
              Chicago, Illinois, rather than in court. SPECIFICALLY, YOU HEREBY AGREE TO WAIVE ALL RIGHTS AND CLAIMS TO
              A TRIAL BY JURY. The Federal Arbitration Act governs the interpretation and enforcement of this agreement
              to arbitrate.
            </p>
            <p>
              Prior to commencing any arbitration related to these terms, you agree that if you have a dispute with
              Reservations Center or the service provider, you must first contact our Customer Service Department at{" "}
              <strong>Booking@reservations-center.com</strong> . If our Customer Service Department is unable to achieve
              a satisfactory resolution, then you must notify us in writing about your claim by sending the accompanying
              form by certified mail to:{" "}
              <strong> Reservations Center, LLC 728 West Avenue Unit#2055 Cocoa, FL 32927</strong>. It is important that
              you provide as much information as possible. If the matter is not resolved to your satisfaction, then you
              agree to begin arbitration by submitting a Demand for Arbitration to the American Arbitration Association
              ("AAA"). You further agree that exclusive jurisdiction for any such arbitration shall be Chicago,
              Illinois. The Demand for Arbitration and the AAA's rules are available at www.adr.org.
            </p>

            <p>
              The arbitrator, and not any federal, state, or local court or agency, shall have exclusive authority to
              resolve any dispute arising out of or relating to the interpretation, applicability, enforceability or
              formation of these terms, including, but not limited to, any claim that all or any part of these terms,
              including this agreement to arbitrate is void or voidable. The arbitrator will decide the substance of all
              claims in accordance with the laws of the state of Illinois. The arbitrator's award will be final and
              binding, and judgment on the award rendered by the arbitrator may be entered in a court having
              jurisdiction thereof.
            </p>
            <p>
              <strong>
                You can choose to reject this agreement to arbitrate. If you do not wish to be bound by this agreement
                to arbitrate, you must notify us in writing within thirty (30) days of the date that you first access
                this site. Your written notification must include your name and address, as well as a clear statement
                that you do not wish to resolve disputes with Reservations Center or our service provider through
                arbitration. Written notification should be mailed by certified mail to: Reservations Center, LLC 728
                West Avenue Unit#2055 Cocoa, FL 32927.
              </strong>
            </p>
          </Col>
          <Col xl={12} xs={24}>
            <p>
              <strong>
                YOU ON THE ONE HAND AND Reservations Center AND/OR THE SERVICE PROVIDER ON THE OTHER HAND AGREE THAT
                EACH MAY ONLY BRING CLAIMS AGAINST THE OTHER ON AN INDIVIDUAL BASIS AND NOT AS A PLAINTIFF OR CLASS
                MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE ACTION OR PROCEEDING UNLESS BOTH YOU AND Reservations
                Center AND/OR THE SERVICE PROVIDER (AS THE CASE MAY BE) ACKNOWLEDGE AND AGREE THAT THE WAIVER IS
                MATERIAL AND ESSENTIAL TO THE ARBITRATION OF ANY DISPUTES BETWEEN THE PARTIES AND IS NON-SEVERABLE FROM
                THE AGREEMENT TO ARBITRATE CLAIMS. IF THE WAIVER IS LIMITED, VOIDED OR FOUND UNENFORCEABLE, THEN THE
                PARTIES' AGREEMENT TO ARBITRATE SHALL BE NULL AND VOID WITH RESPECT TO SUCH PROCEEDING, SUBJECT TO THE
                RIGHT TO APPEAL THE LIMITATION OR INVALIDATION OF THE WAIVER. UNLESS YOU, Reservations Center, AND THE
                SERVICE PROVIDER COLLECTIVELY AGREE OTHERWISE, THE ARBITRATOR MAY NOT CONSOLIDATE OR JOIN MORE THAN ONE
                PERSON'S OR PARTY'S CLAIMS, AND MAY NOT OTHERWISE PRESIDE OVER ANY FORM OF A CONSOLIDATED,
                REPRESENTATIVE, OR CLASS PROCEEDING. ALSO, THE ARBITRATOR MAY AWARD RELIEF (INCLUDING MONETARY,
                INJUNCTIVE, AND DECLARATORY RELIEF) ONLY IN FAVOR OF THE INDIVIDUAL PARTY SEEKING RELIEF AND ONLY TO THE
                EXTENT NECESSARY TO PROVIDE RELIEF NECESSITATED BY THAT PARTY'S INDIVIDUAL CLAIMS. ANY RELIEF AWARDED
                CANNOT AFFECT OTHER SITE USERS.
              </strong>
            </p>

            <p>
              Payment of all filing, administration and arbitrator fees will be governed by the AAA's rules, unless
              otherwise stated in this agreement to arbitrate as set forth in these Terms. If the value of the relief
              sought is $10,000 or less, at your request, Reservations Center and/or the service provider (whichever is
              the subject of the arbitration) will pay all filing, administrative and arbitrator fees associated with
              the arbitration. Any request for payment of fees by Reservations Center and/or the service provider should
              be submitted by mail to the AAA along with the Demand for Arbitration. In the event the arbitrator
              determines the claim you asserted in the arbitration to be frivolous or brought for an improper purpose,
              you agree to Reservations Center and/or the service provider, as the case may be, for all fees associated
              with the arbitration paid by Reservations Center and/or the service provider.
            </p>
          </Col>
        </Row>
        <Heading as="h4" content="14. Injunctive Relief" className="terms-section-header" />
        <Row gutter={30} className="terms-section">
          <Col xl={24} xs={24}>
            <p>
              If you breach or threaten breach of these terms or any other site policies, you acknowledge and agree that
              we will be greatly and irreparably damaged and the damage will be difficult to quantify. Therefore, we may
              apply to any court of competent jurisdiction accepting jurisdiction under this specific provision, who,
              regardless of any other provision of these terms relating to governing law, will apply the laws of its own
              jurisdiction in determining whether we will be granted an injunctive or other equitable relief to stop
              your breach or your threat of breach, without impairing, invalidating, negating or voiding our rights to
              relief in either law or equity.
            </p>
          </Col>
        </Row>
        <Heading as="h4" content="15. General Provisions" className="terms-section-header" />
        <Row gutter={30} className="terms-section" style={{ marginBottom: "100px" }}>
          <Col xl={12} xs={24}>
            <p>
              If any provision contained in these terms is declared, in whole or in part, invalid or inapplicable under
              applicable law, (a) the invalid or inapplicable provisions in question shall be deemed replaced by valid
              and applicable provisions that are the best approximation to the intention of the original provision, and
              (b) all other terms of these terms will be unaffected and will remain in force and effect.
            </p>
          </Col>
          <Col xl={12} xs={24}>
            <p>
              We shall not be deemed in default or otherwise liable under these terms due to our inability to perform
              our obligations by reason of any act of God, fire, earthquake, substantial snowstorm, flood, epidemic,
              pandemic, disease, government-mandated shut-down, accident, explosion, casualty, strike, lockout, labor
              controversy, riot, civil disturbance, act of public enemy, embargo, war, any law ordinance or regulation,
              legal order (unless caused by our default hereunder), any failure or delay of any transportation, power,
              or communications system or any other similar cause not under our direct control.
            </p>
          </Col>
        </Row>
        <Heading as="h3" content="Charges NOT Paid at Booking" className="terms-section-header" />

        <Row gutter={30} className="terms-section" style={{ marginBottom: "100px" }}>
          <Col xl={24} xs={24}>
            <p>
              Upon check-in at a hotel, customer acknowledges that customer will be required by the hotel to provide a
              credit card to cover any incidental expenses that are incurred by the customer at any time during the
              stay. These expenses include, but are not limited to, room service, meals, valet parking, additional hotel
              taxes, internet fees, beverage fees, spa services, picture purchases, and any other fees associated or
              incidentals with staying at any particular hotel.
            </p>
          </Col>

          <Col xl={24} xs={24}>
            <ul className="terms-list">
              <li>Groups</li>
              <p>
                You may not book more than 8 rooms online for the same hotel/stay dates. If we determine that you have
                booked more than 8 services referenced above for the same dates, in total, in separate reservations
                and/or in the same reservation, we may at our sole discretion cancel your reservation(s), and charge you
                any applicable membership, service, and/or cancellation fees. If you purchased a non-refundable rate or
                rates for special events (i.e. Mardi Gras, Super Bowl, etc.,) the cost of your entire reservation may be
                subject to forfeiture. If you wish to book 9 or more hotel rooms, you must contact our group travel
                specialists by phone or by filling out the group travel form online. A travel specialist from our groups
                affiliate partner will research your request and may contact you to complete your reservation. You may
                be asked to sign a written contract and/or pay a nonrefundable deposit, depending upon the nature of
                your request.
              </p>
              <li>Fraudulent Charges</li>
              <p>
                If your booking or account shows signs of fraud, abuse or suspicious activity, we may cancel any
                bookings associated with your name, email address or account, and close any associated accounts. If you
                have conducted any fraudulent activity, we reserve the right to take any necessary legal action and you
                may be liable for monetary losses, including litigation costs and damages.
              </p>
              <li>Minors</li>
              <p>
                Persons under the age of 18 may not purchase, cancel or modify any services available through our
                website
              </p>
              <li>Limitation of Liability</li>
              <p>
                Travel Agent and its suppliers make no representations about the suitability of the information,
                software, membership, and services contained on the Travel Agent Site for any purpose, and the inclusion
                or offering of membership services on the Travel Agent Site does not constitute any endorsement or
                recommendation of such products or services by Travel Agent. All such information, software, membership
                fee, and services are provided "as is" without warranty of any kind. Travel Agent and any providers of
                travel services included in Travel Agent's Site disclaim all warranties and conditions that Travel Agent
                Site, its servers or any email sent from Travel Agent and/or the providers of travel services are free
                of viruses or other harmful components. Travel Agent and any suppliers used by customers of Travel Agent
                hereby disclaim all warranties and conditions with regard to this information, software, membership fees
                and services, including all implied warranties and conditions of merchantability, fitness for a
                particular response, title and non-infringement. The carriers, hotels and other suppliers providing
                travel or other services on the Travel Agent Site are independent contractors and not agents or
                employees or representatives of Travel Agent. Travel Agent is not liable for the acts, errors,
                omissions, representations, warranties, breaches or negligence of any such suppliers or for any personal
                injuries, death, property damage, or other damages or expenses resulting there from. Travel Agent is the
                agent or representative of its customer, and as such, has no liability and will make no refund in the
                event of any delay, cancellation, overbooking, strike, force majeure or other causes beyond its direct
                control. Travel Agent has no responsibility for any additional expenses, omissions, delays, re-routing
                or acts of any government or authority, any acts of terrorism, an/or natural disasters. In no event
                shall Travel Agent or any suppliers of travel services booked through Travel Agent be liable for any
                direct, indirect, punitive, incidental, special or consequential damages arising out of, or in any way
                connected with, your access to, display of or use of Travel Agent Site, or with the delay or inability
                to access, display or use the Site (including, but not limited to, your reliance upon opinions appearing
                on the Site; any computer viruses, information, software, linked sites, memberships and services
                obtained). Travel Agent will not be liable for damages of any kind, whether based on a theory of
                negligence, contract, tort, strict liability, consumer protection statutes, or otherwise. This
                limitation of liability applies even if Travel Agent or anyone with whom Travel Agent contracts, has
                been advised of the possibility of such damages. This limitation of liability reflects the allocation of
                risk between the parties. The limitations specified in this section will survive and apply even if any
                limited remedy specified in this Travel Agency Agreement is found to have failed of its essential
                purpose. The limitations of liability provided in this Travel Agency Agreement will inure to the benefit
                of Travel Agent and any of its agents, representatives, partners and/or entities with whom Travel Agent
                has contracted.
              </p>
              <Heading as="h4" content="Bank and Credit or Debit Card Fees" className="terms-section-header" />
              <p>
                Some banks and credit or debit card companies impose fees for international transactions. If you are
                making a booking from outside of the United States on a U.S. credit or debit card, your bank may convert
                the payment amount, to your local currency and charge you a conversion fee. This means that the amount
                listed on your credit or bank card statement may be in your local currency and therefore may be a
                different figure than the figure shown on the billing summary page for the reservation booked through
                the website. In addition, a foreign transaction fee may be assessed if the bank that issued your credit
                or debit card is located outside of the United States. Booking international travel may be considered to
                be an international transaction by the bank or card company, since we may pass on your payment to an
                international travel supplier. The currency exchange rate and foreign transaction fee is determined
                solely by your bank on the day that they process the transaction. If you have any questions about these
                fees or the exchange rate applied to your booking, please contact your bank.
              </p>
            </ul>
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  );
}
