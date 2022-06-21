namespace GetARoomClient {
  /**
   * @see https://getaroomaffiliate.docs.apiary.io/
   */
  export interface Configuration {
    /**
     * A map of urls which represent the base urls for each separate service offered by GetARoom's API
     */
    baseUrl: {
      /**
       * @example "https://availability.getaroom.com"
       */
      availability: string;
      /**
       * @example "https://book.getaroom.com"
       */
      book: string;
      /**
       * @example "https://supply.getaroom.com"
       */
      supply: string;
    };

    authorization: {
      /**
       * @example "f49b7845-2fbb-5558-8939-43101379c881"
       */
      apiKey: string;
      /**
       * @example "6b907ee9-a19c-5c92-9904-fac3f2f5af13"
       */
      token: string;
    };

    /**
     * This method gets invoked every time the client fires off a request.
     */
    onRequest?: (url: string, options: RequestInit, response: Response) => void;
  }

  export interface AvailabilityParameters {
    /**
     * @default "1.1"
     */
    version?: string;

    /**
     * An array of arrays with the ages of the occupants for each room
     *
     * @example [[18]]
     */
    rInfo?: string;

    /**
     * Check in date in MM/DD/YYYY format
     *
     * @example "2022-01-30"
     */
    checkInDate?: string;

    /**
     * Check out date in MM/DD/YYYY format
     *
     * @example "2022-01-30"
     */
    checkOutDate?: string;
  }

  export interface SearchAvailabilityParameters extends AvailabilityParameters {
    /**
     * When true, the response will only return the cheapest room per hotel
     *
     * @default false
     */
    lowestByType?: boolean;
  }

  export interface PrebookParameters {
    /**
     * @default "1.1"
     */
    version?: string;

    /**
     * An array of arrays with the ages of the occupants for each room
     *
     * @example [[18]]
     */
    rInfo: string;

    /**
     * Check in date in MM/DD/YYYY format
     *
     * @example "2022-01-30"
     */
    checkInDate: string;

    /**
     * Check out date in MM/DD/YYYY format
     *
     * @example "2022-01-30"
     */
    checkOutDate: string;

    roomId: string;

    ratePlanCode: string;
  }

  export interface SearchBookingsParameters {
    /**
     * Check in date in MM/DD/YYYY format
     *
     * @example "2022-01-30"
     */
    booked_at_start?: string;

    /**
     * Check out date in MM/DD/YYYY format
     *
     * @example "2022-01-30"
     */
    booked_at_end?: string;

    /**
     * The code provided on the prebook stage in "custom_fields.confirmation".
     * @see GetARoomAPI.ItineraryRequestBody.itinerary.custom_fields.configuration
     *
     *
     * @example "bro-7130-304598-0911"
     */
    booking_request_code: string;
  }
}

namespace GetARoomAPI {
  export interface Image {
    /**
     * @example 800
     */
    width: number;
    /**
     * @example 533
     */
    height: number;

    /**
     * @example 1543476804
     */
    version: number;

    /**
     * @example "4ebbc5ec93149c79d04907b297fc00e02e8489e7"
     */
    id: string;

    urls: {
      /**
       * @example "http://res.cloudinary.com/docquu1ru/image/upload/s--pnQHaSTj--/c_limit,e_improve,fl_lossy.immutable_cache,h_940,q_auto:good,w_940/v1543476804/4ebbc5ec93149c79d04907b297fc00e02e8489e7?atc=10900a27"
       */
      large: string;

      /**
       * @example "http://res.cloudinary.com/docquu1ru/image/upload/s--1ydtOK1k--/c_limit,e_improve,fl_lossy.immutable_cache,h_460,q_auto:good,w_460/v1543476804/4ebbc5ec93149c79d04907b297fc00e02e8489e7?atc=10900a27"
       */
      default: string;

      /**
       * @example "http://res.cloudinary.com/docquu1ru/image/upload/s--LF141but--/c_thumb,e_improve,fl_lossy.immutable_cache,g_custom,h_64,q_auto:good,w_64/v1543476804/4ebbc5ec93149c79d04907b297fc00e02e8489e7?atc=10900a27"
       */
      thumb: string;
    };
  }

