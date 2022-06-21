import React from 'react';
import { FaqbodyWrapper } from './faq.style';
import { Collapse } from 'antd';

const { Panel } = Collapse;

export default function FaqBody() {
  return (
    <FaqbodyWrapper>
      <h1 className="faq-title">Reservation Process</h1>
      <Collapse defaultActiveKey={['1']} className="faq-collapse">
        <Panel
          header="How do I reserve my room?"
          style={{ fontSize: '20px', fontWeight: '700', color: '#2D2D2D', lineHeight: '25px' }}
          key="1"
        >
          <p>
            Our reservation process is very simple. Select or enter the desired city, enter the
            dates of arrival and departure, and enter the number of guests. Click the Search
            Available Hotels (for only hotels which have vacancies), Search for Vacation Rentals or
            the Browse All Hotels (all hotels in a city regardless of vacancy) button. You could
            also search by a specific hotel name within a city. A list of hotels or vacation rentals
            will appear on the screen. For more information, click the name of the property or the
            Info link.
          </p>
          <ul className="faq-list">
            <li>Managing and personalizing your experience on the site;</li>
            <li> Evaluating and improving our site and our product and service quality;</li>
            <li> Complying with legal requirements; and</li>
            <li>
              Preventing and addressing fraud and breaches of our site requirements and policies.
            </li>
          </ul>
        </Panel>
        <Panel
          header="Can I specify where I would like my room located (preferred floor, next to pool, etc.)?"
          style={{ fontSize: '20px', fontWeight: '700', color: '#2D2D2D', lineHeight: '25px' }}
          key="2"
        >
          <p>
            Our reservation process is very simple. Select or enter the desired city, enter the
            dates of arrival and departure, and enter the number of guests. Click the Search
            Available Hotels (for only hotels which have vacancies), Search for Vacation Rentals or
            the Browse All Hotels (all hotels in a city regardless of vacancy) button. You could
            also search by a specific hotel name within a city. A list of hotels or vacation rentals
            will appear on the screen. For more information, click the name of the property or the
            Info link.
          </p>
          <ul className="faq-list">
            <li>Managing and personalizing your experience on the site;</li>
            <li> Evaluating and improving our site and our product and service quality;</li>
            <li> Complying with legal requirements; and</li>
            <li>
              Preventing and addressing fraud and breaches of our site requirements and policies.
            </li>
          </ul>
        </Panel>
        <Panel
          header="Is the room rate per person or per night?"
          style={{ fontSize: '20px', fontWeight: '700', color: '#2D2D2D', lineHeight: '25px' }}
          key="3"
        >
          <p>
            Our reservation process is very simple. Select or enter the desired city, enter the
            dates of arrival and departure, and enter the number of guests. Click the Search
            Available Hotels (for only hotels which have vacancies), Search for Vacation Rentals or
            the Browse All Hotels (all hotels in a city regardless of vacancy) button. You could
            also search by a specific hotel name within a city. A list of hotels or vacation rentals
            will appear on the screen. For more information, click the name of the property or the
            Info link.
          </p>
          <ul className="faq-list">
            <li>Managing and personalizing your experience on the site;</li>
            <li> Evaluating and improving our site and our product and service quality;</li>
            <li> Complying with legal requirements; and</li>
            <li>
              Preventing and addressing fraud and breaches of our site requirements and policies.
            </li>
          </ul>
        </Panel>
      </Collapse>
      <h1 className="faq-title">Credit Cards and Payments</h1>
      <Collapse className="faq-collapse">
        <Panel
          header="Is it safe to use my credit card?"
          style={{ fontSize: '20px', fontWeight: '700', color: '#2D2D2D', lineHeight: '25px' }}
          key="1"
        >
          <p>
            Our reservation process is very simple. Select or enter the desired city, enter the
            dates of arrival and departure, and enter the number of guests. Click the Search
            Available Hotels (for only hotels which have vacancies), Search for Vacation Rentals or
            the Browse All Hotels (all hotels in a city regardless of vacancy) button. You could
            also search by a specific hotel name within a city. A list of hotels or vacation rentals
            will appear on the screen. For more information, click the name of the property or the
            Info link.
          </p>
          <ul className="faq-list">
            <li>Managing and personalizing your experience on the site;</li>
            <li> Evaluating and improving our site and our product and service quality;</li>
            <li> Complying with legal requirements; and</li>
            <li>
              Preventing and addressing fraud and breaches of our site requirements and policies.
            </li>
          </ul>
        </Panel>
        <Panel
          header="What credit card types are accepted for guarantee/deposit?"
          style={{ fontSize: '20px', fontWeight: '700', color: '#2D2D2D', lineHeight: '25px' }}
          key="2"
        >
          <p>
            Our reservation process is very simple. Select or enter the desired city, enter the
            dates of arrival and departure, and enter the number of guests. Click the Search
            Available Hotels (for only hotels which have vacancies), Search for Vacation Rentals or
            the Browse All Hotels (all hotels in a city regardless of vacancy) button. You could
            also search by a specific hotel name within a city. A list of hotels or vacation rentals
            will appear on the screen. For more information, click the name of the property or the
            Info link.
          </p>
          <ul className="faq-list">
            <li>Managing and personalizing your experience on the site;</li>
            <li> Evaluating and improving our site and our product and service quality;</li>
            <li> Complying with legal requirements; and</li>
            <li>
              Preventing and addressing fraud and breaches of our site requirements and policies.
            </li>
          </ul>
        </Panel>
        <Panel
          header="My credit card number is correct, but the hotel is not accepting it. Why?"
          style={{ fontSize: '20px', fontWeight: '700', color: '#2D2D2D', lineHeight: '25px' }}
          key="3"
        >
          <p>
            Our reservation process is very simple. Select or enter the desired city, enter the
            dates of arrival and departure, and enter the number of guests. Click the Search
            Available Hotels (for only hotels which have vacancies), Search for Vacation Rentals or
            the Browse All Hotels (all hotels in a city regardless of vacancy) button. You could
            also search by a specific hotel name within a city. A list of hotels or vacation rentals
            will appear on the screen. For more information, click the name of the property or the
            Info link.
          </p>
          <ul className="faq-list">
            <li>Managing and personalizing your experience on the site;</li>
            <li> Evaluating and improving our site and our product and service quality;</li>
            <li> Complying with legal requirements; and</li>
            <li>
              Preventing and addressing fraud and breaches of our site requirements and policies.
            </li>
          </ul>
        </Panel>
      </Collapse>
      <h1 className="faq-title">Confirming a Reservation</h1>
      <Collapse className="faq-collapse">
        <Panel
          header="What happens when I make a reservation?"
          style={{ fontSize: '20px', fontWeight: '700', color: '#2D2D2D', lineHeight: '25px' }}
          key="1"
        >
          <p>
            Our reservation process is very simple. Select or enter the desired city, enter the
            dates of arrival and departure, and enter the number of guests. Click the Search
            Available Hotels (for only hotels which have vacancies), Search for Vacation Rentals or
            the Browse All Hotels (all hotels in a city regardless of vacancy) button. You could
            also search by a specific hotel name within a city. A list of hotels or vacation rentals
            will appear on the screen. For more information, click the name of the property or the
            Info link.
          </p>
          <ul className="faq-list">
            <li>Managing and personalizing your experience on the site;</li>
            <li> Evaluating and improving our site and our product and service quality;</li>
            <li> Complying with legal requirements; and</li>
            <li>
              Preventing and addressing fraud and breaches of our site requirements and policies.
            </li>
          </ul>
        </Panel>
        <Panel
          header="How long will it take HotelsOne.com to respond to my reservation request?"
          style={{ fontSize: '20px', fontWeight: '700', color: '#2D2D2D', lineHeight: '25px' }}
          key="2"
        >
          <p>
            Our reservation process is very simple. Select or enter the desired city, enter the
            dates of arrival and departure, and enter the number of guests. Click the Search
            Available Hotels (for only hotels which have vacancies), Search for Vacation Rentals or
            the Browse All Hotels (all hotels in a city regardless of vacancy) button. You could
            also search by a specific hotel name within a city. A list of hotels or vacation rentals
            will appear on the screen. For more information, click the name of the property or the
            Info link.
          </p>
          <ul className="faq-list">
            <li>Managing and personalizing your experience on the site;</li>
            <li> Evaluating and improving our site and our product and service quality;</li>
            <li> Complying with legal requirements; and</li>
            <li>
              Preventing and addressing fraud and breaches of our site requirements and policies.
            </li>
          </ul>
        </Panel>
        <Panel
          header="Once I have made my reservation, will I receive any written confirmation from the hotel?"
          style={{ fontSize: '20px', fontWeight: '700', color: '#2D2D2D', lineHeight: '25px' }}
          key="3"
        >
          <p>
            Our reservation process is very simple. Select or enter the desired city, enter the
            dates of arrival and departure, and enter the number of guests. Click the Search
            Available Hotels (for only hotels which have vacancies), Search for Vacation Rentals or
            the Browse All Hotels (all hotels in a city regardless of vacancy) button. You could
            also search by a specific hotel name within a city. A list of hotels or vacation rentals
            will appear on the screen. For more information, click the name of the property or the
            Info link.
          </p>
          <ul className="faq-list">
            <li>Managing and personalizing your experience on the site;</li>
            <li> Evaluating and improving our site and our product and service quality;</li>
            <li> Complying with legal requirements; and</li>
            <li>
              Preventing and addressing fraud and breaches of our site requirements and policies.
            </li>
          </ul>
        </Panel>
      </Collapse>
    </FaqbodyWrapper>
  );
}