  export interface Amenity {
    /**
     * @example "0178b1e9-4478-40f5-92f3-82dafa958c12"
     */
    id: string;

    name: Translations;
  }

  /**
   * @todo Check if there are more languages. Most likely there are.
   */
  export type TranslationLocale = "fr" | "de" | "it" | "es" | "zh" | "x-default" | "x-piglatin" | "zh-Hant";

  interface Translations extends Partial<Record<TranslationLocale, string>> {
    en: string;
  }

  export interface Property {
    /**
     * @example "504ff0e1-8e4f-5c87-8d95-c04d862ad950"
     */
    id: string;

    /**
     * @example "USD"
     */
    currency_code: string;

    /**
     * @example "America/New_York"
     */
    time_zone: string;

    /**
     * @example 3
     */
    star_rating: number;

    /**
     * @example "1-407-2391222"
     */
    phone_number: string;

    /**
     * @example "2019-01-21T18:47:33.045Z"
     */
    content_updated_at: string;

    /**
     * @example
     * {
     *   "x-default": "Monumental Hotel Orlando",
     *   "en": "Monumental Hotel Orlando"
     * }
     */
    name: Translations;

    /**
     * @example
     * {
     *   "x-default": "International Drive Area",
     *   "en": "International Drive Area"
     * }
     */
    location_description: Translations;

    /**
     * @example
     * {
     *   "x-default": "Situated at the south end of International Drive, this hotel is in a prime location, with Sea World, Walt Disney World, and Universal Studios, as well as the Premium Outlet Mall, as well as a wide range of shops, restaurants, and shows, only a few minutes' drive away. The hotel welcomes its guests into an inviting lobby, with a restaurant and 24-hour check-in. Facilities include a hotel safe and parking.",
     *   "en": "Situated at the south end of International Drive, this hotel is in a prime location, with Sea World, Walt Disney World, and Universal Studios, as well as the Premium Outlet Mall, as well as a wide range of shops, restaurants, and shows, only a few minutes' drive away. The hotel welcomes its guests into an inviting lobby, with a restaurant and 24-hour check-in. Facilities include a hotel safe and parking."
     * }
     */
    description: Translations;

    /**
     * @example
     * {
     *   "x-default": "Parking $20/night",
     *   "en": "Parking $20/night"
     * }
     */
    policy_description: Translations;

    /**
     * @example "09:00"
     */
    check_in_start_time: string;

    /**
     * @example "10:00"
     */
    check_out_end_time: string;

    property_type: {
      /**
       * @example "HOTEL"
       */
      id: string;

      /**
       * @example
       * {
       *   "x-default": "Hotel",
       *   "en": "Hotel"
       * }
       */
      name: Translations;
    };

    address: {
      /**
       * @example
       * {
       *   "x-default": "12120 International Drive, 12120",
       *   "en": "12120 International Drive, 12120"
       * }
       */
      street_address: Translations;

      /**
       * @example
       * {
       *   "x-default": "Orlando",
       *   "en": "Orlando"
       * }
       */
      locality: Translations;

      /**
       * @example
       * {
       *   "x-default": "FL",
       *   "en": "FL"
       * }
       */
      region: Translations;

      /**
       * @example "32821"
       */
      postal_code: string;

      /**
       * @example "US";
       */
      country_code: string;

      /**
       * @example 28.390142
       */
      latitude: number;

      /**
       * @example -81.472769
       */
      longitude: number;
    };

    amenities: Amenity[];

    images: Image[];

    room_types: {
      /**
       * @example "2DB"
       */
      id: string;

      /**
       * @example 555
       */
      square_footage: number;

      /**
       * @example 2;
       */
      max_occupancy: number;

      /**
       * @example 1;
       */
      max_adults: number;

      /**
       * @example 1;
       */
      max_children: number;

      /**
       * @example
       * {
       *   en: "2 Double Bed Suite";
       *   "x-piglatin": "2 oubleDay edBay uiteSay";
       *   zh: "2张双人床套房";
       *   "zh-Hant": "2張雙人床套房";
       *   fr: "2 Lit Double Suite (FR)";
       *   de: "2 Zweibettsuite (DE)";
       *   it: "2 Letto matrimoniale Suite (IT)";
       *   es: "2 cama doble suite (ES)";
       *   "x-default": "2 Double Bed Suite";
       * }
       */
      name: Translations;

      /**
       * @example
       * {
       *   en: "Awesome parking lot view in a corner room.";
       *   "x-piglatin": "Awesomeyay arkingpay otlay iewvay inyay ayay ornercay oomray.";
       *   zh: "在一個角落裡的房間真棒停車場視圖。";
       *   "zh-Hant": "Zài yīgè jiǎoluò lǐ de fángjiān zhēn bàng tíngchēchǎng shìtú.";
       *   fr: "Impressionnant parking vue dans une chambre d'angle.";
       *   de: "Fantastische Aussicht auf den Parkplatz in einem Eckzimmer.";
       *   it: "Splendida vista parcheggio in una camera d'angolo.";
       *   es: "Impresionante vista al aparcamiento en una habitación de la esquina .";
       *   "x-default": "Awesome parking lot view in a corner room.";
       * }
       */
      description: Translations;

      amenities: Amenity[];

      images: Image[];
    }[];
  }

  export interface NightlyRate {
    /**
     * @example "05/16/2022"
     */
    date: string;

    originalRate: string | null;
    /**
     * @example 41.18
     */
    rate: number;
  }

  export interface Fee {
    amount: number;
    currency: string;
    description: string;
    name: string;
    total: number;
  }

  export interface LineItem {
    /**
     * @example 41.18
     */
    amount: number;
    /**
     * @example "subtotal"
     */
    code: string;
    /**
     * @example "Subtotal"
     */
    name: string;
  }

  export interface CancellationPolicy {
    /**
     * @example 46.12
     */
    amount: number;
    basis: {
      /**
       * @example 100
       */
      percent: number;
    };
    /**
     * @example "USD"
     */
    currency: string;
    /**
     * @example "1970-01-01T00:00:00Z"
     */
    deadline: string;
  }

  export interface RoomStay {
    amenities: any;
    bookingPricing: {
      currency: string;
      fees: number;
      lineItems: {
        lineItem: LineItem | LineItem[];
      } | null;
      lowestAverage: number;
      nightlyRates: {
        nightlyRate: NightlyRate | NightlyRate[];
      } | null;
      originalAverage: string | null;
      subtotal: number;
      taxes: number;
      total: number;
    };
    /**
     * @example "2022-05-16T17:00:00Z"
     */
    cancellationDeadline: string | null;
    cancellationPenalties: {
      cancellationPenalty: CancellationPolicy | CancellationPolicy[];
    } | null;
    /**
     * @example `Each room in this reservation is subject to the hotel's cancellation policy which is:
     * This reservation is non-refundable. There is no refund for no-shows or early checkouts.`
     */
    cancellationPolicy: string | null;
    /**
     * @example 3
     */
    commissionTier: number;
    customerPaymentDisclosure: {
      /**
       * @example "cci*getaroom.com"
       */
      billingDescriptor: string;
      /**
       * @example `This payment will be processed in the United States and will appear on your statement
       * as "cci*getaroom.com".`
       */
      bookingMessage: string;
      /**
       * @example "800-468-3578"
       */
      phoneNumber: string;
      /**
       * @example "US"
       */
      processedInCountry: string;
      /**
       * @example "http://news.getaroom.com/terms-of-use"
       */
      termsAndConditionsUrl: string;
    };
    displayPricing: {
      currency: string;
      fees: number;
      lineItems: {
        lineItem: LineItem | LineItem[];
      } | null;
      lowestAverage: number;
      nightlyRates: {
        nightlyRate: NightlyRateXML | NightlyRateXML[];
      } | null;
      originalAverage: string | null;
      subtotal: number;
      taxes: number;
      total: number;
    };
    expiresAt: string | null;
    feesCollectedAtProperty: {
      fee: Fee | Fee[];
    } | null;
    geoRestrictions: string | null;
    landingUrl: string | null;
    lowestAverage: number;
    perkDescriptions: string | null;
    policyDescriptions: string | null;
    promotionDetails: string | null;
    promotionalText: string | null;
    /**
     * @example "3,4cff7cd8eb6cf6799d0020a3,ac61253a34bf8d851a1e251d0fa4856527feaa88"
     */
    ratePlanCode: string;
    /**
     * @example "public"
     */
    ratePlanType: string;
    rateToken: string;
    refundable: boolean;
    restrictions: string;
    room: {
      hotelId: string;
      roomId: string;
      title: string;
      description: string;
    };
    roomsLeft: number | null;
    sale: boolean;
    valueAdds: {
      ["value-add"]: { code: string; name: string };
    } | null;
    timedPressureSell: string | null;
  }

  export interface Availability {
    roomStays: {
      request: {
        checkIn: string;
        checkOut: string;
        rooms: number;
        adults: number;
        children: number;
      };
      roomStay: RoomStay | RoomStay[] | null;
      status: {
        success?: null;
        cacheHints?: null;
      };
    };
  }

  export interface ItineraryRequestBody {
    /**
     * @example "1.1"
     */
    version: string;

    itinerary: {
      /**
       * A string representing the unique identifier for user session across all booking attempts. If the same client/session makes multiple booking attempts then this field would be the same for each attempt. For partners with an affiliate platform, this should represent the unique session identifier of the secondary affiliate.
       *
       * @example "bookroomonline"
       */
      affiliate_session_code: string;

      /**
       * A string of eight hexadecimal characters identifying the affiliate booking this reservation, so that the sale can be properly credited to the right account. You must supply this token to be credited with a sale.
       *
       * @example "cbd58c48"
       */
      affiliate_token: string;

      /**
       * A unique identifier for the customer in the affiliate system. This should not be the email address or other personally identifiable information but rather an internal database identifier or md5/sha1 hash of the email address. If an agent is involved in the transaction, this represents the external customer and not the agent performing the booking.
       *
       * @example "bookroomonline"
       */
      affiliate_customer_code?: string;

      /**
       * indicates what the end customer interacted with to make the booking. This is used segment how certain consents were gathered and to control screening by IP address to prevent a call center (or agent with a high volume of bookings) from being blacklisted. Below are the possible values, if you have a point of sale that does not fit these listed values, please reach out to your technical contact.
       *
       * @example "call_center"
       */
      point_of_sale: "call_center" | "web" | "mobile_web" | "mobile_app" | "app";

      /**
       * A unique identifier of the agent, if point_of_sale is "call_center". This should not be the actual agent email but an internal database identifier or md5/sha1 hash of something unique to the agent. This is used in conjunction with point_of_sale with a value of "call_center" to control screening of relationship between IP, Customer Code, Name and Credit Card usage.
       *
       * @example "bookroomonline"
       */
      affiliate_agent_code?: string;

      /**
       * if your affiliate agreement requires you to collect consent for email marketing, and the customer provided consent which was freely given, specific, informed, and unambiguous consent, then "true", and if consent was requested but not given, "false". If consent was not requested, omit.
       *
       * @example false
       */
      email_marketing_consent_given?: boolean;

      /**
       * IP address of the originating client. This should be the actual IPv4 or IPv6 IP address received from the client and not an internal IP or that of the load balancer/proxy.
       *
       * @example "127.0.0.1"
       */
      customer_ip_address: string;

      /**
       * Web browser User Agent, as received, from the HTTP header User-Agent.
       *
       * @example "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36"
       */
      customer_user_agent: string;

      /**
       * Timezone offset, in seconds, of the client. This is determined using javascript.
       */
      customer_timezone_offset?: string;

      /**
       * Web browser accepted languages, as received, from the HTTP header Accept-Language
       */
      customer_accept_language: string;

      /**
       *  If device fingerprinting is used, the fingerprint provider and the calculated fingerprint. Use of this needs to be coordinated with Getaroom.com before being implemented.
       */
      customer_device_fingerprint: string;

      reservations: {
        rooms: {
          /**
           * [min 2, max 30] - The given name of the person to whom this room is assigned
           *
           * @example "John"
           */
          given_name: string;

          /**
           * [min 2, max 30] - The family name of the person to whom this room is assigned.
           *
           * @example "Depp"
           */
          family_name: string;

          /**
           * An array containing the ages of the guests in the rooms or -1 as a placeholder for adults. Each room must contain at least one adult.
           *
           * @example [16]
           */
          guest_ages: number[];
        }[];

        /**
         * A decimal value representing the tax to be charged for this reservation.
         *
         * @example 24.57
         */
        tax: number;

        /**
         * A decimal value representing any additional non-tax surcharges for this reservation.
         *
         * @example 12.90
         */
        fees: number;

        /**
         * A decimal value representing the cost of this reservation exclusive of any tax and fees.
         *
         * @example 65.06
         */
        subtotal: number;

        /**
         * A decimal value representing the total amount to be charged for this reservation.
         *
         * @example 89.63
         */
        total: number;

        /**
         * A string representing the rate plan code for this particular reservation.
         *
         * @example "30,5a8f14823ed97773affc95e1,f16e9d0"
         */
        rate_plan_code: string;

        /**
         * A string from the availability response, providing extra information about the rate.
         */
        rate_token?: string;

        /**
         * An ISO 8601 date format string representing the check-in date.
         *
         * @example "2019-09-26T07:58:30.996+0200"
         */
        check_in: string;

        /**
         * An ISO 8601 date format string representing the check-out date.
         */
        check_out: string;

        /**
         * Property UUID from the availability response.
         *
         * @example "19743064-f8dd-5f31-81d1-9e20b6d16621"
         */
        property_uuid: string;

        /**
         * Returned UUID from availability response
         *
         * @example "58ae5995-4680-55d1-be3f-3f9e5cda5fd3"
         */
        room_type_uuid: string;

        /**
         * [max 50] - A string representing the e-mail to make this reservation under.
         *
         * @example "hey@gmail.com"
         */
        email: string;

        /**
         * Required for Non-USD booking. Supported currencies EUR, AUD GBP.
         */
        currency?: string;
      }[];

      /**
       * An object containing up to 10 key value pairs.
       */
      custom_fields: {
        /**
         * The code to be associated with a booking. This what we can use later
         * to fetch/cancel a booking
         *
         * @example "bro-7130-304598-0911"
         */
        confirmation: string;
        [key: string]: any;
      };

      payment: {
        /**
         * Guarantee type
         */
        guarantee_code?: string;

        credit_card: {
          /**
           * One of american_express, discover, master, or visa.
           */
          brand: "american_express" | "discover" | "master" | "visa";

          /**
           * phone number of billing contact without punctuation or spaces
           *
           * @example 12312941
           */
          billing_phone: string;

          /**
           * CVV/CV2/CID number associated with card
           *
           * @example "123"
           */
          credit_card_verification_number: string;

          expiration: {
            /**
             * [length 2] - expiration month, zero padded
             *
             * @example "04"
             */
            month: string;

            /**
             * [length 4] - expiration year
             *
             * @example "2023"
             */
            year: string;
          };

          /**
           * A valid 15 or 16-digit credit card number.
           *
           * @example "4263982640269299"
           */
          credit_card_account_number: string;

          billing_address: {
            /**
             * [min 2, max 10] - For US, CA and AU state codes are required. e.g., Ontario - ON Texas - TX New South Wales - NSW
             *
             * @example "ON"
             */
            region: string;

            /**
             * [length 2] - The 2 character ISO country code.
             *
             * @example "US"
             */
            country_name: string;

            /**
             * [min 3, max 10]
             *
             * @example "12313"
             */
            postal_code: string;

            /**
             * [min 1, max 28]
             *
             * @example "Over there, 1.22"
             */
            street_address: string;

            /**
             * [min 3, max 20] - The town or city name for this address. No abbreviations.
             *
             * @example "New York"
             */
            locality: string;
          };

          cardholder_name: {
            /**
             * [min 2, max 30]
             *
             * @example "John"
             */
            given_name: string;

            /**
             * [min 2, max 30]
             *
             * @example "Depp"
             */
            family_name: string;
          };
        };
      };
    };
  }

  export interface ItinerarySuccess {
    email: string;
    locale: string;
    reservations: {
      property_uuid: string;
      merged_uuids: any[];
      property_name: string;
      property_address: {
        street_address: string;
        locality: string;
        region: string;
        postal_code: string;
        country_code: string;
      };
      rate_plan_code: string;
      perk_descriptions: string[];
      fees: string;
      tax: string;
      total: string;
      currency: string;
      state: string;
      rooms: {
        first_name: string;
        last_name: string;
        beds_preference: string;
        smoking_preference: string;
        adults: number;
        children: number;
        ages: string;
      }[];
      cancellation_deadline: string;
      confirmations: any[];
      getaroom_confirmation_code: string;
      check_in: string;
      check_out: string;
      room_type_title: string;
      room_type_uuid: string;
      rate_disclosure_code: null;
      line_items: {
        code: string;
        name: string;
        name_lang: string;
        amount: string;
      }[];
      getaroom_reservation_token: string;
      cancellation_policy: string;
      cancellation_fee: number;
      check_in_instructions: string;
    }[];
    travelers: {
      name: {
        given_name: string;
        family_name: string;
      };
      email: string;
    }[];
    updated_at: string;
    created_at: string;
    /**
     * An object containing up to 10 key value pairs.
     */
    custom_fields: {
      /**
       * The code to be associated with a booking. This what we can use later
       * to fetch/cancel a booking
       *
       * @example "bro-7130-304598-0911"
       */
      confirmation?: string;
      [key: string]: any;
    };
    affiliate_commission_tier: number;
    itinerary_audit_log_id: string;
  }

  export interface ItineraryError {
    /**
     * @example
     * [{
     *   "attribute_key": "credit_card",
     *   "type": "declined",
     *   "model_key": "itinerary.payment",
     *   "message": "is declined",
     *   "full_message": "Credit card is declined"
     * }}
     */
    errors: {
      attribute_key: string;
      type: string;
      model_key: string;
      message: string;
      full_message: string;
    }[];

    /**
     * @example '62796fb3e49ecc14350a87b2'
     */
    itinerary_audit_log_id: string;
  }

  export interface Booking {
    /**
     * @example "ITN10839764"
     */
    itinerary_number: string;

    /**
     * @example "85608e89-ec23-4230-b03f-2794fe4a5528"
     */
    token: string;

    /**
     * @example "Flamingo Las Vegas"
     */
    property_name: string;

    /**
     * @example "f884ece3-642e-4534-9978-7fa85aeac2b8"
     */
    property_uuid: string;

    /**
     * @example "2022-10-01"
     */
    check_in: string;

    /**
     * @example "2022-10-09"
     */
    check_out: string;

    /**
     * @example 5
     */
    room_count: number;

    /**
     * @example "John"
     */
    guest_first_name: string;

    /**
     * @example "Doe"
     */
    guest_last_name: string;

    /**
     * @example "R121940237"
     */
    reservation_number: string;

    /**
     * @example "confirmed"
     */
    reservation_state: string;

    /**
     * @example "USD"
     */
    sell_rate_currency: string;

    /**
     * @example "2022-05-13T11:00:43.768Z"
     */
    booked_at: string;

    /**
     * @example "bro-7130-692160-9709"
     */
    booking_request_code: string;

    hotel_confirmation_number: null;

    /**
     * @example "Newly Remodeled FAB Room"
     */
    room_name: string;

    /**
     * @example "481.92"
     */
    sell_rate_subtotal: string;

    /**
     * @example "529.92"
     */
    sell_rate_total: string;

    /**
     * @example 8
     */
    nights: number;

    refundable: boolean;

    agent: boolean;

    /**
     * @example "af2702f7-6abc-4b57-a2f8-5894e6e66a32"
     */
    room_code: string;

    /**
     * @example 3
     */
    affiliate_commission_tier: number;
  }

  export interface NightlyRateXML {
    /**
     * @example "05/16/2022"
     */
    date: string;
    ["original-rate"]: string;
    /**
     * @example 41.18
     */
    rate: number;
  }

  export interface RoomStayXML {
    amenities: any;
    ["booking-pricing"]: {
      currency: string;
      fees: number;
      ["line-items"]:
        | ""
        | {
            ["line-item"]: LineItem | LineItem[];
          };
      ["lowest-average"]: number;
      ["nightly-rates"]:
        | ""
        | {
            ["nightly-rate"]: NightlyRateXML | NightlyRateXML[];
          };
      ["original-average"]: string;
      subtotal: number;
      taxes: number;
      total: number;
    };
    /**
     * @example "2022-05-16T17:00:00Z"
     */
    ["cancellation-deadline"]: string;
    ["cancellation-penalties"]:
      | ""
      | {
          ["cancellation-penalty"]: CancellationPolicy | CancellationPolicy[];
        };
    /**
     * @example `Each room in this reservation is subject to the hotel's cancellation policy which is:
     * This reservation is non-refundable. There is no refund for no-shows or early checkouts.`
     */
    ["cancellation-policy"]: string;
    /**
     * @example 3
     */
    ["commission-tier"]: number;
    ["customer-payment-disclosure"]: {
      /**
       * @example "cci*getaroom.com"
       */
      ["billing-descriptor"]: string;
      /**
       * @example `This payment will be processed in the United States and will appear on your statement
       * as "cci*getaroom.com".`
       */
      ["booking-message"]: string;
      /**
       * @example "800-468-3578"
       */
      ["phone-number"]: string;
      /**
       * @example "US"
       */
      ["processed-in-country"]: string;
      /**
       * @example "http://news.getaroom.com/terms-of-use"
       */
      ["terms-and-conditions-url"]: string;
    };
    ["display-pricing"]: {
      currency: string;
      fees: number;
      ["line-items"]:
        | ""
        | {
            ["line-item"]: LineItem | LineItem[];
          };
      ["lowest-average"]: number;
      ["nightly-rates"]:
        | ""
        | {
            ["nightly-rate"]: NightlyRateXML | NightlyRateXML[];
          };
      ["original-average"]: string;
      subtotal: number;
      taxes: number;
      total: number;
    };
    ["expires-at"]: string;
    ["fees-collected-at-property"]:
      | ""
      | {
          fee: Fee | Fee[];
        };
    ["geo-restrictions"]: string;
    ["landing-url"]: string;
    ["lowest-average"]: number;
    ["perk-descriptions"]: string;
    ["policy-descriptions"]: string;
    ["promotion-details"]: string;
    ["promotional-text"]: string;
    /**
     * @example "3,4cff7cd8eb6cf6799d0020a3,ac61253a34bf8d851a1e251d0fa4856527feaa88"
     */
    ["rate-plan-code"]: string;
    /**
     * @example "public"
     */
    ["rate-plan-type"]: string;
    ["rate-token"]: string;
    refundable: boolean;
    restrictions: strings;
    room: {
      ["hotel-id"]: string;
      ["room-id"]: string;
      title: string;
      description: string;
    };
    ["rooms-left"]: number;
    sale: boolean;
    ["value-adds"]:
      | ""
      | {
          ["value-add"]: { code: string; name: string };
        }[];
    ["timed-pressure-sell"]: string;
  }

  export interface AvailabilityXML {
    ["room-stays"]: {
      request: {
        adults: number;
        ["check-in"]: string;
        ["check-out"]: string;
        children: number;
        currency: string;
        rooms: number;
      };
      ["room-stay"]: RoomStayXML | RoomStayXML[];
      status: {
        success?: string;
        ["cache-hints"]?: string;
      };
    };
  }
}
