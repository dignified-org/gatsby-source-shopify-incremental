/* AUTO GENERATED FILE. DO NOT MODIFY */
/* eslint-disable */
export type Maybe<T> = T | null;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * An RFC 3986 and RFC 3987 compliant URI string.
   *
   * Example value: `"https://johns-apparel.myshopify.com"`.
   */
  URL: any;
  /**
   * An unsigned 64-bit integer. Represents whole numeric values between 0 and 2^64 - 1 encoded as a string of base-10 digits.
   *
   * Example value: `"50"`.
   */
  UnsignedInt64: any;
  /** An ISO-8601 encoded UTC date time string. Example value: `"2019-07-03T20:47:55Z"`. */
  DateTime: any;
  /** A signed decimal number, which supports arbitrary precision and is serialized as a string. Example value: `"29.99"`. */
  Decimal: any;
  /** A string containing HTML code. Example value: `"<p>Grey cotton knit sweater.</p>"`. */
  HTML: any;
  /**
   * Represents a unique identifier in the Storefront API. A `StorefrontID` value can
   * be used wherever an ID is expected in the Storefront API.
   *
   * Example value: `"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzEwMDc5Nzg1MTAw"`.
   */
  StorefrontID: any;
  /** A monetary value string. Example value: `"100.57"`. */
  Money: any;
  /**
   * A string containing a strict subset of HTML code. Non-allowed tags will be stripped out.
   * Allowed tags:
   * * `a` (allowed attributes: `href`)
   * * `b`
   * * `br`
   * * `em`
   * * `i`
   * * `strong`
   * * `u`
   *
   * Example value: `"Your current domain is <strong>johns-apparel.myshopify.com</strong>."`
   */
  FormattedString: any;
  /** A JSON Object. Example value: `{ "key1": "Value 1", "key2": "Value 2", "key3": 3 }` */
  JSON: any;
  /** An [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) encoded UTC date string. Example value: `"2019-07-16"`. */
  Date: any;
  /**
   * Time between UTC time and a location's observed time, in the format `"+HH:MM"` or `"-HH:MM"`.
   *
   * Example value: `"-07:00"`.
   */
  UtcOffset: any;
};

/** Represents the access scope permission that is applicable to a merchant's shop, such as `read_orders`. */
export type AccessScope = {
  /** Description of the access scopes enabled on an api permission. */
  description: Scalars['String'];
  /** A human-friendly string for an access scope. */
  handle: Scalars['String'];
};

/** Whether all items in the cart are entitled to the discount. */
export type AllDiscountItems = {
  /** Whether all items are selected. The value is hardcoded to `true`. */
  allItems: Scalars['Boolean'];
};

/** A version of the API. */
export type ApiVersion = {
  /** The human-readable name of the version. */
  displayName: Scalars['String'];
  /** The unique identifier of an ApiVersion. All supported API versions have a date-based (YYYY-MM) or `unstable` handle. */
  handle: Scalars['String'];
  /** Whether the version is supported by Shopify. */
  supported: Scalars['Boolean'];
};

/** A Shopify application. */
export type App = Node & {
  /** A unique application API identifier. */
  apiKey: Scalars['String'];
  /** App store page URL of the app. */
  appStoreAppUrl?: Maybe<Scalars['URL']>;
  /** App store page URL of the developer who created the app. */
  appStoreDeveloperUrl?: Maybe<Scalars['URL']>;
  /** Banner image for the app. */
  banner: Image;
  /** Description of the app. */
  description?: Maybe<Scalars['String']>;
  /** App's developer name. */
  developerName?: Maybe<Scalars['String']>;
  /**
   * Website of the developer who created the app.
   * @deprecated Use `appStoreDeveloperUrl` instead
   */
  developerUrl: Scalars['URL'];
  /** Whether the app uses the Embedded App SDK. */
  embedded: Scalars['Boolean'];
  /** Requirements that must be met before the app can be installed. */
  failedRequirements: Array<FailedRequirement>;
  /** List of app features. */
  features: Array<Scalars['String']>;
  /** Feedback from this app about the store. */
  feedback?: Maybe<AppFeedback>;
  /** Handle of the app. */
  handle?: Maybe<Scalars['String']>;
  /** Icon that represents the app. */
  icon: Image;
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** Webpage where you can install the app. */
  installUrl?: Maybe<Scalars['URL']>;
  /**
   * Corresponding AppInstallation for this shop and App.
   * Returns null if the App is not installed.
   */
  installation?: Maybe<AppInstallation>;
  /**
   * Webpage that the app starts in.
   * @deprecated Use AppInstallation.launchUrl instead
   */
  launchUrl: Scalars['URL'];
  /**
   * Menu items for the app, which also appear as submenu items in left navigation sidebar in the Shopify admin.
   * @deprecated Use AppInstallation.navigationItems instead
   */
  navigationItems: Array<NavigationItem>;
  /** Detailed information about the app pricing. */
  pricingDetails?: Maybe<Scalars['String']>;
  /** Summary of the app pricing details. */
  pricingDetailsSummary: Scalars['String'];
  /** Link to app privacy policy. */
  privacyPolicyUrl?: Maybe<Scalars['URL']>;
  /** Whether the app is published. */
  published: Scalars['Boolean'];
  /** Screenshots of the app. */
  screenshots: Array<Image>;
  /** Whether the app was developed by Shopify. */
  shopifyDeveloped: Scalars['Boolean'];
  /** Name of the app. */
  title: Scalars['String'];
  /**
   * Message that appears when the app is uninstalled. For example:
   * By removing this app, you will no longer be able to publish products to
   * MySocialSite or view this app in your Shopify admin. You can re-enable this
   * channel at any time.
   */
  uninstallMessage: Scalars['String'];
  /**
   * Webpage where you can uninstall the app.
   * @deprecated Use AppInstallation.uninstallUrl instead
   */
  uninstallUrl?: Maybe<Scalars['URL']>;
};

export type AppConnection = {
  /** A list of edges. */
  edges: Array<AppEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** App credits can be applied by the merchant towards future app purchases, subscriptions, or usage records in Shopify. */
export type AppCredit = Node & {
  /** The amount that can be used towards future app purchases in Shopify. */
  amount: MoneyV2;
  /** The date and time when the app credit was created. */
  createdAt: Scalars['DateTime'];
  /** The description of the app credit. */
  description: Scalars['String'];
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** Whether the app credit is a test transaction. */
  test: Scalars['Boolean'];
};

export type AppCreditConnection = {
  /** A list of edges. */
  edges: Array<AppCreditEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Return type for `appCreditCreate` mutation. */
export type AppCreditCreatePayload = {
  /** The newly created app credit. */
  appCredit?: Maybe<AppCredit>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

export type AppCreditEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of AppCreditEdge. */
  node: AppCredit;
};

export type AppEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of AppEdge. */
  node: App;
};

/**
 * Reports the status of shops and their resources and displays this information
 * within Shopify admin. AppFeedback is used to notify merchants about steps they need to take
 * to set up an app on their store.
 */
export type AppFeedback = {
  /** The application associated to the feedback. */
  app: App;
  /** A link to where merchants can resolve errors. */
  link?: Maybe<Link>;
  /** The feedback message presented to the merchant. */
  messages: Array<UserError>;
};

/** Represents an installed application on a shop. */
export type AppInstallation = Node & {
  /** Access scopes granted to an app by a merchant during installation. */
  accessScopes: Array<AccessScope>;
  /** Active subscriptions charged to a shop on a recurring basis. */
  activeSubscriptions: Array<AppSubscription>;
  /** All subscriptions created for a shop. */
  allSubscriptions: AppSubscriptionConnection;
  /** Application which is installed. */
  app: App;
  /**
   * Channel associated with the installed application.
   * @deprecated Use `publication` instead
   */
  channel?: Maybe<Channel>;
  /** Credits that can be used towards future app purchases. */
  credits: AppCreditConnection;
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** Url used to launch the app. */
  launchUrl: Scalars['URL'];
  /** One-time purchases to a shop. */
  oneTimePurchases: AppPurchaseOneTimeConnection;
  /** Publication associated with the installed application. */
  publication?: Maybe<Publication>;
  /**
   * Subscriptions charge to a shop on a recurring basis.
   * @deprecated Use `activeSubscriptions` instead
   */
  subscriptions: Array<AppSubscription>;
  /** Webpage where you can uninstall the app. */
  uninstallUrl?: Maybe<Scalars['URL']>;
};

/** Represents an installed application on a shop. */
export type AppInstallationAllSubscriptionsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<AppSubscriptionSortKeys>;
};

/** Represents an installed application on a shop. */
export type AppInstallationCreditsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<AppTransactionSortKeys>;
};

/** Represents an installed application on a shop. */
export type AppInstallationOneTimePurchasesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<AppTransactionSortKeys>;
};

/** Possible categories of an app installation. */
export enum AppInstallationCategory {
  /** Sales channel apps. */
  Channel = 'CHANNEL',
  /** Apps that can be used in the POS mobile client. */
  PosEmbedded = 'POS_EMBEDDED',
}

export type AppInstallationConnection = {
  /** A list of edges. */
  edges: Array<AppInstallationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AppInstallationEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of AppInstallationEdge. */
  node: AppInstallation;
};

/** Possible privacy types of an app installation. */
export enum AppInstallationPrivacy {
  Public = 'PUBLIC',
  Private = 'PRIVATE',
}

/** The set of valid sort keys for the AppInstallation query. */
export enum AppInstallationSortKeys {
  /** Sort by the `installed_at` value. */
  InstalledAt = 'INSTALLED_AT',
  /** Sort by the `app_title` value. */
  AppTitle = 'APP_TITLE',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
}

/** Defines the pricing model for the app subscription. */
export type AppPlanInput = {
  /** Usage based billing pricing details. */
  appUsagePricingDetails?: Maybe<AppUsagePricingInput>;
  /** Recurring based billing pricing details. */
  appRecurringPricingDetails?: Maybe<AppRecurringPricingInput>;
};

/** Defines the app plan the merchant is subscribed to. */
export type AppPlanV2 = {
  /** Defines the pricing model for the app subscription. */
  pricingDetails: AppPricingDetails;
};

/** Information about the price charged to a shop every plan period. */
export type AppPricingDetails = AppUsagePricing | AppRecurringPricing;

/** Interval for which pricing details are applied. */
export enum AppPricingInterval {
  /** App plan pricing details are applied every 30 days. */
  Every_30Days = 'EVERY_30_DAYS',
}

/** Services and features purchased once by the store. */
export type AppPurchase = {
  /** The date and time when the app purchase was created. */
  createdAt: Scalars['DateTime'];
  /** The name of the app purchase. */
  name: Scalars['String'];
  /** The amount to be charged to the store for the app purchase. */
  price: MoneyV2;
  /** The status of the app purchase. Possible values include pending, active, declined and cancelled. */
  status: AppPurchaseStatus;
  /** Whether the app purchase is a test transaction. */
  test: Scalars['Boolean'];
};

/** Services and features purchased once by a store. */
export type AppPurchaseOneTime = AppPurchase &
  Node & {
    /** The date and time when the app purchase was created. */
    createdAt: Scalars['DateTime'];
    /** Globally unique identifier. */
    id: Scalars['ID'];
    /** The name of the app purchase. */
    name: Scalars['String'];
    /** The amount to be charged to the store for the app purchase. */
    price: MoneyV2;
    /** The status of the app purchase. Possible values include pending, active, declined and cancelled. */
    status: AppPurchaseStatus;
    /** Whether the app purchase is a test transaction. */
    test: Scalars['Boolean'];
  };

export type AppPurchaseOneTimeConnection = {
  /** A list of edges. */
  edges: Array<AppPurchaseOneTimeEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Return type for `appPurchaseOneTimeCreate` mutation. */
export type AppPurchaseOneTimeCreatePayload = {
  /** The newly created app one-time purchase. */
  appPurchaseOneTime?: Maybe<AppPurchaseOneTime>;
  /** The URL where the merchant can approve or decline the app one-time purchase. */
  confirmationUrl?: Maybe<Scalars['URL']>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

export type AppPurchaseOneTimeEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of AppPurchaseOneTimeEdge. */
  node: AppPurchaseOneTime;
};

/** The status of the purchase. */
export enum AppPurchaseStatus {
  /**
   * The app purchase has been approved by the merchant and is ready to be
   * activated by the app. App purchases created through the GraphQL Admin API are
   * activated upon approval.
   */
  Accepted = 'ACCEPTED',
  /**
   * The app purchase has been activated by the app. Active app purchases are
   * charged to the store and partners receive payouts for active app purchase.
   */
  Active = 'ACTIVE',
  /** The app purchase was declined by the merchant. */
  Declined = 'DECLINED',
  /** The app purchase was not accepted within 2 days of being created. */
  Expired = 'EXPIRED',
  /** The app purchase is pending approval by the merchant. */
  Pending = 'PENDING',
}

/** Price charged every interval. */
export type AppRecurringPricing = {
  /** Specifies the number of days in a billing cycle of the app subscription. */
  interval: AppPricingInterval;
  /** The amount to be charged to the store every billing interval. */
  price: MoneyV2;
};

/** Allows an app to charge per billing interval. */
export type AppRecurringPricingInput = {
  /** The amount to be charged to the store every billing interval. The only permitted currency code is USD. */
  price: MoneyInput;
};

/** The set of valid sort keys for the Apps query. */
export enum AppsSortKeys {
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
}

/** Provides users access to services and/or features for a duration of time. */
export type AppSubscription = Node & {
  /** The date and time when the app subscription was created. */
  createdAt: Scalars['DateTime'];
  /** The date and time when the current app subscription period ends. */
  currentPeriodEnd?: Maybe<Scalars['DateTime']>;
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** Attaches a plan to an app subscription. */
  lineItems: Array<AppSubscriptionLineItem>;
  /** The name of the app subscription. */
  name: Scalars['String'];
  /** The URL where the merchant is redirected after approving the app subscription. */
  returnUrl: Scalars['URL'];
  /**
   * The status of the app subscription. Possible values include pending, active, declined,
   *          expired, frozen, and cancelled.
   */
  status: AppSubscriptionStatus;
  /** Specifies whether the app subscription is a test transaction. */
  test: Scalars['Boolean'];
  /** The number of days of the free trial. */
  trialDays: Scalars['Int'];
};

/** Return type for `appSubscriptionCancel` mutation. */
export type AppSubscriptionCancelPayload = {
  /** The cancelled app subscription. */
  appSubscription?: Maybe<AppSubscription>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

export type AppSubscriptionConnection = {
  /** A list of edges. */
  edges: Array<AppSubscriptionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Return type for `appSubscriptionCreate` mutation. */
export type AppSubscriptionCreatePayload = {
  /** The newly created app subscription. */
  appSubscription?: Maybe<AppSubscription>;
  /** The URL where the merchant approves or declines an app subscription. */
  confirmationUrl?: Maybe<Scalars['URL']>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

export type AppSubscriptionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of AppSubscriptionEdge. */
  node: AppSubscription;
};

/** Attaches a plan to an app subscription. */
export type AppSubscriptionLineItem = {
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** Defines the pricing model for the app subscription. */
  plan: AppPlanV2;
  /** Lists the store's usage for a usage pricing plan. */
  usageRecords: AppUsageRecordConnection;
};

/** Attaches a plan to an app subscription. */
export type AppSubscriptionLineItemUsageRecordsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<AppUsageRecordSortKeys>;
};

/** Allows an app to add more than one plan to an app subscription. */
export type AppSubscriptionLineItemInput = {
  /** Defines the pricing model for the app subscription. */
  plan: AppPlanInput;
};

/** Return type for `appSubscriptionLineItemUpdate` mutation. */
export type AppSubscriptionLineItemUpdatePayload = {
  /** The updated app subscription. */
  appSubscription?: Maybe<AppSubscription>;
  /** The URL where the merchant approves or declines the updated app subscription line item. */
  confirmationUrl?: Maybe<Scalars['URL']>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** The set of valid sort keys for the AppSubscription query. */
export enum AppSubscriptionSortKeys {
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
}

/** The status of the app subscription. */
export enum AppSubscriptionStatus {
  /** The app subscription is pending approval by the merchant. */
  Pending = 'PENDING',
  /**
   * The app subscription has been approved by the merchant and is ready to be
   * activated by the app. App subscriptions created through the GraphQL Admin API
   * are activated upon approval.
   */
  Accepted = 'ACCEPTED',
  /**
   * The app subscription has been activated by the app. Active app subscriptions
   * are charged to the store and partners recieve payouts for active app subscriptions.
   */
  Active = 'ACTIVE',
  /** The app subscription was declined by the merchant. */
  Declined = 'DECLINED',
  /** The app subscription was not accepted within 2 days of being created. */
  Expired = 'EXPIRED',
  /**
   * The app subscription is on hold due to a store subscription non-payment. The
   * charge will re-activate once subscription payments resume.
   */
  Frozen = 'FROZEN',
  /** The app subscription was cancelled by the app. */
  Cancelled = 'CANCELLED',
}

/** The set of valid sort keys for the AppTransaction query. */
export enum AppTransactionSortKeys {
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
}

/** Defines the usage pricing model for the app subscription. */
export type AppUsagePricing = {
  /** The total usage records for interval. */
  balanceUsed: MoneyV2;
  /** The limit a store can be charged for usage based pricing. */
  cappedAmount: MoneyV2;
  /** Specifies the interval which usage records are applied. */
  interval: AppPricingInterval;
  /** The terms and conditions for app usage pricing. */
  terms: Scalars['String'];
};

/** Allows an app to charge a store for usage. */
export type AppUsagePricingInput = {
  /** The limit a customer can be charged for usage based pricing. */
  cappedAmount: MoneyInput;
  /** The terms and conditions for app usage. */
  terms: Scalars['String'];
};

/** Store usage for app subscriptions with usage pricing. */
export type AppUsageRecord = Node & {
  /** The date and time when the usage record was created. */
  createdAt: Scalars['DateTime'];
  /** The description of the app usage record. */
  description: Scalars['String'];
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** The price of the usage record. The only permitted currency code is USD. */
  price: MoneyV2;
  /** Defines the usage pricing plan the merchant is subscribed to. */
  subscriptionLineItem: AppSubscriptionLineItem;
};

export type AppUsageRecordConnection = {
  /** A list of edges. */
  edges: Array<AppUsageRecordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Return type for `appUsageRecordCreate` mutation. */
export type AppUsageRecordCreatePayload = {
  /** The newly created app usage record. */
  appUsageRecord?: Maybe<AppUsageRecord>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

export type AppUsageRecordEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of AppUsageRecordEdge. */
  node: AppUsageRecord;
};

/** The set of valid sort keys for the AppUsageRecord query. */
export enum AppUsageRecordSortKeys {
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
}

/** Represents a generic custom attribute. */
export type Attribute = {
  /** Key or name of the attribute. */
  key: Scalars['String'];
  /** Value of the attribute. */
  value?: Maybe<Scalars['String']>;
};

/** Specifies the input fields required for an attribute. */
export type AttributeInput = {
  /** Key or name of the attribute. */
  key: Scalars['String'];
  /** Value of the attribute. */
  value: Scalars['String'];
};

/** Automatic discount applications capture the intentions of a discount that was automatically applied. */
export type AutomaticDiscountApplication = DiscountApplication & {
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethod;
  /**
   * An ordered index that can be used to identify the discount application and indicate the precedence
   * of the discount application for calculations.
   */
  index: Scalars['Int'];
  /** How the discount amount is distributed on the discounted lines. */
  targetSelection: DiscountApplicationTargetSelection;
  /** Whether the discount is applied on line items or shipping lines. */
  targetType: DiscountApplicationTargetType;
  /** The title of the discount application. */
  title: Scalars['String'];
  /** The value of the discount application. */
  value: PricingValue;
};

/** The set of valid sort keys for the AutomaticDiscount query. */
export enum AutomaticDiscountSortKeys {
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
}

/**
 * Basic events chronicle resource activities such as the creation of an article, the fulfillment of an order, or
 * the addition of a product.
 */
export type BasicEvent = Node &
  Event & {
    /** The name of the app that created the event. Returns null when the event originates from the Shopify admin. */
    appTitle?: Maybe<Scalars['String']>;
    /** Whether the event was created by an app. */
    attributeToApp: Scalars['Boolean'];
    /** Whether the event was caused by an admin user. */
    attributeToUser: Scalars['Boolean'];
    /** The date and time when the event was created. */
    createdAt: Scalars['DateTime'];
    /** Whether the event is critical. */
    criticalAlert: Scalars['Boolean'];
    /** Globally unique identifier. */
    id: Scalars['ID'];
    /** Human readable text that describes the event. */
    message: Scalars['FormattedString'];
  };

/**
 * An asynchronous long-running operation to fetch data in bulk.
 *
 * Bulk operations are created using the `bulkOperationRunQuery` mutation. After they are created,
 * clients should poll the `status` field for updates. When `COMPLETED`, the `url` field contains
 * a link to the data in [JSONL](http://jsonlines.org/) format.
 *
 * See the [bulk operations guide](https://help.shopify.com/api/guides/bulk-operations) for more details.
 */
export type BulkOperation = Node & {
  /** When the bulk operation was successfully completed. */
  completedAt?: Maybe<Scalars['DateTime']>;
  /** When the bulk operation was created. */
  createdAt: Scalars['DateTime'];
  /** Error code for failed operations. */
  errorCode?: Maybe<BulkOperationErrorCode>;
  /** File size in bytes of the file in the `url` field. */
  fileSize?: Maybe<Scalars['UnsignedInt64']>;
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /**
   * The running count of all objects processed.
   * For example, when fetching all products and their variants, this field counts both products and variants.
   * This field can be used to track operation progress.
   */
  objectCount: Scalars['UnsignedInt64'];
  /**
   * URL to partial/incomplete response data (in [JSONL](http://jsonlines.org/) format) returned by a failed operation.
   * Expires **one week** after the operation fails. Returns `null` when there's no data available.
   */
  partialDataUrl?: Maybe<Scalars['URL']>;
  /** GraphQL query document specified in `bulkOperationRunQuery`. */
  query: Scalars['String'];
  /** Status of the bulk operation. */
  status: BulkOperationStatus;
  /**
   * URL to the response data in [JSONL](http://jsonlines.org/) format.
   * Expires **one week** after the operation completes.
   */
  url?: Maybe<Scalars['URL']>;
};

/** Return type for `bulkOperationCancel` mutation. */
export type BulkOperationCancelPayload = {
  /** The bulk operation to be canceled. */
  bulkOperation?: Maybe<BulkOperation>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Error codes for failed bulk operations. */
export enum BulkOperationErrorCode {
  /**
   * The provided operation `query` returned access denied due to missing
   * [access scopes](https://help.shopify.com/api/getting-started/authentication/oauth/scopes).
   * Review the requested object permissions and execute the query as a normal non-bulk GraphQL request to see more details.
   */
  AccessDenied = 'ACCESS_DENIED',
  /** Operation resulted in partial or incomplete data due to internal server errors during execution. */
  InternalServerError = 'INTERNAL_SERVER_ERROR',
  /**
   * Operation resulted in partial or incomplete data due to query timeouts during execution.
   * In some cases, timeouts can be avoided by modifying your `query` to select fewer fields.
   */
  Timeout = 'TIMEOUT',
}

/** Return type for `bulkOperationRunQuery` mutation. */
export type BulkOperationRunQueryPayload = {
  /** The newly created bulk operation. */
  bulkOperation?: Maybe<BulkOperation>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Statuses of a bulk operation. */
export enum BulkOperationStatus {
  /** Operation created. */
  Created = 'CREATED',
  /** Operation running. */
  Running = 'RUNNING',
  /** Operation completed. */
  Completed = 'COMPLETED',
  /** Operation canceling. */
  Canceling = 'CANCELING',
  /** Operation canceled. */
  Canceled = 'CANCELED',
  /** Operation failed. */
  Failed = 'FAILED',
  /** Operation URL has expired. */
  Expired = 'EXPIRED',
}

/** The computed properties for a draft order. */
export type CalculatedDraftOrder = {
  /** Order-level discount applied to the draft order. */
  appliedDiscount?: Maybe<DraftOrderAppliedDiscount>;
  /**
   * The available shipping rates for the draft order. Requires a customer with a
   * valid shipping address and at least one line item.
   */
  availableShippingRates: Array<ShippingRate>;
  /** Customer who will be sent an invoice for the draft order, if there is one. */
  customer?: Maybe<Customer>;
  /** Line items in the draft order with their computed properties. */
  lineItems: Array<CalculatedDraftOrderLineItem>;
  /** Line item that contains the shipping costs. */
  shippingLine?: Maybe<ShippingLine>;
  /** Subtotal of the line items and their discounts (does not contain shipping charges or shipping discounts, or taxes). */
  subtotalPrice: Scalars['Money'];
  /** Total amount of taxes charged for each line item and shipping line. */
  taxLines: Array<TaxLine>;
  /** Total amount of the draft order (includes taxes, shipping charges, and discounts). */
  totalPrice: Scalars['Money'];
  /** Total shipping charge for the draft order. */
  totalShippingPrice: Scalars['Money'];
  /** Total amount of taxes for the draft order. */
  totalTax: Scalars['Money'];
};

/** The computed line items for a draft order. */
export type CalculatedDraftOrderLineItem = {
  /** Discount applied to the line item. */
  appliedDiscount?: Maybe<DraftOrderAppliedDiscount>;
  /** Indicates if this is a product variant line item, or a custom line item. */
  custom: Scalars['Boolean'];
  /** List of additional information (metafields) about the line item. */
  customAttributes: Array<Attribute>;
  /** Total price with discounts applied. */
  discountedTotal: MoneyV2;
  /** Unit price with discounts applied. */
  discountedUnitPrice: MoneyV2;
  /**
   * Name of the service provider who fulfilled the order.
   *
   * Valid values are either **manual** or the name of the provider.
   * For example, **amazon**, **shipwire**.
   */
  fulfillmentService: FulfillmentService;
  /** Image associated with the draft order line item. */
  image?: Maybe<Image>;
  /** Indicates whether the line item represents the puchase of a gift card. */
  isGiftCard: Scalars['Boolean'];
  /** Name of the product. */
  name: Scalars['String'];
  /** Total price (without discounts) of the line item, based on the original unit price of the variant x quantity. */
  originalTotal: MoneyV2;
  /** Variant price without any discounts applied. */
  originalUnitPrice: MoneyV2;
  /** Product associated with the draft order line item. */
  product?: Maybe<Product>;
  /** Number of variant items requested in the draft order. */
  quantity: Scalars['Int'];
  /** Whether physical shipping is required for the variant. */
  requiresShipping: Scalars['Boolean'];
  /** Variant SKU number. */
  sku?: Maybe<Scalars['String']>;
  /** Whether the variant is taxable. */
  taxable: Scalars['Boolean'];
  /** Title of the product or variant (this field only applies to custom line items). */
  title: Scalars['String'];
  /** Total value of the discount. */
  totalDiscount: MoneyV2;
  /** Variant associated with the draft order line item. */
  variant?: Maybe<ProductVariant>;
  /** Name of the variant. */
  variantTitle?: Maybe<Scalars['String']>;
  /** Name of the vendor who made the variant. */
  vendor?: Maybe<Scalars['String']>;
  /** Weight unit and value for a draft order line item. */
  weight?: Maybe<Weight>;
};

/** A line item involved in order editing that may be newly added or have new changes applied. */
export type CalculatedLineItem = {
  /** List of additional information (metafields) about the line item. */
  customAttributes: Array<Attribute>;
  /** The discounts that have been allocated onto the line item by discount applications. */
  discountAllocations: Array<DiscountAllocation>;
  /** The total line price after discounts are applied in shop and presentment currencies. */
  discountedUnitPriceSet: MoneyBag;
  /** The total number of items that can be edited. */
  editableQuantity: Scalars['Int'];
  /** The editable quantity prior to any changes made in the current edit. */
  editableQuantityBeforeChanges: Scalars['Int'];
  /** The total price of editable lines in shop and presentment currencies. */
  editableSubtotalSet: MoneyBag;
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** The Image object associated to the line item's variant. */
  image?: Maybe<Image>;
  /** Variant price without any discounts applied in shop and presentment currencies. */
  originalUnitPriceSet: MoneyBag;
  /** The total number of items. */
  quantity: Scalars['Int'];
  /** Whether the line item can be restocked or not. */
  restockable: Scalars['Boolean'];
  /** Whether the changes on the line item will result in a restock. */
  restocking: Scalars['Boolean'];
  /** Variant SKU number. */
  sku?: Maybe<Scalars['String']>;
  /** A list of changes that affect this line item. */
  stagedChanges: Array<OrderStagedChange>;
  /** Title of the product or variant. */
  title: Scalars['String'];
  /** The total price of uneditable lines in shop and presentment currencies. */
  uneditableSubtotalSet: MoneyBag;
  /**
   * The product variant associated with this line item. Will be null for custom line items and items whose
   * variant has been deleted.
   */
  variant?: Maybe<ProductVariant>;
  /** Name of the variant. */
  variantTitle?: Maybe<Scalars['String']>;
};

export type CalculatedLineItemConnection = {
  /** A list of edges. */
  edges: Array<CalculatedLineItemEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CalculatedLineItemEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of CalculatedLineItemEdge. */
  node: CalculatedLineItem;
};

/** An order with edits applied but not saved. */
export type CalculatedOrder = Node & {
  /** Returns only the new line items being added to the order. */
  addedLineItems: CalculatedLineItemConnection;
  /** Amount of the order-level discount (does not contain any line item discounts) in shop and presentment currencies. */
  cartDiscountAmountSet?: Maybe<MoneyBag>;
  /** Will be true when the changes have been applied to the order. */
  committed: Scalars['Boolean'];
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /**
   * Returns all items on the order that existed before starting the edit.
   * will include any changes that have been made.
   */
  lineItems: CalculatedLineItemConnection;
  /** The HTML of the customer notification for the order edit. */
  notificationPreviewHtml?: Maybe<Scalars['HTML']>;
  /** The customer notification title. */
  notificationPreviewTitle: Scalars['String'];
  /**
   * The order with changes applied.
   * @deprecated Use `originalOrder` instead
   */
  order: Order;
  /** The order without any changes applied. */
  originalOrder: Order;
  /** List of changes made on the order. */
  stagedChanges: OrderStagedChangeConnection;
  /** The sum of the quantities for the line items that contribute to the order's subtotal. */
  subtotalLineItemsQuantity: Scalars['Int'];
  /**
   * Subtotal of the line items and their discounts (does not contain shipping
   * costs, shipping discounts) in shop and presentment currencies.
   */
  subtotalPriceSet?: Maybe<MoneyBag>;
  /** Taxes charged for the line item. */
  taxLines: Array<TaxLine>;
  /** Total price of the order less the total amount received from the customer in shop and presentment currencies. */
  totalOutstandingSet: MoneyBag;
  /** Total amount of the order (includes taxes and discounts) in shop and presentment currencies. */
  totalPriceSet: MoneyBag;
};

/** An order with edits applied but not saved. */
export type CalculatedOrderAddedLineItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** An order with edits applied but not saved. */
export type CalculatedOrderLineItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  query?: Maybe<Scalars['String']>;
};

/** An order with edits applied but not saved. */
export type CalculatedOrderStagedChangesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/**
 * A channel is a group of products and collections that is published to an app. A
 * channel can be a platform or marketplace such
 * as Facebook or Pinterest, an online store, or POS.
 */
export type Channel = Node & {
  /** Underlying app used by the channel. */
  app: App;
  /** The collection publications for the list of collections published to the channel. */
  collectionPublicationsV3: ResourcePublicationConnection;
  /** The list of collections published to the channel. */
  collections: CollectionConnection;
  /**
   * Unique identifier for the channel.
   * @deprecated Use `id` instead
   */
  handle: Scalars['String'];
  /** Whether the collection is available to the channel. */
  hasCollection: Scalars['Boolean'];
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** Name of the channel. */
  name: Scalars['String'];
  /**
   * Menu items for the channel, which also appear as submenu items in left navigation sidebar in the Shopify admin.
   * @deprecated Use App.navigationItems instead
   */
  navigationItems: Array<NavigationItem>;
  /**
   * Home page for the channel.
   * @deprecated Use App.launchUrl instead
   */
  overviewPath?: Maybe<Scalars['URL']>;
  /**
   * The product publications for the products published to the channel.
   * @deprecated Use `productPublicationsV3` instead
   */
  productPublications: ProductPublicationConnection;
  /** The product publications for the list of products published to the channel. */
  productPublicationsV3: ResourcePublicationConnection;
  /** The list of products published to the channel. */
  products: ProductConnection;
  /** Whether or not this channel supports future publishing. */
  supportsFuturePublishing: Scalars['Boolean'];
};

/**
 * A channel is a group of products and collections that is published to an app. A
 * channel can be a platform or marketplace such
 * as Facebook or Pinterest, an online store, or POS.
 */
export type ChannelCollectionPublicationsV3Args = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/**
 * A channel is a group of products and collections that is published to an app. A
 * channel can be a platform or marketplace such
 * as Facebook or Pinterest, an online store, or POS.
 */
export type ChannelCollectionsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/**
 * A channel is a group of products and collections that is published to an app. A
 * channel can be a platform or marketplace such
 * as Facebook or Pinterest, an online store, or POS.
 */
export type ChannelHasCollectionArgs = {
  id: Scalars['ID'];
};

/**
 * A channel is a group of products and collections that is published to an app. A
 * channel can be a platform or marketplace such
 * as Facebook or Pinterest, an online store, or POS.
 */
export type ChannelProductPublicationsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/**
 * A channel is a group of products and collections that is published to an app. A
 * channel can be a platform or marketplace such
 * as Facebook or Pinterest, an online store, or POS.
 */
export type ChannelProductPublicationsV3Args = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/**
 * A channel is a group of products and collections that is published to an app. A
 * channel can be a platform or marketplace such
 * as Facebook or Pinterest, an online store, or POS.
 */
export type ChannelProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

export type ChannelConnection = {
  /** A list of edges. */
  edges: Array<ChannelEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ChannelEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of ChannelEdge. */
  node: Channel;
};

/** The set of valid sort keys for the CodeDiscount query. */
export enum CodeDiscountSortKeys {
  /** Sort by the `starts_at` value. */
  StartsAt = 'STARTS_AT',
  /** Sort by the `ends_at` value. */
  EndsAt = 'ENDS_AT',
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
}

/** Represents a collection of products. */
export type Collection = HasMetafields &
  Node &
  Publishable &
  HasPublishedTranslations & {
    /** The number of publications a resource is published to without feedback errors. */
    availablePublicationCount: Scalars['Int'];
    /** The stripped description of the collection, in a single line with HTML tags removed. */
    description: Scalars['String'];
    /** The description of the collection, complete with HTML formatting. */
    descriptionHtml: Scalars['HTML'];
    /** Information about the collection that's provided through resource feedback. */
    feedback?: Maybe<ResourceFeedback>;
    /** A unique human-friendly string for the collection. Automatically generated from the collection's title. */
    handle: Scalars['String'];
    /** Whether the collection includes a product. */
    hasProduct: Scalars['Boolean'];
    /** Globally unique identifier. */
    id: Scalars['ID'];
    /** The image associated with the collection. */
    image?: Maybe<Image>;
    /** The metafield associated with the resource. */
    metafield?: Maybe<Metafield>;
    /** A paginated list of metafields associated with the resource. */
    metafields: MetafieldConnection;
    /** Returns a private metafield found by namespace and key. */
    privateMetafield?: Maybe<PrivateMetafield>;
    /** List of private metafields. */
    privateMetafields: PrivateMetafieldConnection;
    /** The products that are included in the collection. */
    products: ProductConnection;
    /** The number of products included in the collection. */
    productsCount: Scalars['Int'];
    /** The number of publications a resource is published on. */
    publicationCount: Scalars['Int'];
    /**
     * The channels where the collection is published.
     * @deprecated Use `resourcePublications` instead
     */
    publications: CollectionPublicationConnection;
    /**
     * Check to see whether the resource is published to a given channel.
     * @deprecated Use `publishedOnPublication` instead
     */
    publishedOnChannel: Scalars['Boolean'];
    /**
     * Check to see whether the resource is published to the calling app's channel.
     * @deprecated Use `publishedOnCurrentPublication` instead
     */
    publishedOnCurrentChannel: Scalars['Boolean'];
    /** Check to see whether the resource is published to the calling app's publication. */
    publishedOnCurrentPublication: Scalars['Boolean'];
    /** Check to see whether the resource is published to a given publication. */
    publishedOnPublication: Scalars['Boolean'];
    /** The list of resources that are published to a publication. */
    resourcePublications: ResourcePublicationConnection;
    /** The rules used to assign products to the collection. This applies only to smart collections. */
    ruleSet?: Maybe<CollectionRuleSet>;
    /** SEO information for the collection. */
    seo: Seo;
    /** The order in which the collection's products are sorted. */
    sortOrder: CollectionSortOrder;
    /** The storefront ID of the collection. */
    storefrontId: Scalars['StorefrontID'];
    /** The theme template used when viewing this collection in a store. */
    templateSuffix?: Maybe<Scalars['String']>;
    /** The title of the collection. */
    title: Scalars['String'];
    /** The translations associated with the resource. */
    translations: Array<PublishedTranslation>;
    /**
     * The list of channels that the resource is not published to.
     * @deprecated Use `unpublishedPublications` instead
     */
    unpublishedChannels: ChannelConnection;
    /** The list of publications that the resource is not published to. */
    unpublishedPublications: PublicationConnection;
    /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the collection was last modified. */
    updatedAt: Scalars['DateTime'];
  };

/** Represents a collection of products. */
export type CollectionDescriptionArgs = {
  truncateAt?: Maybe<Scalars['Int']>;
};

/** Represents a collection of products. */
export type CollectionHasProductArgs = {
  id: Scalars['ID'];
};

/** Represents a collection of products. */
export type CollectionImageArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  crop?: Maybe<CropRegion>;
  scale?: Maybe<Scalars['Int']>;
};

/** Represents a collection of products. */
export type CollectionMetafieldArgs = {
  namespace: Scalars['String'];
  key: Scalars['String'];
};

/** Represents a collection of products. */
export type CollectionMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Represents a collection of products. */
export type CollectionPrivateMetafieldArgs = {
  namespace: Scalars['String'];
  key: Scalars['String'];
};

/** Represents a collection of products. */
export type CollectionPrivateMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Represents a collection of products. */
export type CollectionProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<ProductCollectionSortKeys>;
  query?: Maybe<Scalars['String']>;
};

/** Represents a collection of products. */
export type CollectionPublicationCountArgs = {
  onlyPublished?: Maybe<Scalars['Boolean']>;
};

/** Represents a collection of products. */
export type CollectionPublicationsArgs = {
  onlyPublished?: Maybe<Scalars['Boolean']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Represents a collection of products. */
export type CollectionPublishedOnChannelArgs = {
  channelId: Scalars['ID'];
};

/** Represents a collection of products. */
export type CollectionPublishedOnPublicationArgs = {
  publicationId: Scalars['ID'];
};

/** Represents a collection of products. */
export type CollectionResourcePublicationsArgs = {
  onlyPublished?: Maybe<Scalars['Boolean']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Represents a collection of products. */
export type CollectionTranslationsArgs = {
  locale: Scalars['String'];
};

/** Represents a collection of products. */
export type CollectionUnpublishedChannelsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Represents a collection of products. */
export type CollectionUnpublishedPublicationsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Return type for `collectionAddProducts` mutation. */
export type CollectionAddProductsPayload = {
  /** The updated collection. */
  collection?: Maybe<Collection>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

export type CollectionConnection = {
  /** A list of edges. */
  edges: Array<CollectionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Return type for `collectionCreate` mutation. */
export type CollectionCreatePayload = {
  /** The collection that has been created. */
  collection?: Maybe<Collection>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Specifies the collection to delete. */
export type CollectionDeleteInput = {
  /** The ID of the collection to be deleted. */
  id: Scalars['ID'];
};

/** Return type for `collectionDelete` mutation. */
export type CollectionDeletePayload = {
  /** The ID of the collection that was deleted. */
  deletedCollectionId?: Maybe<Scalars['ID']>;
  /** The shop associated with the collection. */
  shop: Shop;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

export type CollectionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of CollectionEdge. */
  node: Collection;
};

/** Specifies the input fields required to create a collection. */
export type CollectionInput = {
  /** The description of the collection, in HTML format. */
  descriptionHtml?: Maybe<Scalars['String']>;
  /** A unique human-friendly string for the collection. Automatically generated from the collection's title. */
  handle?: Maybe<Scalars['String']>;
  /** Specifies the collection to update or create a new collection if absent. */
  id?: Maybe<Scalars['ID']>;
  /** The image associated with the collection. */
  image?: Maybe<ImageInput>;
  /** Initial list of collection products. Only valid with `productCreate` and without rules. */
  products?: Maybe<Array<Scalars['ID']>>;
  /**
   * Initial list of collection publications. Only valid with `productCreate`. This
   * argument is deprecated: Use PublishablePublish instead.
   */
  publications?: Maybe<Array<CollectionPublicationInput>>;
  /** The private metafields to associated with this product. */
  privateMetafields?: Maybe<Array<PrivateMetafieldInput>>;
  /** The rules used to assign products to the collection. */
  ruleSet?: Maybe<CollectionRuleSetInput>;
  /** The theme template used when viewing the collection in a store. */
  templateSuffix?: Maybe<Scalars['String']>;
  /** The order in which the collection's products are sorted. */
  sortOrder?: Maybe<CollectionSortOrder>;
  /** Required for creating a new collection. */
  title?: Maybe<Scalars['String']>;
  /** The metafields to associate with this collection. */
  metafields?: Maybe<Array<MetafieldInput>>;
  /** SEO information for the collection. */
  seo?: Maybe<SeoInput>;
  /**
   * Indicates whether a redirect is required after a new handle has been provided.
   * If true, then the old handle is redirected to the new one automatically.
   */
  redirectNewHandle?: Maybe<Scalars['Boolean']>;
};

/** Represents the publications where a collection is published. */
export type CollectionPublication = {
  /**
   * The channel where the collection will be published.
   * @deprecated Use `publication` instead
   */
  channel: Channel;
  /** The collection to be published on the publication. */
  collection: Collection;
  /** Whether the publication is published or not. */
  isPublished: Scalars['Boolean'];
  /** The publication where the collection will be published. */
  publication: Publication;
  /** The date that the publication was or is going to be published. */
  publishDate: Scalars['DateTime'];
};

export type CollectionPublicationConnection = {
  /** A list of edges. */
  edges: Array<CollectionPublicationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CollectionPublicationEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of CollectionPublicationEdge. */
  node: CollectionPublication;
};

/** Specifies the publications to which a collection will be published. */
export type CollectionPublicationInput = {
  /** The ID of the publication. */
  publicationId?: Maybe<Scalars['ID']>;
  /** The ID of the channel. This argument is deprecated: Use publicationId instead. */
  channelId?: Maybe<Scalars['ID']>;
  /** This argument is deprecated: Use publicationId instead. */
  channelHandle?: Maybe<Scalars['String']>;
};

/** Specifies a collection to publish and the sales channels to publish it to. */
export type CollectionPublishInput = {
  /** The collection to create or update publications for. */
  id: Scalars['ID'];
  /** The channels where the collection will be published. */
  collectionPublications: Array<CollectionPublicationInput>;
};

/** Return type for `collectionPublish` mutation. */
export type CollectionPublishPayload = {
  /** The published collection. */
  collection?: Maybe<Collection>;
  /** The channels where the collection has been published. */
  collectionPublications?: Maybe<Array<CollectionPublication>>;
  /** The shop associated with the collection. */
  shop: Shop;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `collectionRemoveProducts` mutation. */
export type CollectionRemoveProductsPayload = {
  /** The asynchronous job removing the products. */
  job?: Maybe<Job>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `collectionReorderProducts` mutation. */
export type CollectionReorderProductsPayload = {
  /** The asynchronous job reordering the products. */
  job?: Maybe<Job>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Represents at rule that's used to assign products to a collection. */
export type CollectionRule = {
  /** The attribute that the rule focuses on (for example, `title` or `product_type`). */
  column: CollectionRuleColumn;
  /** The value that the operator is applied to (for example, `Hats`). */
  condition: Scalars['String'];
  /** The type of operator that the rule is based on (for example, `equals`, `contains`, or `not_equals`). */
  relation: CollectionRuleRelation;
};

/** Specifies the property of a product being used to populate the smart collection. */
export enum CollectionRuleColumn {
  /** The `tag` attribute. */
  Tag = 'TAG',
  /** The `title` attribute. */
  Title = 'TITLE',
  /** The `type` attribute. */
  Type = 'TYPE',
  /** The `vendor` attribute. */
  Vendor = 'VENDOR',
  /** The `variant_price` attribute. */
  VariantPrice = 'VARIANT_PRICE',
  /** The `is_price_reduced` attribute. */
  IsPriceReduced = 'IS_PRICE_REDUCED',
  /** The `variant_compare_at_price` attribute. */
  VariantCompareAtPrice = 'VARIANT_COMPARE_AT_PRICE',
  /** The `variant_weight` attribute. */
  VariantWeight = 'VARIANT_WEIGHT',
  /** The `variant_inventory` attribute. */
  VariantInventory = 'VARIANT_INVENTORY',
  /** The `variant_title` attribute. */
  VariantTitle = 'VARIANT_TITLE',
}

/** Collections may use rules to automatically include the matching products. This defines restrictions for a type of rule. */
export type CollectionRuleConditions = {
  /** Allowed relations of the rule. */
  allowedRelations: Array<CollectionRuleRelation>;
  /** Most commonly used relation for this rule. */
  defaultRelation: CollectionRuleRelation;
  /** Type of the rule. */
  ruleType: CollectionRuleColumn;
};

/** Specifies a rule to associate with a collection. */
export type CollectionRuleInput = {
  /** The attribute that the rule focuses on (for example, `title` or `product_type`). */
  column: CollectionRuleColumn;
  /** The type of operator that the rule is based on (for example, `equals`, `contains`, or `not_equals`). */
  relation: CollectionRuleRelation;
  /** The value that the operator is applied to (for example, `Hats`). */
  condition: Scalars['String'];
};

/** Specifies the relationship between the `column` and the condition. */
export enum CollectionRuleRelation {
  /** The attribute contains the condition. */
  Contains = 'CONTAINS',
  /** The attribute ends with the condition. */
  EndsWith = 'ENDS_WITH',
  /** The attribute is equal to the condition. */
  Equals = 'EQUALS',
  /** The attribute is greater than the condition. */
  GreaterThan = 'GREATER_THAN',
  /** The attribute is not set. */
  IsNotSet = 'IS_NOT_SET',
  /** The attribute is set. */
  IsSet = 'IS_SET',
  /** The attribute is less than the condition. */
  LessThan = 'LESS_THAN',
  /** The attribute does not contain the condition. */
  NotContains = 'NOT_CONTAINS',
  /** The attribute does not equal the condition. */
  NotEquals = 'NOT_EQUALS',
  /** The attribute starts with the condition. */
  StartsWith = 'STARTS_WITH',
}

/** The set of rules that are used to determine which products are included in the collection. */
export type CollectionRuleSet = {
  /**
   * Whether products must match any or all of the rules to be included in the collection.
   * If true, then products must match one or more of the rules to be included in the collection.
   * If false, then products must match all of the rules to be included in the collection.
   */
  appliedDisjunctively: Scalars['Boolean'];
  /** The rules used to assign products to the collection. */
  rules: Array<CollectionRule>;
};

/** Specifies a rule set for the collection. */
export type CollectionRuleSetInput = {
  /**
   * Whether products must match any or all of the rules to be included in the collection.
   * If true, then products must match one or more of the rules to be included in the collection.
   * If false, then products must match all of the rules to be included in the collection.
   */
  appliedDisjunctively: Scalars['Boolean'];
  /** The rules used to assign products to the collection. */
  rules?: Maybe<Array<CollectionRuleInput>>;
};

/** The set of valid sort keys for the Collection query. */
export enum CollectionSortKeys {
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
}

/** Specifies the sort order for the products in the collection. */
export enum CollectionSortOrder {
  /** Alphabetically, in ascending order (A - Z). */
  AlphaAsc = 'ALPHA_ASC',
  /** Alphabetically, in descending order (Z - A). */
  AlphaDesc = 'ALPHA_DESC',
  /** By best-selling products. */
  BestSelling = 'BEST_SELLING',
  /** By date created, in ascending order (oldest - newest). */
  Created = 'CREATED',
  /** By date created, in descending order (newest - oldest). */
  CreatedDesc = 'CREATED_DESC',
  /** In the order set manually by the merchant. */
  Manual = 'MANUAL',
  /** By price, in ascending order (lowest - highest). */
  PriceAsc = 'PRICE_ASC',
  /** By price, in descending order (highest - lowest). */
  PriceDesc = 'PRICE_DESC',
}

/** Specifies the collection to unpublish and the sales channels to remove it from. */
export type CollectionUnpublishInput = {
  /** The collection to create or update publications for. */
  id: Scalars['ID'];
  /** The channels where the collection is published. */
  collectionPublications: Array<CollectionPublicationInput>;
};

/** Return type for `collectionUnpublish` mutation. */
export type CollectionUnpublishPayload = {
  /** The collection that has been unpublished. */
  collection?: Maybe<Collection>;
  /** The shop associated with the collection. */
  shop: Shop;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `collectionUpdate` mutation. */
export type CollectionUpdatePayload = {
  /** The updated collection. */
  collection?: Maybe<Collection>;
  /** The asynchronous job updating the products based on the new rule set. */
  job?: Maybe<Job>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/**
 * Comment events are generated by staff members of a shop.
 * They are created when a staff member adds a comment to the timeline of an order, draft order, customer, or transfer.
 */
export type CommentEvent = Node &
  Event & {
    /** The name of the app that created the event. Returns null when the event originates from the Shopify admin. */
    appTitle?: Maybe<Scalars['String']>;
    /** The attachments associated with the comment event. */
    attachments: Array<CommentEventAttachment>;
    /** Whether the event was created by an app. */
    attributeToApp: Scalars['Boolean'];
    /** Whether the event was caused by an admin user. */
    attributeToUser: Scalars['Boolean'];
    /** Whether the comment event can be deleted. If true, then the comment event can be deleted. */
    canDelete: Scalars['Boolean'];
    /** Whether the comment event can be edited. If true, then the comment event can be edited. */
    canEdit: Scalars['Boolean'];
    /** The date and time when the event was created. */
    createdAt: Scalars['DateTime'];
    /** Whether the event is critical. */
    criticalAlert: Scalars['Boolean'];
    /** Whether the comment event has been edited. If true, then the comment event has been edited. */
    edited: Scalars['Boolean'];
    /** The references associated with the comment event. */
    embed?: Maybe<CommentEventEmbed>;
    /** Globally unique identifier. */
    id: Scalars['ID'];
    /** Human readable text that describes the event. */
    message: Scalars['FormattedString'];
    /** The raw body of the comment event. */
    rawMessage: Scalars['String'];
    /** The subject of the comment event. */
    subject: CommentEventSubject;
  };

/** A file attachment associated to a comment event. */
export type CommentEventAttachment = {
  /** The file extension of the comment event attachment, indicating the file format. */
  fileExtension?: Maybe<Scalars['String']>;
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** The image attached to the comment event. */
  image?: Maybe<Image>;
  /** The filename of the comment event attachment. */
  name: Scalars['String'];
  /** The size of the attachment. */
  size: Scalars['Int'];
  /** The URL of the attachment. */
  url: Scalars['URL'];
};

/** A file attachment associated to a comment event. */
export type CommentEventAttachmentImageArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  crop?: Maybe<CropRegion>;
  scale?: Maybe<Scalars['Int']>;
};

/** The main embed of a comment event. */
export type CommentEventEmbed =
  | Order
  | DraftOrder
  | Customer
  | Product
  | ProductVariant;

/** The subject line of a comment event. */
export type CommentEventSubject = {
  /** Whether the timeline subject has a timeline comment. If true, then a timeline comment exists. */
  hasTimelineComment: Scalars['Boolean'];
  /** Globally unique identifier. */
  id: Scalars['ID'];
};

/** Countries that have been defined in shipping zones for the shop. */
export type CountriesInShippingZones = {
  /** Countries that have been defined in shipping zones. */
  countryCodes: Array<CountryCode>;
  /** Whether 'Rest of World' has been defined in any shipping zones. */
  includeRestOfWorld: Scalars['Boolean'];
};

/** ISO 3166-1 alpha-2 country codes with some differences. */
export enum CountryCode {
  /** Afghanistan. */
  Af = 'AF',
  /** Aland Islands. */
  Ax = 'AX',
  /** Albania. */
  Al = 'AL',
  /** Algeria. */
  Dz = 'DZ',
  /** Andorra. */
  Ad = 'AD',
  /** Angola. */
  Ao = 'AO',
  /** Anguilla. */
  Ai = 'AI',
  /** Antigua And Barbuda. */
  Ag = 'AG',
  /** Argentina. */
  Ar = 'AR',
  /** Armenia. */
  Am = 'AM',
  /** Aruba. */
  Aw = 'AW',
  /** Australia. */
  Au = 'AU',
  /** Austria. */
  At = 'AT',
  /** Azerbaijan. */
  Az = 'AZ',
  /** Bahamas. */
  Bs = 'BS',
  /** Bahrain. */
  Bh = 'BH',
  /** Bangladesh. */
  Bd = 'BD',
  /** Barbados. */
  Bb = 'BB',
  /** Belarus. */
  By = 'BY',
  /** Belgium. */
  Be = 'BE',
  /** Belize. */
  Bz = 'BZ',
  /** Benin. */
  Bj = 'BJ',
  /** Bermuda. */
  Bm = 'BM',
  /** Bhutan. */
  Bt = 'BT',
  /** Bolivia. */
  Bo = 'BO',
  /** Bosnia And Herzegovina. */
  Ba = 'BA',
  /** Botswana. */
  Bw = 'BW',
  /** Bouvet Island. */
  Bv = 'BV',
  /** Brazil. */
  Br = 'BR',
  /** British Indian Ocean Territory. */
  Io = 'IO',
  /** Brunei. */
  Bn = 'BN',
  /** Bulgaria. */
  Bg = 'BG',
  /** Burkina Faso. */
  Bf = 'BF',
  /** Burundi. */
  Bi = 'BI',
  /** Cambodia. */
  Kh = 'KH',
  /** Canada. */
  Ca = 'CA',
  /** Cape Verde. */
  Cv = 'CV',
  /** Caribbean Netherlands. */
  Bq = 'BQ',
  /** Cayman Islands. */
  Ky = 'KY',
  /** Central African Republic. */
  Cf = 'CF',
  /** Chad. */
  Td = 'TD',
  /** Chile. */
  Cl = 'CL',
  /** China. */
  Cn = 'CN',
  /** Christmas Island. */
  Cx = 'CX',
  /** Cocos (Keeling) Islands. */
  Cc = 'CC',
  /** Colombia. */
  Co = 'CO',
  /** Comoros. */
  Km = 'KM',
  /** Congo. */
  Cg = 'CG',
  /** Congo, The Democratic Republic Of The. */
  Cd = 'CD',
  /** Cook Islands. */
  Ck = 'CK',
  /** Costa Rica. */
  Cr = 'CR',
  /** Croatia. */
  Hr = 'HR',
  /** Cuba. */
  Cu = 'CU',
  /** Curaçao. */
  Cw = 'CW',
  /** Cyprus. */
  Cy = 'CY',
  /** Czech Republic. */
  Cz = 'CZ',
  /** Côte d'Ivoire. */
  Ci = 'CI',
  /** Denmark. */
  Dk = 'DK',
  /** Djibouti. */
  Dj = 'DJ',
  /** Dominica. */
  Dm = 'DM',
  /** Dominican Republic. */
  Do = 'DO',
  /** Ecuador. */
  Ec = 'EC',
  /** Egypt. */
  Eg = 'EG',
  /** El Salvador. */
  Sv = 'SV',
  /** Equatorial Guinea. */
  Gq = 'GQ',
  /** Eritrea. */
  Er = 'ER',
  /** Estonia. */
  Ee = 'EE',
  /** Eswatini. */
  Sz = 'SZ',
  /** Ethiopia. */
  Et = 'ET',
  /** Falkland Islands (Malvinas). */
  Fk = 'FK',
  /** Faroe Islands. */
  Fo = 'FO',
  /** Fiji. */
  Fj = 'FJ',
  /** Finland. */
  Fi = 'FI',
  /** France. */
  Fr = 'FR',
  /** French Guiana. */
  Gf = 'GF',
  /** French Polynesia. */
  Pf = 'PF',
  /** French Southern Territories. */
  Tf = 'TF',
  /** Gabon. */
  Ga = 'GA',
  /** Gambia. */
  Gm = 'GM',
  /** Georgia. */
  Ge = 'GE',
  /** Germany. */
  De = 'DE',
  /** Ghana. */
  Gh = 'GH',
  /** Gibraltar. */
  Gi = 'GI',
  /** Greece. */
  Gr = 'GR',
  /** Greenland. */
  Gl = 'GL',
  /** Grenada. */
  Gd = 'GD',
  /** Guadeloupe. */
  Gp = 'GP',
  /** Guatemala. */
  Gt = 'GT',
  /** Guernsey. */
  Gg = 'GG',
  /** Guinea. */
  Gn = 'GN',
  /** Guinea Bissau. */
  Gw = 'GW',
  /** Guyana. */
  Gy = 'GY',
  /** Haiti. */
  Ht = 'HT',
  /** Heard Island And Mcdonald Islands. */
  Hm = 'HM',
  /** Holy See (Vatican City State). */
  Va = 'VA',
  /** Honduras. */
  Hn = 'HN',
  /** Hong Kong. */
  Hk = 'HK',
  /** Hungary. */
  Hu = 'HU',
  /** Iceland. */
  Is = 'IS',
  /** India. */
  In = 'IN',
  /** Indonesia. */
  Id = 'ID',
  /** Iran, Islamic Republic Of. */
  Ir = 'IR',
  /** Iraq. */
  Iq = 'IQ',
  /** Ireland. */
  Ie = 'IE',
  /** Isle Of Man. */
  Im = 'IM',
  /** Israel. */
  Il = 'IL',
  /** Italy. */
  It = 'IT',
  /** Jamaica. */
  Jm = 'JM',
  /** Japan. */
  Jp = 'JP',
  /** Jersey. */
  Je = 'JE',
  /** Jordan. */
  Jo = 'JO',
  /** Kazakhstan. */
  Kz = 'KZ',
  /** Kenya. */
  Ke = 'KE',
  /** Kiribati. */
  Ki = 'KI',
  /** Korea, Democratic People's Republic Of. */
  Kp = 'KP',
  /** Kosovo. */
  Xk = 'XK',
  /** Kuwait. */
  Kw = 'KW',
  /** Kyrgyzstan. */
  Kg = 'KG',
  /** Lao People's Democratic Republic. */
  La = 'LA',
  /** Latvia. */
  Lv = 'LV',
  /** Lebanon. */
  Lb = 'LB',
  /** Lesotho. */
  Ls = 'LS',
  /** Liberia. */
  Lr = 'LR',
  /** Libyan Arab Jamahiriya. */
  Ly = 'LY',
  /** Liechtenstein. */
  Li = 'LI',
  /** Lithuania. */
  Lt = 'LT',
  /** Luxembourg. */
  Lu = 'LU',
  /** Macao. */
  Mo = 'MO',
  /** Madagascar. */
  Mg = 'MG',
  /** Malawi. */
  Mw = 'MW',
  /** Malaysia. */
  My = 'MY',
  /** Maldives. */
  Mv = 'MV',
  /** Mali. */
  Ml = 'ML',
  /** Malta. */
  Mt = 'MT',
  /** Martinique. */
  Mq = 'MQ',
  /** Mauritania. */
  Mr = 'MR',
  /** Mauritius. */
  Mu = 'MU',
  /** Mayotte. */
  Yt = 'YT',
  /** Mexico. */
  Mx = 'MX',
  /** Moldova, Republic of. */
  Md = 'MD',
  /** Monaco. */
  Mc = 'MC',
  /** Mongolia. */
  Mn = 'MN',
  /** Montenegro. */
  Me = 'ME',
  /** Montserrat. */
  Ms = 'MS',
  /** Morocco. */
  Ma = 'MA',
  /** Mozambique. */
  Mz = 'MZ',
  /** Myanmar. */
  Mm = 'MM',
  /** Namibia. */
  Na = 'NA',
  /** Nauru. */
  Nr = 'NR',
  /** Nepal. */
  Np = 'NP',
  /** Netherlands. */
  Nl = 'NL',
  /** Netherlands Antilles. */
  An = 'AN',
  /** New Caledonia. */
  Nc = 'NC',
  /** New Zealand. */
  Nz = 'NZ',
  /** Nicaragua. */
  Ni = 'NI',
  /** Niger. */
  Ne = 'NE',
  /** Nigeria. */
  Ng = 'NG',
  /** Niue. */
  Nu = 'NU',
  /** Norfolk Island. */
  Nf = 'NF',
  /** North Macedonia. */
  Mk = 'MK',
  /** Norway. */
  No = 'NO',
  /** Oman. */
  Om = 'OM',
  /** Pakistan. */
  Pk = 'PK',
  /** Palestinian Territory, Occupied. */
  Ps = 'PS',
  /** Panama. */
  Pa = 'PA',
  /** Papua New Guinea. */
  Pg = 'PG',
  /** Paraguay. */
  Py = 'PY',
  /** Peru. */
  Pe = 'PE',
  /** Philippines. */
  Ph = 'PH',
  /** Pitcairn. */
  Pn = 'PN',
  /** Poland. */
  Pl = 'PL',
  /** Portugal. */
  Pt = 'PT',
  /** Qatar. */
  Qa = 'QA',
  /** Republic of Cameroon. */
  Cm = 'CM',
  /** Reunion. */
  Re = 'RE',
  /** Romania. */
  Ro = 'RO',
  /** Russia. */
  Ru = 'RU',
  /** Rwanda. */
  Rw = 'RW',
  /** Saint Barthélemy. */
  Bl = 'BL',
  /** Saint Helena. */
  Sh = 'SH',
  /** Saint Kitts And Nevis. */
  Kn = 'KN',
  /** Saint Lucia. */
  Lc = 'LC',
  /** Saint Martin. */
  Mf = 'MF',
  /** Saint Pierre And Miquelon. */
  Pm = 'PM',
  /** Samoa. */
  Ws = 'WS',
  /** San Marino. */
  Sm = 'SM',
  /** Sao Tome And Principe. */
  St = 'ST',
  /** Saudi Arabia. */
  Sa = 'SA',
  /** Senegal. */
  Sn = 'SN',
  /** Serbia. */
  Rs = 'RS',
  /** Seychelles. */
  Sc = 'SC',
  /** Sierra Leone. */
  Sl = 'SL',
  /** Singapore. */
  Sg = 'SG',
  /** Sint Maarten. */
  Sx = 'SX',
  /** Slovakia. */
  Sk = 'SK',
  /** Slovenia. */
  Si = 'SI',
  /** Solomon Islands. */
  Sb = 'SB',
  /** Somalia. */
  So = 'SO',
  /** South Africa. */
  Za = 'ZA',
  /** South Georgia And The South Sandwich Islands. */
  Gs = 'GS',
  /** South Korea. */
  Kr = 'KR',
  /** South Sudan. */
  Ss = 'SS',
  /** Spain. */
  Es = 'ES',
  /** Sri Lanka. */
  Lk = 'LK',
  /** St. Vincent. */
  Vc = 'VC',
  /** Sudan. */
  Sd = 'SD',
  /** Suriname. */
  Sr = 'SR',
  /** Svalbard And Jan Mayen. */
  Sj = 'SJ',
  /** Sweden. */
  Se = 'SE',
  /** Switzerland. */
  Ch = 'CH',
  /** Syria. */
  Sy = 'SY',
  /** Taiwan. */
  Tw = 'TW',
  /** Tajikistan. */
  Tj = 'TJ',
  /** Tanzania, United Republic Of. */
  Tz = 'TZ',
  /** Thailand. */
  Th = 'TH',
  /** Timor Leste. */
  Tl = 'TL',
  /** Togo. */
  Tg = 'TG',
  /** Tokelau. */
  Tk = 'TK',
  /** Tonga. */
  To = 'TO',
  /** Trinidad and Tobago. */
  Tt = 'TT',
  /** Tunisia. */
  Tn = 'TN',
  /** Turkey. */
  Tr = 'TR',
  /** Turkmenistan. */
  Tm = 'TM',
  /** Turks and Caicos Islands. */
  Tc = 'TC',
  /** Tuvalu. */
  Tv = 'TV',
  /** Uganda. */
  Ug = 'UG',
  /** Ukraine. */
  Ua = 'UA',
  /** United Arab Emirates. */
  Ae = 'AE',
  /** United Kingdom. */
  Gb = 'GB',
  /** United States. */
  Us = 'US',
  /** United States Minor Outlying Islands. */
  Um = 'UM',
  /** Uruguay. */
  Uy = 'UY',
  /** Uzbekistan. */
  Uz = 'UZ',
  /** Vanuatu. */
  Vu = 'VU',
  /** Venezuela. */
  Ve = 'VE',
  /** Vietnam. */
  Vn = 'VN',
  /** Virgin Islands, British. */
  Vg = 'VG',
  /** Wallis And Futuna. */
  Wf = 'WF',
  /** Western Sahara. */
  Eh = 'EH',
  /** Yemen. */
  Ye = 'YE',
  /** Zambia. */
  Zm = 'ZM',
  /** Zimbabwe. */
  Zw = 'ZW',
}

/** Holds the country specific harmonized system code and the country ISO code. */
export type CountryHarmonizedSystemCode = {
  /** Country ISO code. */
  countryCode: CountryCode;
  /** Country specific harmonized system code. */
  harmonizedSystemCode: Scalars['String'];
};

export type CountryHarmonizedSystemCodeConnection = {
  /** A list of edges. */
  edges: Array<CountryHarmonizedSystemCodeEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CountryHarmonizedSystemCodeEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of CountryHarmonizedSystemCodeEdge. */
  node: CountryHarmonizedSystemCode;
};

/** Holds the country specific harmonized system code and the country ISO code. */
export type CountryHarmonizedSystemCodeInput = {
  /** Country specific harmonized system code. */
  harmonizedSystemCode: Scalars['String'];
  /** Country ISO code. */
  countryCode: CountryCode;
};

/** Specifies the input fields required to create a media object. */
export type CreateMediaInput = {
  /** The original source of the media object. May be an external URL or signed upload URL. */
  originalSource: Scalars['String'];
  /** The alt text associated to the media. */
  alt?: Maybe<Scalars['String']>;
  /** The media content type. */
  mediaContentType: MediaContentType;
};

/** The part of the image that should remain after cropping. */
export enum CropRegion {
  /** Keep the center of the image. */
  Center = 'CENTER',
  /** Keep the top of the image. */
  Top = 'TOP',
  /** Keep the bottom of the image. */
  Bottom = 'BOTTOM',
  /** Keep the left of the image. */
  Left = 'LEFT',
  /** Keep the right of the image. */
  Right = 'RIGHT',
}

/** Currency codes. */
export enum CurrencyCode {
  /** United States Dollars (USD). */
  Usd = 'USD',
  /** Euro (EUR). */
  Eur = 'EUR',
  /** United Kingdom Pounds (GBP). */
  Gbp = 'GBP',
  /** Canadian Dollars (CAD). */
  Cad = 'CAD',
  /** Afghan Afghani (AFN). */
  Afn = 'AFN',
  /** Albanian Lek (ALL). */
  All = 'ALL',
  /** Algerian Dinar (DZD). */
  Dzd = 'DZD',
  /** Angolan Kwanza (AOA). */
  Aoa = 'AOA',
  /** Argentine Pesos (ARS). */
  Ars = 'ARS',
  /** Armenian Dram (AMD). */
  Amd = 'AMD',
  /** Aruban Florin (AWG). */
  Awg = 'AWG',
  /** Australian Dollars (AUD). */
  Aud = 'AUD',
  /** Barbadian Dollar (BBD). */
  Bbd = 'BBD',
  /** Azerbaijani Manat (AZN). */
  Azn = 'AZN',
  /** Bangladesh Taka (BDT). */
  Bdt = 'BDT',
  /** Bahamian Dollar (BSD). */
  Bsd = 'BSD',
  /** Bahraini Dinar (BHD). */
  Bhd = 'BHD',
  /** Burundian Franc (BIF). */
  Bif = 'BIF',
  /** Belarusian Ruble (BYR). */
  Byr = 'BYR',
  /** Belize Dollar (BZD). */
  Bzd = 'BZD',
  /** Bermudian Dollar (BMD). */
  Bmd = 'BMD',
  /** Bhutanese Ngultrum (BTN). */
  Btn = 'BTN',
  /** Bosnia and Herzegovina Convertible Mark (BAM). */
  Bam = 'BAM',
  /** Brazilian Real (BRL). */
  Brl = 'BRL',
  /** Bolivian Boliviano (BOB). */
  Bob = 'BOB',
  /** Botswana Pula (BWP). */
  Bwp = 'BWP',
  /** Brunei Dollar (BND). */
  Bnd = 'BND',
  /** Bulgarian Lev (BGN). */
  Bgn = 'BGN',
  /** Burmese Kyat (MMK). */
  Mmk = 'MMK',
  /** Cambodian Riel. */
  Khr = 'KHR',
  /** Cape Verdean escudo (CVE). */
  Cve = 'CVE',
  /** Cayman Dollars (KYD). */
  Kyd = 'KYD',
  /** Central African CFA Franc (XAF). */
  Xaf = 'XAF',
  /** Chilean Peso (CLP). */
  Clp = 'CLP',
  /** Chinese Yuan Renminbi (CNY). */
  Cny = 'CNY',
  /** Colombian Peso (COP). */
  Cop = 'COP',
  /** Comorian Franc (KMF). */
  Kmf = 'KMF',
  /** Congolese franc (CDF). */
  Cdf = 'CDF',
  /** Costa Rican Colones (CRC). */
  Crc = 'CRC',
  /** Croatian Kuna (HRK). */
  Hrk = 'HRK',
  /** Czech Koruny (CZK). */
  Czk = 'CZK',
  /** Danish Kroner (DKK). */
  Dkk = 'DKK',
  /** Djiboutian Franc (DJF). */
  Djf = 'DJF',
  /** Dominican Peso (DOP). */
  Dop = 'DOP',
  /** East Caribbean Dollar (XCD). */
  Xcd = 'XCD',
  /** Egyptian Pound (EGP). */
  Egp = 'EGP',
  /** Ethiopian Birr (ETB). */
  Etb = 'ETB',
  /** Falkland Islands Pounds (FKP). */
  Fkp = 'FKP',
  /** CFP Franc (XPF). */
  Xpf = 'XPF',
  /** Fijian Dollars (FJD). */
  Fjd = 'FJD',
  /** Gibraltar Pounds (GIP). */
  Gip = 'GIP',
  /** Gambian Dalasi (GMD). */
  Gmd = 'GMD',
  /** Ghanaian Cedi (GHS). */
  Ghs = 'GHS',
  /** Guatemalan Quetzal (GTQ). */
  Gtq = 'GTQ',
  /** Guyanese Dollar (GYD). */
  Gyd = 'GYD',
  /** Georgian Lari (GEL). */
  Gel = 'GEL',
  /** Guinean Franc (GNF). */
  Gnf = 'GNF',
  /** Haitian Gourde (HTG). */
  Htg = 'HTG',
  /** Honduran Lempira (HNL). */
  Hnl = 'HNL',
  /** Hong Kong Dollars (HKD). */
  Hkd = 'HKD',
  /** Hungarian Forint (HUF). */
  Huf = 'HUF',
  /** Icelandic Kronur (ISK). */
  Isk = 'ISK',
  /** Indian Rupees (INR). */
  Inr = 'INR',
  /** Indonesian Rupiah (IDR). */
  Idr = 'IDR',
  /** Israeli New Shekel (NIS). */
  Ils = 'ILS',
  /** Iranian Rial (IRR). */
  Irr = 'IRR',
  /** Iraqi Dinar (IQD). */
  Iqd = 'IQD',
  /** Jamaican Dollars (JMD). */
  Jmd = 'JMD',
  /** Japanese Yen (JPY). */
  Jpy = 'JPY',
  /** Jersey Pound. */
  Jep = 'JEP',
  /** Jordanian Dinar (JOD). */
  Jod = 'JOD',
  /** Kazakhstani Tenge (KZT). */
  Kzt = 'KZT',
  /** Kenyan Shilling (KES). */
  Kes = 'KES',
  /** Kuwaiti Dinar (KWD). */
  Kwd = 'KWD',
  /** Kyrgyzstani Som (KGS). */
  Kgs = 'KGS',
  /** Laotian Kip (LAK). */
  Lak = 'LAK',
  /** Latvian Lati (LVL). */
  Lvl = 'LVL',
  /** Lebanese Pounds (LBP). */
  Lbp = 'LBP',
  /** Lesotho Loti (LSL). */
  Lsl = 'LSL',
  /** Liberian Dollar (LRD). */
  Lrd = 'LRD',
  /** Libyan Dinar (LYD). */
  Lyd = 'LYD',
  /** Lithuanian Litai (LTL). */
  Ltl = 'LTL',
  /** Malagasy Ariary (MGA). */
  Mga = 'MGA',
  /** Macedonia Denar (MKD). */
  Mkd = 'MKD',
  /** Macanese Pataca (MOP). */
  Mop = 'MOP',
  /** Malawian Kwacha (MWK). */
  Mwk = 'MWK',
  /** Maldivian Rufiyaa (MVR). */
  Mvr = 'MVR',
  /** Mexican Pesos (MXN). */
  Mxn = 'MXN',
  /** Malaysian Ringgits (MYR). */
  Myr = 'MYR',
  /** Mauritian Rupee (MUR). */
  Mur = 'MUR',
  /** Moldovan Leu (MDL). */
  Mdl = 'MDL',
  /** Moroccan Dirham. */
  Mad = 'MAD',
  /** Mongolian Tugrik. */
  Mnt = 'MNT',
  /** Mozambican Metical. */
  Mzn = 'MZN',
  /** Namibian Dollar. */
  Nad = 'NAD',
  /** Nepalese Rupee (NPR). */
  Npr = 'NPR',
  /** Netherlands Antillean Guilder. */
  Ang = 'ANG',
  /** New Zealand Dollars (NZD). */
  Nzd = 'NZD',
  /** Nicaraguan Córdoba (NIO). */
  Nio = 'NIO',
  /** Nigerian Naira (NGN). */
  Ngn = 'NGN',
  /** Norwegian Kroner (NOK). */
  Nok = 'NOK',
  /** Omani Rial (OMR). */
  Omr = 'OMR',
  /** Panamian Balboa (PAB). */
  Pab = 'PAB',
  /** Pakistani Rupee (PKR). */
  Pkr = 'PKR',
  /** Papua New Guinean Kina (PGK). */
  Pgk = 'PGK',
  /** Paraguayan Guarani (PYG). */
  Pyg = 'PYG',
  /** Peruvian Nuevo Sol (PEN). */
  Pen = 'PEN',
  /** Philippine Peso (PHP). */
  Php = 'PHP',
  /** Polish Zlotych (PLN). */
  Pln = 'PLN',
  /** Qatari Rial (QAR). */
  Qar = 'QAR',
  /** Romanian Lei (RON). */
  Ron = 'RON',
  /** Russian Rubles (RUB). */
  Rub = 'RUB',
  /** Rwandan Franc (RWF). */
  Rwf = 'RWF',
  /** Samoan Tala (WST). */
  Wst = 'WST',
  /** Saint Helena Pounds (SHP). */
  Shp = 'SHP',
  /** Saudi Riyal (SAR). */
  Sar = 'SAR',
  /** Sao Tome And Principe Dobra (STD). */
  Std = 'STD',
  /** Serbian dinar (RSD). */
  Rsd = 'RSD',
  /** Seychellois Rupee (SCR). */
  Scr = 'SCR',
  /** Sierra Leonean Leone (SLL). */
  Sll = 'SLL',
  /** Singapore Dollars (SGD). */
  Sgd = 'SGD',
  /** Sudanese Pound (SDG). */
  Sdg = 'SDG',
  /** Syrian Pound (SYP). */
  Syp = 'SYP',
  /** South African Rand (ZAR). */
  Zar = 'ZAR',
  /** South Korean Won (KRW). */
  Krw = 'KRW',
  /** South Sudanese Pound (SSP). */
  Ssp = 'SSP',
  /** Solomon Islands Dollar (SBD). */
  Sbd = 'SBD',
  /** Sri Lankan Rupees (LKR). */
  Lkr = 'LKR',
  /** Surinamese Dollar (SRD). */
  Srd = 'SRD',
  /** Swazi Lilangeni (SZL). */
  Szl = 'SZL',
  /** Swedish Kronor (SEK). */
  Sek = 'SEK',
  /** Swiss Francs (CHF). */
  Chf = 'CHF',
  /** Taiwan Dollars (TWD). */
  Twd = 'TWD',
  /** Thai baht (THB). */
  Thb = 'THB',
  /** Tajikistani Somoni (TJS). */
  Tjs = 'TJS',
  /** Tanzanian Shilling (TZS). */
  Tzs = 'TZS',
  /** Tongan Pa'anga (TOP). */
  Top = 'TOP',
  /** Trinidad and Tobago Dollars (TTD). */
  Ttd = 'TTD',
  /** Tunisian Dinar (TND). */
  Tnd = 'TND',
  /** Turkish Lira (TRY). */
  Try = 'TRY',
  /** Turkmenistani Manat (TMT). */
  Tmt = 'TMT',
  /** Ugandan Shilling (UGX). */
  Ugx = 'UGX',
  /** Ukrainian Hryvnia (UAH). */
  Uah = 'UAH',
  /** United Arab Emirates Dirham (AED). */
  Aed = 'AED',
  /** Uruguayan Pesos (UYU). */
  Uyu = 'UYU',
  /** Uzbekistan som (UZS). */
  Uzs = 'UZS',
  /** Vanuatu Vatu (VUV). */
  Vuv = 'VUV',
  /** Venezuelan Bolivares (VEF). */
  Vef = 'VEF',
  /** Vietnamese đồng (VND). */
  Vnd = 'VND',
  /** West African CFA franc (XOF). */
  Xof = 'XOF',
  /** Yemeni Rial (YER). */
  Yer = 'YER',
  /** Zambian Kwacha (ZMW). */
  Zmw = 'ZMW',
}

/** Currency formats. */
export type CurrencyFormats = {
  /** HTML without currency. */
  moneyFormat: Scalars['FormattedString'];
  /** Email without currency. */
  moneyInEmailsFormat: Scalars['String'];
  /** HTML with currency. */
  moneyWithCurrencyFormat: Scalars['FormattedString'];
  /** Email with currency. */
  moneyWithCurrencyInEmailsFormat: Scalars['String'];
};

/** Represents a currency setting. */
export type CurrencySetting = {
  /** The currency's ISO code. */
  currencyCode: CurrencyCode;
  /** The full name of the currency. */
  currencyName: Scalars['String'];
  /** Flag describing whether the currency is enabled. */
  enabled: Scalars['Boolean'];
  /** Date and time when the exchange rate for the currency was last modified. */
  rateUpdatedAt?: Maybe<Scalars['DateTime']>;
};

export type CurrencySettingConnection = {
  /** A list of edges. */
  edges: Array<CurrencySettingEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CurrencySettingEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of CurrencySettingEdge. */
  node: CurrencySetting;
};

/**
 * Represents information about a customer of the shop, such as the customer's contact details, their order
 * history, and whether they've agreed to receive email marketing.
 */
export type Customer = Node &
  CommentEventSubject &
  HasMetafields &
  LegacyInteroperability &
  HasEvents & {
    /** Whether the customer has agreed to receive marketing materials. */
    acceptsMarketing: Scalars['Boolean'];
    /** The date and time when the customer consented or objected to receiving marketing material by email. */
    acceptsMarketingUpdatedAt: Scalars['DateTime'];
    /** A list of addresses associated with the customer. */
    addresses: Array<MailingAddress>;
    /**
     * The average amount that the customer spent per order.
     * @deprecated Use `averageOrderAmountV2` instead
     */
    averageOrderAmount?: Maybe<Scalars['Money']>;
    /** The average amount that the customer spent per order. */
    averageOrderAmountV2?: Maybe<MoneyV2>;
    /**
     * Whether the merchant can delete the customer from their store.
     *
     * A customer can be deleted from a store only if they have not yet made an order. After a customer makes an
     * order, they can't be deleted from a store.
     */
    canDelete: Scalars['Boolean'];
    /** The date and time when the customer was added to the store. */
    createdAt: Scalars['DateTime'];
    /** The default address associated with the customer. */
    defaultAddress?: Maybe<MailingAddress>;
    /**
     * The full name of the customer, based on the values for first_name and last_name. If the first_name and
     * last_name are not available, then this falls back to the customer's email
     * address, and if that is not available, the customer's phone number.
     */
    displayName: Scalars['String'];
    /** The customer's email address. */
    email?: Maybe<Scalars['String']>;
    /** A list of events associated with the customer. */
    events: EventConnection;
    /** The customer's first name. */
    firstName?: Maybe<Scalars['String']>;
    /** Whether the customer has a note associated with them. */
    hasNote: Scalars['Boolean'];
    /** Whether the merchant has added timeline comments about the customer on the customer's page. */
    hasTimelineComment: Scalars['Boolean'];
    /** Globally unique identifier. */
    id: Scalars['ID'];
    /** The image associated with the customer. */
    image: Image;
    /** The customer's last name. */
    lastName?: Maybe<Scalars['String']>;
    /** The customer's last order. */
    lastOrder?: Maybe<Order>;
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars['UnsignedInt64'];
    /**
     * The amount of time since the customer was first added to the store.
     *
     * Example: 'about 12 years'.
     */
    lifetimeDuration: Scalars['String'];
    /** The customer's locale. */
    locale: Scalars['String'];
    /**
     * The marketing subscription opt-in level (as described by the M3AAWG best practices guideline) that the
     * customer gave when they consented to receive marketing material by email.
     *
     * If the customer does not accept email marketing, then this property will be null.
     */
    marketingOptInLevel?: Maybe<CustomerMarketingOptInLevel>;
    /** The metafield associated with the resource. */
    metafield?: Maybe<Metafield>;
    /** A paginated list of metafields associated with the resource. */
    metafields: MetafieldConnection;
    /** A note about the customer. */
    note?: Maybe<Scalars['String']>;
    /** A list of the customer's orders. */
    orders: OrderConnection;
    /** The number of orders that the customer has made at the store in their lifetime. */
    ordersCount: Scalars['UnsignedInt64'];
    /** The customer's phone number. */
    phone?: Maybe<Scalars['String']>;
    /** Returns a private metafield found by namespace and key. */
    privateMetafield?: Maybe<PrivateMetafield>;
    /** List of private metafields. */
    privateMetafields: PrivateMetafieldConnection;
    /** The state of the customer's account with the shop. */
    state: CustomerState;
    /** A list of tags assigned to the customer. */
    tags: Array<Scalars['String']>;
    /** Whether the customer is exempt from being charged taxes on their orders. */
    taxExempt: Scalars['Boolean'];
    /** The list of tax exemptions applied to the customer. */
    taxExemptions: Array<TaxExemption>;
    /** The total amount that the customer has spent on orders in their lifetime. */
    totalSpent: Scalars['Money'];
    /** The total amount that the customer has spent on orders in their lifetime. */
    totalSpentV2: MoneyV2;
    /** The date and time when the customer was last updated. */
    updatedAt: Scalars['DateTime'];
    /**
     * Whether the email address is formatted correctly. This does not
     * guarantee that the email address actually exists.
     */
    validEmailAddress: Scalars['Boolean'];
    /** Whether the customer has verified their email address. */
    verifiedEmail: Scalars['Boolean'];
  };

/**
 * Represents information about a customer of the shop, such as the customer's contact details, their order
 * history, and whether they've agreed to receive email marketing.
 */
export type CustomerAddressesArgs = {
  first?: Maybe<Scalars['Int']>;
};

/**
 * Represents information about a customer of the shop, such as the customer's contact details, their order
 * history, and whether they've agreed to receive email marketing.
 */
export type CustomerEventsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<EventSortKeys>;
  query?: Maybe<Scalars['String']>;
};

/**
 * Represents information about a customer of the shop, such as the customer's contact details, their order
 * history, and whether they've agreed to receive email marketing.
 */
export type CustomerImageArgs = {
  size?: Maybe<Scalars['Int']>;
};

/**
 * Represents information about a customer of the shop, such as the customer's contact details, their order
 * history, and whether they've agreed to receive email marketing.
 */
export type CustomerMetafieldArgs = {
  namespace: Scalars['String'];
  key: Scalars['String'];
};

/**
 * Represents information about a customer of the shop, such as the customer's contact details, their order
 * history, and whether they've agreed to receive email marketing.
 */
export type CustomerMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/**
 * Represents information about a customer of the shop, such as the customer's contact details, their order
 * history, and whether they've agreed to receive email marketing.
 */
export type CustomerOrdersArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<OrderSortKeys>;
  query?: Maybe<Scalars['String']>;
};

/**
 * Represents information about a customer of the shop, such as the customer's contact details, their order
 * history, and whether they've agreed to receive email marketing.
 */
export type CustomerPrivateMetafieldArgs = {
  namespace: Scalars['String'];
  key: Scalars['String'];
};

/**
 * Represents information about a customer of the shop, such as the customer's contact details, their order
 * history, and whether they've agreed to receive email marketing.
 */
export type CustomerPrivateMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Return type for `customerAddTaxExemptions` mutation. */
export type CustomerAddTaxExemptionsPayload = {
  /** The updated customer. */
  customer?: Maybe<Customer>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

export type CustomerConnection = {
  /** A list of edges. */
  edges: Array<CustomerEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Return type for `customerCreate` mutation. */
export type CustomerCreatePayload = {
  /** The created customer. */
  customer?: Maybe<Customer>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Specifies the customer to delete. */
export type CustomerDeleteInput = {
  /** The ID of the customer to delete. */
  id: Scalars['ID'];
};

/** Return type for `customerDelete` mutation. */
export type CustomerDeletePayload = {
  /** ID of the deleted customer. */
  deletedCustomerId?: Maybe<Scalars['ID']>;
  /** Shop of the deleted customer. */
  shop: Shop;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

export type CustomerEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of CustomerEdge. */
  node: Customer;
};

/** Return type for `customerGenerateAccountActivationUrl` mutation. */
export type CustomerGenerateAccountActivationUrlPayload = {
  /** The newly generated account activation URL. */
  accountActivationUrl?: Maybe<Scalars['URL']>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Provides the fields and values to use when creating or updating a customer. */
export type CustomerInput = {
  /** Whether the customer has consented to receive marketing material via email. */
  acceptsMarketing?: Maybe<Scalars['Boolean']>;
  /**
   * The date and time when the customer consented or objected to receiving marketing material by email. Set
   * whenever the customer consents or objects to marketing material.
   */
  acceptsMarketingUpdatedAt?: Maybe<Scalars['DateTime']>;
  /** An input that specifies addresses for a customer. */
  addresses?: Maybe<Array<MailingAddressInput>>;
  /** The unique email address of the customer. */
  email?: Maybe<Scalars['String']>;
  /** The customer's first name. */
  firstName?: Maybe<Scalars['String']>;
  /** Specifies the customer to update, or creates a new customer if one doesn't exist. */
  id?: Maybe<Scalars['ID']>;
  /** The customer's last name. */
  lastName?: Maybe<Scalars['String']>;
  /** The customer's locale. */
  locale?: Maybe<Scalars['String']>;
  /**
   * The marketing subscription opt-in level (as described by the M3AAWG best practices guideline) that was
   * enabled when the customer consented to receiving marketing material by email.
   */
  marketingOptInLevel?: Maybe<CustomerMarketingOptInLevel>;
  /** Attaches additional metadata to the customer. */
  metafields?: Maybe<Array<MetafieldInput>>;
  /** A note about the customer. */
  note?: Maybe<Scalars['String']>;
  /** The unique phone number for the customer. */
  phone?: Maybe<Scalars['String']>;
  /** The private metafields to associated with this product. */
  privateMetafields?: Maybe<Array<PrivateMetafieldInput>>;
  /** Tags that the shop owner has attached to the customer. */
  tags?: Maybe<Array<Scalars['String']>>;
  /** Whether the customer is exempt from paying taxes on their order. */
  taxExempt?: Maybe<Scalars['Boolean']>;
  /** The list of tax exemptions to apply to the customer. */
  taxExemptions?: Maybe<Array<TaxExemption>>;
};

/** Represents a customer's activity on a shop's online store. */
export type CustomerJourney = {
  /** The position of the current order within the customer's order history. */
  customerOrderIndex: Scalars['Int'];
  /**
   * The amount of days between first session and order creation date. First
   * session represents first session since the last order, or first session within
   * the 30 day attribution window, if more than 30 days has passed since the last order.
   */
  daysToConversion: Scalars['Int'];
  /** The customer's first session going into the shop. */
  firstVisit: CustomerVisit;
  /** The last session before an order is made. */
  lastVisit?: Maybe<CustomerVisit>;
  /** Events preceding a customer order, such as shop sessions. */
  moments: Array<CustomerMoment>;
};

/**
 * The valid values for the marketing subscription opt-in active at the time the customer consented to email
 * marketing.
 *
 * The levels are defined by [the M3AAWG best practices guideline
 *   document](https://www.m3aawg.org/sites/maawg/files/news/M3AAWG_Senders_BCP_Ver3-2015-02.pdf).
 */
export enum CustomerMarketingOptInLevel {
  /**
   * The customer started receiving marketing email(s) after providing their email address, without any
   * intermediate steps.
   */
  SingleOptIn = 'SINGLE_OPT_IN',
  /**
   * After providing their email address, the customer received a confirmation email which required them to
   * perform a prescribed action before receiving marketing emails.
   */
  ConfirmedOptIn = 'CONFIRMED_OPT_IN',
  /** The customer receives marketing emails, but the original opt-in process is unknown. */
  Unknown = 'UNKNOWN',
}

/** Represents events preceding a customer order, such as shop sessions. */
export type CustomerMoment = {
  /** When the customer moment occurred. */
  occurredAt: Scalars['DateTime'];
};

/** Return type for `customerRemoveTaxExemptions` mutation. */
export type CustomerRemoveTaxExemptionsPayload = {
  /** The updated customer. */
  customer?: Maybe<Customer>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `customerReplaceTaxExemptions` mutation. */
export type CustomerReplaceTaxExemptionsPayload = {
  /** The updated customer. */
  customer?: Maybe<Customer>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** The set of valid sort keys for the CustomerSavedSearch query. */
export enum CustomerSavedSearchSortKeys {
  /** Sort by the `name` value. */
  Name = 'NAME',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
}

/** The set of valid sort keys for the Customer query. */
export enum CustomerSortKeys {
  /** Sort by the `name` value. */
  Name = 'NAME',
  /** Sort by the `location` value. */
  Location = 'LOCATION',
  /** Sort by the `orders_count` value. */
  OrdersCount = 'ORDERS_COUNT',
  /** Sort by the `last_order_date` value. */
  LastOrderDate = 'LAST_ORDER_DATE',
  /** Sort by the `total_spent` value. */
  TotalSpent = 'TOTAL_SPENT',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
}

/** The valid values for the state of a customer's account with a shop. */
export enum CustomerState {
  /** The customer declined the email invite to create an account. */
  Declined = 'DECLINED',
  /** The customer doesn't have an active account. Customer accounts can be disabled from the Shopify admin at any time. */
  Disabled = 'DISABLED',
  /** The customer has created an account. */
  Enabled = 'ENABLED',
  /** The customer has received an email invite to create an account. */
  Invited = 'INVITED',
}

/** Return type for `customerUpdateDefaultAddress` mutation. */
export type CustomerUpdateDefaultAddressPayload = {
  /** The customer whose address was updated. */
  customer?: Maybe<Customer>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `customerUpdate` mutation. */
export type CustomerUpdatePayload = {
  /** The updated customer. */
  customer?: Maybe<Customer>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Information about a customer's session on a shop's online store. */
export type CustomerVisit = CustomerMoment &
  Node & {
    /** Globally unique identifier. */
    id: Scalars['ID'];
    /** URL of the first page the customer landed on for the session. */
    landingPage?: Maybe<Scalars['URL']>;
    /**
     * Landing page information with URL linked in HTML. For example, the first page
     * the customer visited was store.myshopify.com/products/1.
     */
    landingPageHtml?: Maybe<Scalars['HTML']>;
    /**
     * Represent actions taken by an app, on behalf of a merchant,
     * to market Shopify resources such as products, collections, and discounts.
     */
    marketingEvent?: Maybe<MarketingEvent>;
    /** When the customer moment occurred. */
    occurredAt: Scalars['DateTime'];
    /**
     * Marketing referral code from the link that the customer clicked to visit the store.
     * Supports the following URL attributes: _ref_, _source_, or _r_.
     * For example, if the URL is myshopifystore.com/products/slide?ref=j2tj1tn2, then this value is j2tj1tn2.
     */
    referralCode?: Maybe<Scalars['String']>;
    /** Referral information with URLs linked in HTML. */
    referralInfoHtml: Scalars['FormattedString'];
    /**
     * Webpage where the customer clicked a link that sent them to the online store.
     * For example, _https://randomblog.com/page1_ or _android-app://com.google.android.gm_.
     */
    referrerUrl?: Maybe<Scalars['URL']>;
    /**
     * Source from which the customer visited the store, such as a platform (Facebook, Google), email, direct,
     * a website domain, QR code, or unknown.
     */
    source: Scalars['String'];
    /** Describes the source explicitly for first or last session. */
    sourceDescription?: Maybe<Scalars['String']>;
    /** Type of marketing tactic. */
    sourceType?: Maybe<MarketingTactic>;
    /** A set of UTM parameters gathered from the URL parameters of the referrer. */
    utmParameters?: Maybe<UtmParameters>;
  };

/** Days of the week from Monday to Sunday. */
export enum DayOfTheWeek {
  /** Monday. */
  Monday = 'MONDAY',
  /** Tuesday. */
  Tuesday = 'TUESDAY',
  /** Wednesday. */
  Wednesday = 'WEDNESDAY',
  /** Thursday. */
  Thursday = 'THURSDAY',
  /** Friday. */
  Friday = 'FRIDAY',
  /** Saturday. */
  Saturday = 'SATURDAY',
  /** Sunday. */
  Sunday = 'SUNDAY',
}

/**
 * Deletion events chronicle the destruction of resources (e.g. products and collections).
 * Once deleted, the deletion event is the only trace of the original's existence,
 * as the resource itself has been removed and can no longer be accessed.
 */
export type DeletionEvent = {
  /** The date and time when the deletion event for the related resource was generated. */
  occurredAt: Scalars['DateTime'];
  /** The id of the resource that was deleted. */
  subjectId: Scalars['ID'];
  /** The type of resource that was deleted. */
  subjectType: DeletionEventSubjectType;
};

export type DeletionEventConnection = {
  /** A list of edges. */
  edges: Array<DeletionEventEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type DeletionEventEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of DeletionEventEdge. */
  node: DeletionEvent;
};

/** The set of valid sort keys for the DeletionEvent query. */
export enum DeletionEventSortKeys {
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
}

/** The supported subject types of deletion events. */
export enum DeletionEventSubjectType {
  Collection = 'COLLECTION',
  Product = 'PRODUCT',
}

/** The service and the countries they are available for. */
export type DeliveryAvailableService = {
  /** The countries the service provider ships to. */
  countries: DeliveryCountryCodesOrRestOfWorld;
  /** The name of the service. */
  name: Scalars['String'];
};

/** Information about a carrier or service provider. */
export type DeliveryCarrierService = Node & {
  /** Services offered for given destinations. */
  availableServicesForCountries: Array<DeliveryAvailableService>;
  /** The properly formatted name of the service provider, ready to display. */
  formattedName?: Maybe<Scalars['String']>;
  /** The logo of the service provider. */
  icon: Image;
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** The name of the service provider. */
  name?: Maybe<Scalars['String']>;
};

/** Information about a carrier or service provider. */
export type DeliveryCarrierServiceAvailableServicesForCountriesArgs = {
  origins?: Maybe<Array<Scalars['ID']>>;
  countryCodes?: Maybe<Array<CountryCode>>;
  restOfWorld: Scalars['Boolean'];
};

/** A carrier services and their set of shop locations that can be used. */
export type DeliveryCarrierServiceAndLocations = {
  /** The carrier service. */
  carrierService: DeliveryCarrierService;
  /** The locations that support this carrier service. */
  locations: Array<Location>;
};

/** A condition that must pass for a method definition to be applied to an order. */
export type DeliveryCondition = Node & {
  /** The criteria (weight or price) that the field must meet based on the operator. */
  conditionCriteria: DeliveryConditionCriteria;
  /** The field to compare the criteria unit against, using the operator. */
  field: DeliveryConditionField;
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** The operator to compare the field and criteria. */
  operator: DeliveryConditionOperator;
};

/** The criteria (weight or price) that the field must meet based on the operator. */
export type DeliveryConditionCriteria = Weight | MoneyV2;

/** The field type that the condition will be applied to. */
export enum DeliveryConditionField {
  /** Condition will check against the total weight of the order. */
  TotalWeight = 'TOTAL_WEIGHT',
  /** Condition will check against the total price of the order. */
  TotalPrice = 'TOTAL_PRICE',
}

/** The operator to use to determine if the condition passes. */
export enum DeliveryConditionOperator {
  /** The condition will check if the field is greater than or equal to the criteria. */
  GreaterThanOrEqualTo = 'GREATER_THAN_OR_EQUAL_TO',
  /** The condition will check if the field is less than or equal to the criteria. */
  LessThanOrEqualTo = 'LESS_THAN_OR_EQUAL_TO',
}

/** A country that is used to define a zone. */
export type DeliveryCountry = Node & {
  /** The ISO 3166-1 alpha-2 country code of this country and a flag indicating Rest Of World. */
  code: DeliveryCountryCodeOrRestOfWorld;
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** The name of the country. */
  name: Scalars['String'];
  /** The regions associated with this country. */
  provinces: Array<DeliveryProvince>;
};

/** A country with the name of the zone. */
export type DeliveryCountryAndZone = {
  /** The country in the delivery zone. */
  country: DeliveryCountry;
  /** The name of the delivery zone. */
  zone: Scalars['String'];
};

/** The ISO 3166-1 alpha-2 country code and a flag indicating Rest Of World. */
export type DeliveryCountryCodeOrRestOfWorld = {
  /** The country code. */
  countryCode?: Maybe<CountryCode>;
  /** Indicates if 'Rest of World' is applied. */
  restOfWorld: Scalars['Boolean'];
};

/** A list of ISO 3166-1 alpha-2 country codes or the 'Rest of World'. */
export type DeliveryCountryCodesOrRestOfWorld = {
  /** List of applicable country codes. */
  countryCodes: Array<CountryCode>;
  /** Indicates if 'Rest of World' is applied. */
  restOfWorld: Scalars['Boolean'];
};

/** Input fields to specify a country. */
export type DeliveryCountryInput = {
  /** The country code of the country. */
  code?: Maybe<CountryCode>;
  /** Use Rest of World as the country. */
  restOfWorld?: Maybe<Scalars['Boolean']>;
  /** The regions associated with this country. */
  provinces?: Maybe<Array<DeliveryProvinceInput>>;
  /** Associate all available provinces with this country. */
  includeAllProvinces?: Maybe<Scalars['Boolean']>;
};

/**
 * Whether the shop is blocked from converting to full multi-location delivery
 * profiles mode. If the shop is blocked, then the blocking reasons are also returned.
 */
export type DeliveryLegacyModeBlocked = {
  /** Whether the shop can convert to full multi-location delivery profiles mode. */
  blocked: Scalars['Boolean'];
  /** The reasons why the shop is blocked from converting to full multi-location delivery profiles mode. */
  reasons?: Maybe<Array<DeliveryLegacyModeBlockedReason>>;
};

/** Reasons the shop is blocked from converting to full multi-location delivery profiles mode. */
export enum DeliveryLegacyModeBlockedReason {
  /** Multi-Location is disabled. */
  MultiLocationDisabled = 'MULTI_LOCATION_DISABLED',
  /** No locations that can fulfill online orders. */
  NoLocationsFulfillingOnlineOrders = 'NO_LOCATIONS_FULFILLING_ONLINE_ORDERS',
}

/** A location group is a collection of active locations that share zone and delivery methods across delivery profiles. */
export type DeliveryLocationGroup = Node & {
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** List of active locations that are part of this location group. */
  locations: LocationConnection;
};

/** A location group is a collection of active locations that share zone and delivery methods across delivery profiles. */
export type DeliveryLocationGroupLocationsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<LocationSortKeys>;
  query?: Maybe<Scalars['String']>;
  includeLegacy?: Maybe<Scalars['Boolean']>;
  includeInactive?: Maybe<Scalars['Boolean']>;
};

/** Links a location group and zone with the associated method definitions in a delivery profile. */
export type DeliveryLocationGroupZone = {
  /** The number of method definitions in this zone. */
  methodDefinitionCounts: DeliveryMethodDefinitionCounts;
  /** The method definitions associated to a zone and location group in a delivery profile. */
  methodDefinitions: DeliveryMethodDefinitionConnection;
  /** The zone associated to a location group in a delivery profile. */
  zone: DeliveryZone;
};

/** Links a location group and zone with the associated method definitions in a delivery profile. */
export type DeliveryLocationGroupZoneMethodDefinitionsArgs = {
  eligible?: Maybe<Scalars['Boolean']>;
  type?: Maybe<DeliveryMethodDefinitionType>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<MethodDefinitionSortKeys>;
};

export type DeliveryLocationGroupZoneConnection = {
  /** A list of edges. */
  edges: Array<DeliveryLocationGroupZoneEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type DeliveryLocationGroupZoneEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of DeliveryLocationGroupZoneEdge. */
  node: DeliveryLocationGroupZone;
};

/** Input fields for a delivery zone associated to a location group and profile. */
export type DeliveryLocationGroupZoneInput = {
  /** Globally unique identifier of the Zone. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the zone. */
  name?: Maybe<Scalars['String']>;
  /** Countries to associate with the zone. */
  countries?: Maybe<Array<DeliveryCountryInput>>;
  /** Method definitions to create. */
  methodDefinitionsToCreate?: Maybe<Array<DeliveryMethodDefinitionInput>>;
  /** Method definitions to update. */
  methodDefinitionsToUpdate?: Maybe<Array<DeliveryMethodDefinitionInput>>;
};

/** A method definition describes the delivery rate and the conditions that must be met for the method to be applied. */
export type DeliveryMethodDefinition = Node & {
  /** Whether this method definition is active. */
  active: Scalars['Boolean'];
  /** The description of the method definition. */
  description?: Maybe<Scalars['String']>;
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** The method conditions that must pass for this method definition to be applied to an order. */
  methodConditions: Array<DeliveryCondition>;
  /** The name of the method definition. */
  name: Scalars['String'];
  /** Provided rate for this method definition, from a rate definition or participant. */
  rateProvider: DeliveryRateProvider;
};

export type DeliveryMethodDefinitionConnection = {
  /** A list of edges. */
  edges: Array<DeliveryMethodDefinitionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Then number of method definitions in a zone, separated into merchant-owned and participant definitions. */
export type DeliveryMethodDefinitionCounts = {
  /** The number of participant method definitions in the current zone. */
  participantDefinitionsCount: Scalars['Int'];
  /** The number of merchant-defined method definitions in the current zone. */
  rateDefinitionsCount: Scalars['Int'];
};

export type DeliveryMethodDefinitionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of DeliveryMethodDefinitionEdge. */
  node: DeliveryMethodDefinition;
};

/** Input fields for a method definition. */
export type DeliveryMethodDefinitionInput = {
  /** Globally unique identifier of the method definition. Use only when updating a method definiton. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the method definition. */
  name?: Maybe<Scalars['String']>;
  /** The description of the method definition. */
  description?: Maybe<Scalars['String']>;
  /** Whether or not to use this method definition during rate calculation. */
  active?: Maybe<Scalars['Boolean']>;
  /** A rate definition to apply to the method definition. */
  rateDefinition?: Maybe<DeliveryRateDefinitionInput>;
  /** A participant to apply to the method definition. */
  participant?: Maybe<DeliveryParticipantInput>;
  /** Weight conditions on the method definition. */
  weightConditionsToCreate?: Maybe<Array<DeliveryWeightConditionInput>>;
  /** Price conditions on the method definition. */
  priceConditionsToCreate?: Maybe<Array<DeliveryPriceConditionInput>>;
  /** Conditions on the method definition to update. */
  conditionsToUpdate?: Maybe<Array<DeliveryUpdateConditionInput>>;
};

/** The different types of method definitions to filter by. */
export enum DeliveryMethodDefinitionType {
  /** Static mechant-defined rates. */
  Merchant = 'MERCHANT',
  /** Dynamic participant rates. */
  Participant = 'PARTICIPANT',
}

/** A carrier-defined rate with possible merchant-defined fixed fee or percentage-of-rate fee. */
export type DeliveryParticipant = Node & {
  /** Flag to indicate if new available services should be included. */
  adaptToNewServicesFlag: Scalars['Boolean'];
  /** Use this carrier service for this participant. */
  carrierService: DeliveryCarrierService;
  /** The merchant-set fixed fee for this participant. */
  fixedFee?: Maybe<MoneyV2>;
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** Services offered by the participant and their active status. */
  participantServices: Array<DeliveryParticipantService>;
  /** The merchant-set percentage-of-rate fee for this participant. */
  percentageOfRateFee: Scalars['Float'];
};

/** Input fields for a participant. */
export type DeliveryParticipantInput = {
  /** Globally unique identifier of the participant. */
  id?: Maybe<Scalars['ID']>;
  /** Global identifier of the carrier service. */
  carrierServiceId?: Maybe<Scalars['ID']>;
  /** The merchant-set fixed fee for this participant. */
  fixedFee?: Maybe<MoneyInput>;
  /** The merchant-set percentage-of-rate fee for this participant. */
  percentageOfRateFee?: Maybe<Scalars['Float']>;
  /** Services offered by the participant and their active status. */
  participantServices?: Maybe<Array<DeliveryParticipantServiceInput>>;
  /** Flag to indicate if new available services should be included. */
  adaptToNewServices?: Maybe<Scalars['Boolean']>;
};

/** A service provided by a participant. */
export type DeliveryParticipantService = {
  /** If the service is active or not. */
  active: Scalars['Boolean'];
  /** Name of the service. */
  name: Scalars['String'];
};

/** Input fields for a service provided by a participant. */
export type DeliveryParticipantServiceInput = {
  /** Name of the service. */
  name: Scalars['String'];
  /** If the service is active or not. */
  active: Scalars['Boolean'];
};

/** Input fields for the price-based conditions of a method definition. */
export type DeliveryPriceConditionInput = {
  /** The criteria for the price. */
  criteria?: Maybe<MoneyInput>;
  /** The operator to use for comparison. */
  operator?: Maybe<DeliveryConditionOperator>;
};

/** How many product variants are in a profile. This count is capped at 500. */
export type DeliveryProductVariantsCount = {
  /** If the count has reached the cap of 500. */
  capped: Scalars['Boolean'];
  /** The product variant count. */
  count: Scalars['Int'];
};

/** A profile for multi-location, per-product delivery. */
export type DeliveryProfile = Node & {
  /** The number of active shipping rates for the profile. */
  activeMethodDefinitionsCount: Scalars['Int'];
  /** Whether this is the default profile. */
  default: Scalars['Boolean'];
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** Whether this shop has enabled legacy compatibility mode for delivery profiles. */
  legacyMode: Scalars['Boolean'];
  /** The number of locations without rates defined. */
  locationsWithoutRatesCount: Scalars['Int'];
  /** The name of the delivery profile. */
  name: Scalars['String'];
  /** The number of active origin locations for the profile. */
  originLocationCount: Scalars['Int'];
  /**
   * The number of product variants for this profile. The count for the default profile is not supported and will return -1.
   * @deprecated Use `productVariantsCountV2` instead
   */
  productVariantsCount: Scalars['Int'];
  /** How many product variants are in this profile. */
  productVariantsCountV2: DeliveryProductVariantsCount;
  /** The products and variants associated with this profile. */
  profileItems: DeliveryProfileItemConnection;
  /** The location groups and associated zones using this profile. */
  profileLocationGroups: Array<DeliveryProfileLocationGroup>;
  /** List of locations that have not been assigned to a location group for this profile. */
  unassignedLocations: Array<Location>;
  /** The number of countries with active rates to deliver to. */
  zoneCountryCount: Scalars['Int'];
};

/** A profile for multi-location, per-product delivery. */
export type DeliveryProfileProfileItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<ProfileItemSortKeys>;
};

export type DeliveryProfileConnection = {
  /** A list of edges. */
  edges: Array<DeliveryProfileEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Return type for `deliveryProfileCreate` mutation. */
export type DeliveryProfileCreatePayload = {
  /** The delivery profile that was created. */
  profile?: Maybe<DeliveryProfile>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

export type DeliveryProfileEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of DeliveryProfileEdge. */
  node: DeliveryProfile;
};

/** Input fields for a delivery profile. */
export type DeliveryProfileInput = {
  /** The name of the profile. */
  name?: Maybe<Scalars['String']>;
  /** The location groups associated with the profile. */
  profileLocationGroups?: Maybe<Array<DeliveryProfileLocationGroupInput>>;
  /** The location groups to be created in the profile. */
  locationGroupsToCreate?: Maybe<Array<DeliveryProfileLocationGroupInput>>;
  /** The location groups to be updated in the profile. */
  locationGroupsToUpdate?: Maybe<Array<DeliveryProfileLocationGroupInput>>;
  /** The location groups to be deleted in the profile. */
  locationGroupsToDelete?: Maybe<Array<Scalars['ID']>>;
  /** The product variant ids to be associated with this profile. */
  variantsToAssociate?: Maybe<Array<Scalars['ID']>>;
  /** The product variant ids to be dissociated from this profile and returned to the default profile. */
  variantsToDissociate?: Maybe<Array<Scalars['ID']>>;
  /** Zones to delete. */
  zonesToDelete?: Maybe<Array<Scalars['ID']>>;
  /** Method definitions to delete. */
  methodDefinitionsToDelete?: Maybe<Array<Scalars['ID']>>;
  /** Conditions to delete. */
  conditionsToDelete?: Maybe<Array<Scalars['ID']>>;
};

/** A product and the subset of associated variants that are part of this delivery profile. */
export type DeliveryProfileItem = {
  /** A product associated with this profile. */
  product: Product;
  /** The product variants associated with this delivery profile. */
  variants: ProductVariantConnection;
};

/** A product and the subset of associated variants that are part of this delivery profile. */
export type DeliveryProfileItemVariantsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<ProductVariantSortKeys>;
};

export type DeliveryProfileItemConnection = {
  /** A list of edges. */
  edges: Array<DeliveryProfileItemEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type DeliveryProfileItemEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of DeliveryProfileItemEdge. */
  node: DeliveryProfileItem;
};

/** Links a location group with zones associated to a delivery profile. */
export type DeliveryProfileLocationGroup = {
  /** The countries already selected in any zone for the given location group and profile. */
  countriesInAnyZone: Array<DeliveryCountryAndZone>;
  /** The location group associated to a delivery profile. */
  locationGroup: DeliveryLocationGroup;
  /** The applicable zones associated to a location group and delivery profile. */
  locationGroupZones: DeliveryLocationGroupZoneConnection;
};

/** Links a location group with zones associated to a delivery profile. */
export type DeliveryProfileLocationGroupLocationGroupZonesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Input fields for a delivery location group associated to a profile. */
export type DeliveryProfileLocationGroupInput = {
  /** Globally unique identifier of the LocationGroup. */
  id?: Maybe<Scalars['ID']>;
  /** The location ids of the locations to be moved to this location group. */
  locations?: Maybe<Array<Scalars['ID']>>;
  /** Zones to create. */
  zonesToCreate?: Maybe<Array<DeliveryLocationGroupZoneInput>>;
  /** Zones to update. */
  zonesToUpdate?: Maybe<Array<DeliveryLocationGroupZoneInput>>;
};

/** Return type for `deliveryProfileRemove` mutation. */
export type DeliveryProfileRemovePayload = {
  /** The profile deletion job triggered by the mutation. */
  job?: Maybe<Job>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `deliveryProfileUpdate` mutation. */
export type DeliveryProfileUpdatePayload = {
  /** The delivery profile that was updated. */
  profile?: Maybe<DeliveryProfile>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** A region that is used to define a zone. */
export type DeliveryProvince = Node & {
  /** The code of this region. */
  code: Scalars['String'];
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** The name of the region. */
  name: Scalars['String'];
};

/** The input fields to specify a region. */
export type DeliveryProvinceInput = {
  /** The code of the region. */
  code: Scalars['String'];
};

/** The merchant-defined rate of the DeliveryMethodDefinition. */
export type DeliveryRateDefinition = Node & {
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** The price of this rate. */
  price: MoneyV2;
};

/** Input fields for a rate definition. */
export type DeliveryRateDefinitionInput = {
  /** Globally unique identifier of the rate definition. */
  id?: Maybe<Scalars['ID']>;
  /** The price of the rate definition. */
  price: MoneyInput;
};

/** Rate provided by a rate definition or a participant. */
export type DeliveryRateProvider = DeliveryRateDefinition | DeliveryParticipant;

/** Delivery shop-level settings. */
export type DeliverySetting = {
  /**
   * Whether the shop is blocked from converting to full multi-location delivery
   * profiles mode. If the shop is blocked, then the blocking reasons are also returned.
   */
  legacyModeBlocked: DeliveryLegacyModeBlocked;
  /** Enables legacy compatability mode for the multi-location delivery profiles feature. */
  legacyModeProfiles: Scalars['Boolean'];
};

/** Input fields for shop-level delivery settings. */
export type DeliverySettingInput = {
  /** Enables legacy compatability mode for the multi-location delivery profiles feature. */
  legacyModeProfiles?: Maybe<Scalars['Boolean']>;
};

/** Return type for `deliverySettingUpdate` mutation. */
export type DeliverySettingUpdatePayload = {
  /** The updated delivery shop level settings. */
  setting?: Maybe<DeliverySetting>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `deliveryShippingOriginAssign` mutation. */
export type DeliveryShippingOriginAssignPayload = {
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Input fields for updating the conditions of a method definition. */
export type DeliveryUpdateConditionInput = {
  /** Globally unique identifier of the condition. */
  id: Scalars['ID'];
  /** The value of the criteria of the condition. */
  criteria?: Maybe<Scalars['Float']>;
  /** The unit of the criteria of the condition. */
  criteriaUnit?: Maybe<Scalars['String']>;
  /** The field to use, either total_weight or total_price. */
  field?: Maybe<DeliveryConditionField>;
  /** The operator to use for comparison. */
  operator?: Maybe<DeliveryConditionOperator>;
};

/** Input fields for the weight-based conditions of a method definition. */
export type DeliveryWeightConditionInput = {
  /** The criteria for the weight. */
  criteria?: Maybe<WeightInput>;
  /** The operator to use for comparison. */
  operator?: Maybe<DeliveryConditionOperator>;
};

/** A zone is a geographical area that contains delivery methods within a delivery profile. */
export type DeliveryZone = Node & {
  /** The list of countries within the zone. */
  countries: Array<DeliveryCountry>;
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** The name of the zone. */
  name: Scalars['String'];
};

/** Digital wallet, such as Apple Pay, which can be used for accelerated checkouts. */
export enum DigitalWallet {
  /** Apple Pay. */
  ApplePay = 'APPLE_PAY',
  /** Android Pay. */
  AndroidPay = 'ANDROID_PAY',
  /** Google Pay. */
  GooglePay = 'GOOGLE_PAY',
  /** Shopify Pay. */
  ShopifyPay = 'SHOPIFY_PAY',
}

/** An amount discounting the line that has been allocated by an associated discount application. */
export type DiscountAllocation = {
  /**
   * Money amount allocated by the discount application.
   * @deprecated Use `allocatedAmountSet` instead
   */
  allocatedAmount: MoneyV2;
  /** Money amount allocated by the discount application in shop and presentment currencies. */
  allocatedAmountSet: MoneyBag;
  /** The discount of which this allocated amount originated from. */
  discountApplication: DiscountApplication;
};

/** The fixed amount value of a discount. */
export type DiscountAmount = {
  /** The value of the discount. */
  amount: MoneyV2;
  /**
   * If true, then the discount is applied to each of the entitled items. If false,
   * then the amount is split across all of the entitled items.
   */
  appliesOnEachItem: Scalars['Boolean'];
};

/** Specifies the value of the discount and how it is applied. */
export type DiscountAmountInput = {
  /** The value of the discount. */
  amount?: Maybe<Scalars['Decimal']>;
  /**
   * If true, then the discount is applied to each of the entitled items. If false,
   * then the amount is split across all of the entitled items.
   */
  appliesOnEachItem?: Maybe<Scalars['Boolean']>;
};

/**
 * Discount applications capture the intentions of a discount source at
 * the time of application on an order's line items or shipping lines.
 */
export type DiscountApplication = {
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethod;
  /**
   * An ordered index that can be used to identify the discount application and indicate the precedence
   * of the discount application for calculations.
   */
  index: Scalars['Int'];
  /** How the discount amount is distributed on the discounted lines. */
  targetSelection: DiscountApplicationTargetSelection;
  /** Whether the discount is applied on line items or shipping lines. */
  targetType: DiscountApplicationTargetType;
  /** The value of the discount application. */
  value: PricingValue;
};

/** The method by which the discount's value is allocated onto its entitled lines. */
export enum DiscountApplicationAllocationMethod {
  /** The value is spread across all entitled lines. */
  Across = 'ACROSS',
  /** The value is applied onto every entitled line. */
  Each = 'EACH',
  /** The value is specifically applied onto a particular line. */
  One = 'ONE',
}

export type DiscountApplicationConnection = {
  /** A list of edges. */
  edges: Array<DiscountApplicationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type DiscountApplicationEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of DiscountApplicationEdge. */
  node: DiscountApplication;
};

/**
 * Which lines on the order that the discount is allocated over, of the type
 * defined by the Discount Application's target_type.
 */
export enum DiscountApplicationTargetSelection {
  /** The discount is allocated onto all the lines. */
  All = 'ALL',
  /** The discount is allocated onto only the lines it is entitled for. */
  Entitled = 'ENTITLED',
  /** The discount is allocated onto explicitly chosen lines. */
  Explicit = 'EXPLICIT',
}

/** The type of line (i.e. line item or shipping line) on an order that the discount is applicable towards. */
export enum DiscountApplicationTargetType {
  /** The discount applies onto line items. */
  LineItem = 'LINE_ITEM',
  /** The discount applies onto shipping lines. */
  ShippingLine = 'SHIPPING_LINE',
}

/** An automatic discount. */
export type DiscountAutomatic = DiscountAutomaticBxgy | DiscountAutomaticBasic;

/** Return type for `discountAutomaticActivate` mutation. */
export type DiscountAutomaticActivatePayload = {
  /** The activated automatic discount. */
  automaticDiscountNode?: Maybe<DiscountAutomaticNode>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<DiscountUserError>;
};

/** An automatic basic discount. */
export type DiscountAutomaticBasic = {
  /** The date and time when the discount was created. */
  createdAt: Scalars['DateTime'];
  /** The qualifying items in an order, the quantity of each one, and the total value of the discount. */
  customerGets: DiscountCustomerGets;
  /** The date and time when the discount ends. For open-ended discounts, use `null`. */
  endsAt?: Maybe<Scalars['DateTime']>;
  /** The minimum subtotal or quantity that's required for the discount to be applied. */
  minimumRequirement: DiscountMinimumRequirement;
  /** A short summary of the discount. */
  shortSummary: Scalars['String'];
  /** The date and time when the discount starts. */
  startsAt: Scalars['DateTime'];
  /** The status of the discount. */
  status: DiscountStatus;
  /** A detailed summary of the discount. */
  summary: Scalars['String'];
  /** The title of the discount. */
  title: Scalars['String'];
  /**
   * The number of times that the discount has been used.
   * @deprecated Use `asyncUsageCount` instead
   */
  usageCount: Scalars['Int'];
};

/** Return type for `discountAutomaticBasicCreate` mutation. */
export type DiscountAutomaticBasicCreatePayload = {
  /** The created automatic discount. */
  automaticDiscountNode?: Maybe<DiscountAutomaticNode>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<DiscountUserError>;
};

/** Specifies input field to create or update automatic basic discount. */
export type DiscountAutomaticBasicInput = {
  /** The title of the discount. */
  title?: Maybe<Scalars['String']>;
  /** The date and time when the discount starts. */
  startsAt?: Maybe<Scalars['DateTime']>;
  /** The date and time when the discount ends. For open-ended discounts, use `null`. */
  endsAt?: Maybe<Scalars['DateTime']>;
  /** The minimum subtotal or quantity that's required for the discount to be applied. */
  minimumRequirement?: Maybe<DiscountMinimumRequirementInput>;
  /** The qualifying items in an order, the quantity of each one, and the total value of the discount. */
  customerGets?: Maybe<DiscountCustomerGetsInput>;
};

/** Return type for `discountAutomaticBasicUpdate` mutation. */
export type DiscountAutomaticBasicUpdatePayload = {
  /** The updated automatic discount. */
  automaticDiscountNode?: Maybe<DiscountAutomaticNode>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<DiscountUserError>;
};

/** Return type for `discountAutomaticBulkDelete` mutation. */
export type DiscountAutomaticBulkDeletePayload = {
  /** The asynchronous job removing the automatic discounts. */
  job?: Maybe<Job>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<DiscountUserError>;
};

/** An automatic BXGY discount. */
export type DiscountAutomaticBxgy = Node &
  HasEvents & {
    /** The date and time when the discount was created. */
    createdAt: Scalars['DateTime'];
    /** The qualifying items and the quantity of each one that the customer has to buy to be eligible for the discount. */
    customerBuys: DiscountCustomerBuys;
    /** The qualifying items in an order, the quantity of each one, and the total value of the discount. */
    customerGets: DiscountCustomerGets;
    /** The date and time when the discount ends. For open-ended discounts, use `null`. */
    endsAt?: Maybe<Scalars['DateTime']>;
    /** The paginated list of events associated with the host subject. */
    events: EventConnection;
    /**
     * A legacy unique identifier for the discount.
     * @deprecated Use DiscountAutomaticNode.id instead.
     */
    id: Scalars['ID'];
    /** The date and time when the discount starts. */
    startsAt: Scalars['DateTime'];
    /** The status of the discount. */
    status: DiscountStatus;
    /** A detailed summary of the discount. */
    summary: Scalars['String'];
    /** The title of the discount. */
    title: Scalars['String'];
    /**
     * The number of times that the discount has been used.
     * @deprecated Use `asyncUsageCount` instead
     */
    usageCount: Scalars['Int'];
    /** The maximum number of times that the discount can be applied to an order. */
    usesPerOrderLimit?: Maybe<Scalars['Int']>;
  };

/** An automatic BXGY discount. */
export type DiscountAutomaticBxgyEventsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<EventSortKeys>;
  query?: Maybe<Scalars['String']>;
};

/** Return type for `discountAutomaticBxgyCreate` mutation. */
export type DiscountAutomaticBxgyCreatePayload = {
  /** The created automatic discount. */
  automaticDiscountNode?: Maybe<DiscountAutomaticNode>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<DiscountUserError>;
};

/** Specifies input field to create or update automatic bogo discount. */
export type DiscountAutomaticBxgyInput = {
  /** The date and time when the discount starts. */
  startsAt?: Maybe<Scalars['DateTime']>;
  /** The date and time when the discount ends. For open-ended discounts, use `null`. */
  endsAt?: Maybe<Scalars['DateTime']>;
  /** The title of the discount. */
  title?: Maybe<Scalars['String']>;
  /** The maximum number of times that the discount can be applied to an order. */
  usesPerOrderLimit?: Maybe<Scalars['UnsignedInt64']>;
  /** The qualifying items and the quantity of each one that the customer has to buy to be eligible for the discount. */
  customerBuys?: Maybe<DiscountCustomerBuysInput>;
  /** The qualifying items in an order, the quantity of each one, and the total value of the discount. */
  customerGets?: Maybe<DiscountCustomerGetsInput>;
};

/** Return type for `discountAutomaticBxgyUpdate` mutation. */
export type DiscountAutomaticBxgyUpdatePayload = {
  /** The updated automatic discount. */
  automaticDiscountNode?: Maybe<DiscountAutomaticNode>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<DiscountUserError>;
};

export type DiscountAutomaticConnection = {
  /** A list of edges. */
  edges: Array<DiscountAutomaticEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Return type for `discountAutomaticDeactivate` mutation. */
export type DiscountAutomaticDeactivatePayload = {
  /** The deactivated automatic discount. */
  automaticDiscountNode?: Maybe<DiscountAutomaticNode>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<DiscountUserError>;
};

/** Return type for `discountAutomaticDelete` mutation. */
export type DiscountAutomaticDeletePayload = {
  /** The deleted automatic discount ID. */
  deletedAutomaticDiscountId?: Maybe<Scalars['ID']>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<DiscountUserError>;
};

export type DiscountAutomaticEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of DiscountAutomaticEdge. */
  node: DiscountAutomatic;
};

/** An automatic discount wrapper node. */
export type DiscountAutomaticNode = Node &
  HasEvents & {
    /** An automatic discount. */
    automaticDiscount: DiscountAutomatic;
    /** The paginated list of events associated with the host subject. */
    events: EventConnection;
    /** Globally unique identifier. */
    id: Scalars['ID'];
  };

/** An automatic discount wrapper node. */
export type DiscountAutomaticNodeEventsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<EventSortKeys>;
  query?: Maybe<Scalars['String']>;
};

export type DiscountAutomaticNodeConnection = {
  /** A list of edges. */
  edges: Array<DiscountAutomaticNodeEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type DiscountAutomaticNodeEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of DiscountAutomaticNodeEdge. */
  node: DiscountAutomaticNode;
};

/** A code discount. */
export type DiscountCode =
  | DiscountCodeBasic
  | DiscountCodeBxgy
  | DiscountCodeFreeShipping;

/** Return type for `discountCodeActivate` mutation. */
export type DiscountCodeActivatePayload = {
  /** The activated code discount. */
  codeDiscountNode?: Maybe<DiscountCodeNode>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<DiscountUserError>;
};

/**
 * Discount code applications capture the intentions of a discount code at
 * the time that it is applied onto an order.
 */
export type DiscountCodeApplication = DiscountApplication & {
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethod;
  /** The string identifying the discount code that was used at the time of application. */
  code: Scalars['String'];
  /**
   * An ordered index that can be used to identify the discount application and indicate the precedence
   * of the discount application for calculations.
   */
  index: Scalars['Int'];
  /** How the discount amount is distributed on the discounted lines. */
  targetSelection: DiscountApplicationTargetSelection;
  /** Whether the discount is applied on line items or shipping lines. */
  targetType: DiscountApplicationTargetType;
  /** The value of the discount application. */
  value: PricingValue;
};

/** A basic code discount. */
export type DiscountCodeBasic = {
  /** Whether the discount can be applied only once per customer. */
  appliesOncePerCustomer: Scalars['Boolean'];
  /** The number of times that the discount has been used. */
  asyncUsageCount: Scalars['Int'];
  /** The number of redeem codes for the discount. */
  codeCount: Scalars['Int'];
  /** A list of redeem codes for the discount. */
  codes: DiscountRedeemCodeConnection;
  /** The date and time when the discount was created. */
  createdAt: Scalars['DateTime'];
  /** The qualifying items in an order, the quantity of each one, and the total value of the discount. */
  customerGets: DiscountCustomerGets;
  /** The customers that can use the discount. */
  customerSelection: DiscountCustomerSelection;
  /** The date and time when the discount ends. For open-ended discounts, use `null`. */
  endsAt?: Maybe<Scalars['DateTime']>;
  /** The minimum subtotal or quantity that's required for the discount to be applied. */
  minimumRequirement?: Maybe<DiscountMinimumRequirement>;
  /** A short summary of the discount. */
  shortSummary: Scalars['String'];
  /** The date and time when the discount starts. */
  startsAt: Scalars['DateTime'];
  /** The status of the discount. */
  status: DiscountStatus;
  /** A detailed summary of the discount. */
  summary: Scalars['String'];
  /** The title of the discount. */
  title: Scalars['String'];
  /** The maximum number of times that the discount can be used. */
  usageLimit?: Maybe<Scalars['Int']>;
};

/** A basic code discount. */
export type DiscountCodeBasicCodesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Return type for `discountCodeBasicCreate` mutation. */
export type DiscountCodeBasicCreatePayload = {
  /** The created code discount. */
  codeDiscountNode?: Maybe<DiscountCodeNode>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<DiscountUserError>;
};

/** Specifies input field to create or update code basic discount. */
export type DiscountCodeBasicInput = {
  /** The title of the discount. */
  title?: Maybe<Scalars['String']>;
  /** The date and time when the discount starts. */
  startsAt?: Maybe<Scalars['DateTime']>;
  /** The date and time when the discount ends. For open-ended discounts, use `null`. */
  endsAt?: Maybe<Scalars['DateTime']>;
  /** The maximum number of times that the discount can be used. For open-ended discounts, use `null`. */
  usageLimit?: Maybe<Scalars['Int']>;
  /** Whether the discount can be applied only once per customer. */
  appliesOncePerCustomer?: Maybe<Scalars['Boolean']>;
  /** The minimum subtotal or quantity that's required for the discount to be applied. */
  minimumRequirement?: Maybe<DiscountMinimumRequirementInput>;
  /** The qualifying items in an order, the quantity of each one, and the total value of the discount. */
  customerGets?: Maybe<DiscountCustomerGetsInput>;
  /** The customers that can use the discount. */
  customerSelection?: Maybe<DiscountCustomerSelectionInput>;
  /** The code to use the discount. */
  code?: Maybe<Scalars['String']>;
};

/** Return type for `discountCodeBasicUpdate` mutation. */
export type DiscountCodeBasicUpdatePayload = {
  /** The updated code discount. */
  codeDiscountNode?: Maybe<DiscountCodeNode>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<DiscountUserError>;
};

/** A BXGY code discount. */
export type DiscountCodeBxgy = {
  /** Whether the discount can be applied only once per customer. */
  appliesOncePerCustomer: Scalars['Boolean'];
  /** The number of times that the discount has been used. */
  asyncUsageCount: Scalars['Int'];
  /** The number of redeem codes for the discount. */
  codeCount: Scalars['Int'];
  /** A list of redeem codes for the discount. */
  codes: DiscountRedeemCodeConnection;
  /** The date and time when the discount was created. */
  createdAt: Scalars['DateTime'];
  /** The qualifying items and the quantity of each one that the customer has to buy to be eligible for the discount. */
  customerBuys: DiscountCustomerBuys;
  /** The qualifying items in an order, the quantity of each one, and the total value of the discount. */
  customerGets: DiscountCustomerGets;
  /** The customers that can use the discount. */
  customerSelection: DiscountCustomerSelection;
  /** The date and time when the discount ends. For open-ended discounts, use `null`. */
  endsAt?: Maybe<Scalars['DateTime']>;
  /** The date and time when the discount starts. */
  startsAt: Scalars['DateTime'];
  /** The status of the discount. */
  status: DiscountStatus;
  /** A detailed summary of the discount. */
  summary: Scalars['String'];
  /** The title of the discount. */
  title: Scalars['String'];
  /** The maximum number of times that the discount can be used. */
  usageLimit?: Maybe<Scalars['Int']>;
  /** The maximum number of times that the discount can be applied to an order. */
  usesPerOrderLimit?: Maybe<Scalars['Int']>;
};

/** A BXGY code discount. */
export type DiscountCodeBxgyCodesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Return type for `discountCodeBxgyCreate` mutation. */
export type DiscountCodeBxgyCreatePayload = {
  /** The created code discount. */
  codeDiscountNode?: Maybe<DiscountCodeNode>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<DiscountUserError>;
};

/** Specifies input field to create or update a BXGY code discount. */
export type DiscountCodeBxgyInput = {
  /** The title of the discount. */
  title?: Maybe<Scalars['String']>;
  /** The date and time when the discount starts. */
  startsAt?: Maybe<Scalars['DateTime']>;
  /** The date and time when the discount ends. For open-ended discounts, use `null`. */
  endsAt?: Maybe<Scalars['DateTime']>;
  /** The qualifying items and the quantity of each one that the customer has to buy to be eligible for the discount. */
  customerBuys?: Maybe<DiscountCustomerBuysInput>;
  /** The qualifying items in an order, the quantity of each one, and the total value of the discount. */
  customerGets?: Maybe<DiscountCustomerGetsInput>;
  /** The customers that can use the discount. */
  customerSelection?: Maybe<DiscountCustomerSelectionInput>;
  /** The code to use the discount. */
  code?: Maybe<Scalars['String']>;
  /** The maximum number of times that the discount can be used. For open-ended discounts, use `null`. */
  usageLimit?: Maybe<Scalars['Int']>;
  /** The maximum number of times that the discount can be applied to an order. */
  usesPerOrderLimit?: Maybe<Scalars['Int']>;
  /** Whether the discount can be applied only once per customer. */
  appliesOncePerCustomer?: Maybe<Scalars['Boolean']>;
};

/** Return type for `discountCodeBxgyUpdate` mutation. */
export type DiscountCodeBxgyUpdatePayload = {
  /** The updated code discount. */
  codeDiscountNode?: Maybe<DiscountCodeNode>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<DiscountUserError>;
};

/** Return type for `discountCodeDeactivate` mutation. */
export type DiscountCodeDeactivatePayload = {
  /** The deactivated code discount. */
  codeDiscountNode?: Maybe<DiscountCodeNode>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<DiscountUserError>;
};

/** Return type for `discountCodeDelete` mutation. */
export type DiscountCodeDeletePayload = {
  /** The deleted code discount ID. */
  deletedCodeDiscountId?: Maybe<Scalars['ID']>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<DiscountUserError>;
};

/** A free shipping code discount. */
export type DiscountCodeFreeShipping = {
  /** Whether the discount can be applied only once per customer. */
  appliesOncePerCustomer: Scalars['Boolean'];
  /** The number of times that the discount has been used. */
  asyncUsageCount: Scalars['Int'];
  /** The number of redeem codes for the discount. */
  codeCount: Scalars['Int'];
  /** A list of redeem codes for the discount. */
  codes: DiscountRedeemCodeConnection;
  /** The date and time when the discount was created. */
  createdAt: Scalars['DateTime'];
  /** The customers that can use the discount. */
  customerSelection: DiscountCustomerSelection;
  /** A shipping destination that qualifies for the discount. */
  destinationSelection: DiscountShippingDestinationSelection;
  /** The date and time when the discount ends. For open-ended discounts, use `null`. */
  endsAt?: Maybe<Scalars['DateTime']>;
  /** The minimum subtotal or quantity that's required for the discount to be applied. */
  minimumRequirement?: Maybe<DiscountMinimumRequirement>;
  /** A short summary of the discount. */
  shortSummary: Scalars['String'];
  /** The date and time when the discount starts. */
  startsAt: Scalars['DateTime'];
  /** The status of the discount. */
  status: DiscountStatus;
  /** A detailed summary of the discount. */
  summary: Scalars['String'];
  /** The title of the discount. */
  title: Scalars['String'];
  /** The maximum number of times that the discount can be used. */
  usageLimit?: Maybe<Scalars['Int']>;
};

/** A free shipping code discount. */
export type DiscountCodeFreeShippingCodesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Return type for `discountCodeFreeShippingCreate` mutation. */
export type DiscountCodeFreeShippingCreatePayload = {
  /** The created code discount. */
  codeDiscountNode?: Maybe<DiscountCodeNode>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<DiscountUserError>;
};

/** Specifies input field to create or update free shipping code discount. */
export type DiscountCodeFreeShippingInput = {
  /** The title of the discount. */
  title?: Maybe<Scalars['String']>;
  /** The date and time when the discount starts. */
  startsAt?: Maybe<Scalars['DateTime']>;
  /** The date and time when the discount ends. For open-ended discounts, use `null`. */
  endsAt?: Maybe<Scalars['DateTime']>;
  /** The code to use the discount. */
  code?: Maybe<Scalars['String']>;
  /** The maximum number of times that the discount can be used. For open-ended discounts, use `null`. */
  usageLimit?: Maybe<Scalars['Int']>;
  /** Whether the discount can be applied only once per customer. */
  appliesOncePerCustomer?: Maybe<Scalars['Boolean']>;
  /** The minimum subtotal or quantity that's required for the discount to be applied. */
  minimumRequirement?: Maybe<DiscountMinimumRequirementInput>;
  /** The customers that can use the discount. */
  customerSelection?: Maybe<DiscountCustomerSelectionInput>;
  /** A list of destinations where the discount will apply. */
  destination?: Maybe<DiscountShippingDestinationSelectionInput>;
};

/** Return type for `discountCodeFreeShippingUpdate` mutation. */
export type DiscountCodeFreeShippingUpdatePayload = {
  /** The updated code discount. */
  codeDiscountNode?: Maybe<DiscountCodeNode>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<DiscountUserError>;
};

/** A code discount wrapper node. */
export type DiscountCodeNode = Node &
  HasEvents & {
    /** A code discount. */
    codeDiscount: DiscountCode;
    /** The paginated list of events associated with the host subject. */
    events: EventConnection;
    /** Globally unique identifier. */
    id: Scalars['ID'];
  };

/** A code discount wrapper node. */
export type DiscountCodeNodeEventsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<EventSortKeys>;
  query?: Maybe<Scalars['String']>;
};

export type DiscountCodeNodeConnection = {
  /** A list of edges. */
  edges: Array<DiscountCodeNodeEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type DiscountCodeNodeEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of DiscountCodeNodeEdge. */
  node: DiscountCodeNode;
};

/** The set of valid sort keys for the DiscountCode query. */
export enum DiscountCodeSortKeys {
  /** Sort by the `code` value. */
  Code = 'CODE',
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
}

/** A list of collections that the discount can have as a prerequisite or entitlement. */
export type DiscountCollections = {
  /** A list of collections that the discount can have as a prerequisite or entitlement. */
  collections: CollectionConnection;
};

/** A list of collections that the discount can have as a prerequisite or entitlement. */
export type DiscountCollectionsCollectionsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Specifies the collections attached to a discount. */
export type DiscountCollectionsInput = {
  /** Specifies list of collection ids to add. */
  add?: Maybe<Array<Scalars['ID']>>;
  /** Specifies list of collection ids to remove. */
  remove?: Maybe<Array<Scalars['ID']>>;
};

/** The shipping destination where the discount applies. */
export type DiscountCountries = {
  /** The codes for the countries where the discount can be used. */
  countries: Array<CountryCode>;
  /** Whether the discount is applicable to countries that have not been defined in the shop's shipping zones. */
  includeRestOfWorld: Scalars['Boolean'];
};

/** Specifies a list of countries to add or remove from the free shipping discount. */
export type DiscountCountriesInput = {
  /** The country codes to add to the list of countries where the discount applies. */
  add?: Maybe<Array<CountryCode>>;
  /** The country codes to remove from the list of countries where the discount applies. */
  remove?: Maybe<Array<CountryCode>>;
  /** Whether the discount code is applicable to countries that have not been defined in the shop's shipping zones. */
  includeRestOfWorld?: Maybe<Scalars['Boolean']>;
};

/** Whether the discount applies to all countries. */
export type DiscountCountryAll = {
  /** Always true when resolved to this type. */
  allCountries: Scalars['Boolean'];
};

/** Whether the discount applies to all customers. */
export type DiscountCustomerAll = {
  /** Always true when resolved to this type. */
  allCustomers: Scalars['Boolean'];
};

/** The prerequisite items and prerequisite value. */
export type DiscountCustomerBuys = {
  /** The items required for the discount to be applicable. */
  items: DiscountItems;
  /** The prerequisite value. */
  value: DiscountCustomerBuysValue;
};

/** Specifies the prerequisite items and prerequisite quantity. */
export type DiscountCustomerBuysInput = {
  /** The quantity of prerequisite items. */
  value?: Maybe<DiscountCustomerBuysValueInput>;
  /** The IDs of items that the customer buys. The items can be either collections or products. */
  items?: Maybe<DiscountItemsInput>;
};

/** The prerequisite quantity required for the discount to be applicable. */
export type DiscountCustomerBuysValue =
  | DiscountQuantity
  | DiscountPurchaseAmount;

/** Specifies the prerequisite quantity for the discount. */
export type DiscountCustomerBuysValueInput = {
  /** The quantity of prerequisite items. */
  quantity?: Maybe<Scalars['UnsignedInt64']>;
  /** The prerequisite purchase amount required for the discount to be applicable. */
  amount?: Maybe<Scalars['Decimal']>;
};

/** The qualifying items in an order, the quantity of each one, and the total value of the discount. */
export type DiscountCustomerGets = {
  /** The items to which the discount applies. */
  items: DiscountItems;
  /** Entitled quantity and the discount value. */
  value: DiscountCustomerGetsValue;
};

/** Specifies the items that will be discounted, the quantity of items that will be discounted, and the value of discount. */
export type DiscountCustomerGetsInput = {
  /** The quantity of items discounted and the discount value. */
  value?: Maybe<DiscountCustomerGetsValueInput>;
  /** The IDs of the items that the customer gets. The items can be either collections or products. */
  items?: Maybe<DiscountItemsInput>;
};

/** The value of the discount and how it will be applied. */
export type DiscountCustomerGetsValue =
  | DiscountOnQuantity
  | DiscountAmount
  | DiscountPercentage;

/** Specifies the quantity of items discounted and the discount value. */
export type DiscountCustomerGetsValueInput = {
  /** The quantity of the items that are discounted and the discount value. */
  discountOnQuantity?: Maybe<DiscountOnQuantityInput>;
  /** The percentage value of the discount. Value must be between 0.00 - 1.00. */
  percentage?: Maybe<Scalars['Float']>;
  /** The value of the discount. */
  discountAmount?: Maybe<DiscountAmountInput>;
};

/** A list of customers to whom the discount applies. */
export type DiscountCustomers = {
  /** A list of the customers that can use the discount. */
  customers: Array<Customer>;
};

/** A list of customer saved searches that contain the customers to whom the discount applies. */
export type DiscountCustomerSavedSearches = {
  /** A list of customer saved searches that contain the customers who can use the discount. */
  savedSearches: Array<SavedSearch>;
};

/** Specifies which customer saved searches to add to or remove from the discount. */
export type DiscountCustomerSavedSearchesInput = {
  /** A list of customer saved searches to add to the current list of customer saved searches. */
  add?: Maybe<Array<Scalars['ID']>>;
  /** A list of customer saved searches to remove from the current list of customer saved searches. */
  remove?: Maybe<Array<Scalars['ID']>>;
};

/** The selection of customers who can use this discount. */
export type DiscountCustomerSelection =
  | DiscountCustomerAll
  | DiscountCustomers
  | DiscountCustomerSavedSearches;

/** Specifies the customers who can use this discount. */
export type DiscountCustomerSelectionInput = {
  /** Whether all customers can use this discount. */
  all?: Maybe<Scalars['Boolean']>;
  /** The list of customer IDs to add or remove from the list of customers. */
  customers?: Maybe<DiscountCustomersInput>;
  /** The list of customer saved search IDs to add or remove from the list of customer saved searches. */
  customerSavedSearches?: Maybe<DiscountCustomerSavedSearchesInput>;
};

/** Specifies which customers to add to or remove from the discount. */
export type DiscountCustomersInput = {
  /** A list of customers to add to the current list of customers who can use the discount. */
  add?: Maybe<Array<Scalars['ID']>>;
  /** A list of customers to remove from the current list of customers who can use the discount. */
  remove?: Maybe<Array<Scalars['ID']>>;
};

/** The type of discount that will be applied. Currently, only percentage off is supported. */
export type DiscountEffect = DiscountPercentage;

/** Specifies how the discount will be applied. Currently, only percentage off is supported. */
export type DiscountEffectInput = {
  /** The percentage value of the discount. Value must be between 0.00 - 1.00. */
  percentage?: Maybe<Scalars['Float']>;
};

/** Possible error codes that could be returned by a discounts mutation. */
export enum DiscountErrorCode {
  /** Input value is blank. */
  Blank = 'BLANK',
  /** Input value is not present. */
  Present = 'PRESENT',
  /** Input value should be equal to allowed value. */
  EqualTo = 'EQUAL_TO',
  /** Input value should be greater than minimum allowed value. */
  GreaterThan = 'GREATER_THAN',
  /** Input value should be greater than or equal to minimum allowed value. */
  GreaterThanOrEqualTo = 'GREATER_THAN_OR_EQUAL_TO',
  /** Input value is invalid. */
  Invalid = 'INVALID',
  /** Input value should be less or equal to maximum allowed value. */
  LessThanOrEqualTo = 'LESS_THAN_OR_EQUAL_TO',
  /** Input value should be less than maximum allowed value. */
  LessThan = 'LESS_THAN',
  /** Input value is already taken. */
  Taken = 'TAKEN',
  /** Input value is too long. */
  TooLong = 'TOO_LONG',
  /** Input value is too short. */
  TooShort = 'TOO_SHORT',
  /** Unexpected internal error happened. */
  InternalError = 'INTERNAL_ERROR',
  /** Too many arguments provided. */
  TooManyArguments = 'TOO_MANY_ARGUMENTS',
  /** Missing a required argument. */
  MissingArgument = 'MISSING_ARGUMENT',
  /** Exceeded maximum allowed value. */
  ExceededMax = 'EXCEEDED_MAX',
  /** Cannot have both minimum subtotal and quantity present. */
  MinimumSubtotalAndQuantityRangeBothPresent = 'MINIMUM_SUBTOTAL_AND_QUANTITY_RANGE_BOTH_PRESENT',
  /** Value is outside allowed range. */
  ValueOutsideRange = 'VALUE_OUTSIDE_RANGE',
  /** Active period overlaps with other automatic discounts. At any given time, only one automatic discount can be active. */
  ActivePeriodOverlap = 'ACTIVE_PERIOD_OVERLAP',
  /** Attribute selection contains conflicting settings. */
  Conflict = 'CONFLICT',
  /** Value is already present through another selection. */
  ImplicitDuplicate = 'IMPLICIT_DUPLICATE',
  /** Input value is already present. */
  Duplicate = 'DUPLICATE',
}

/** Entitled or prerequisite items on a discount. An item could be either collection or product or product_variant. */
export type DiscountItems =
  | AllDiscountItems
  | DiscountProducts
  | DiscountCollections;

/** Specifies the items attached to a discount. */
export type DiscountItemsInput = {
  /** The products and product variants that are attached to a discount. */
  products?: Maybe<DiscountProductsInput>;
  /** The collections that are attached to a discount. */
  collections?: Maybe<DiscountCollectionsInput>;
  /** Whether all items should be selected. */
  all?: Maybe<Scalars['Boolean']>;
};

/** The minimum quantity of items required for the discount to apply. */
export type DiscountMinimumQuantity = {
  /** The minimum quantity of items that's required for the discount to be applied. */
  greaterThanOrEqualToQuantity: Scalars['UnsignedInt64'];
};

/** Specifies the quantity minimum requirements for a discount. */
export type DiscountMinimumQuantityInput = {
  /** The minimum quantity of items that's required for the discount to be applied. */
  greaterThanOrEqualToQuantity?: Maybe<Scalars['UnsignedInt64']>;
};

/** The minimum subtotal or quantity requirements for the discount. */
export type DiscountMinimumRequirement =
  | DiscountMinimumQuantity
  | DiscountMinimumSubtotal;

/** Specifies the quantity or subtotal minimum requirements for a discount. */
export type DiscountMinimumRequirementInput = {
  /** The minimum required quantity. */
  quantity?: Maybe<DiscountMinimumQuantityInput>;
  /** The minimum required subtotal. */
  subtotal?: Maybe<DiscountMinimumSubtotalInput>;
};

/** The minimum subtotal required for the discount to apply. */
export type DiscountMinimumSubtotal = {
  /** The minimum subtotal that's required for the discount to be applied. */
  greaterThanOrEqualToSubtotal: MoneyV2;
};

/** Specifies the subtotal minimum requirements for a discount. */
export type DiscountMinimumSubtotalInput = {
  /** The minimum subtotal that's required for the discount to be applied. */
  greaterThanOrEqualToSubtotal?: Maybe<Scalars['Decimal']>;
};

/** The quantity of items discounted, the discount value, and how the discount will be applied. */
export type DiscountOnQuantity = {
  /** The discount's effect on qualifying items. */
  effect: DiscountEffect;
  /** The number of items being discounted. */
  quantity: DiscountQuantity;
};

/** Specifies the quantity of items discounted and the discount value. */
export type DiscountOnQuantityInput = {
  /** The quantity of items that are discounted. */
  quantity?: Maybe<Scalars['UnsignedInt64']>;
  /** The percentage value of the discount. */
  effect?: Maybe<DiscountEffectInput>;
};

/** The percentage value of the discount. */
export type DiscountPercentage = {
  /** The percentage value of the discount. */
  percentage: Scalars['Float'];
};

/** The entitled or prerequisite products and product variants for a discount. */
export type DiscountProducts = {
  /** A list of product variants that the discount can have as a prerequisite or entitlement. */
  productVariants: ProductVariantConnection;
  /** A list of products that the discount can have as a prerequisite or entitlement. */
  products: ProductConnection;
};

/** The entitled or prerequisite products and product variants for a discount. */
export type DiscountProductsProductVariantsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** The entitled or prerequisite products and product variants for a discount. */
export type DiscountProductsProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Specifies the products and product variants attached to a discount. */
export type DiscountProductsInput = {
  /** Specifies list of product ids to add. */
  productsToAdd?: Maybe<Array<Scalars['ID']>>;
  /** Specifies list of product ids to remove. */
  productsToRemove?: Maybe<Array<Scalars['ID']>>;
  /** Specifies list of product variant ids to add. */
  productVariantsToAdd?: Maybe<Array<Scalars['ID']>>;
  /** Specifies list of product variant ids to remove. */
  productVariantsToRemove?: Maybe<Array<Scalars['ID']>>;
};

/** The prerequisite purchase amount required for the discount to be applicable. */
export type DiscountPurchaseAmount = {
  /** Decimal money amount. */
  amount: Scalars['Decimal'];
};

/** The quantity of items in discount. */
export type DiscountQuantity = {
  /** The quantity of items. */
  quantity: Scalars['UnsignedInt64'];
};

/** A redeem code for a code discount. */
export type DiscountRedeemCode = {
  /** The code of a discount. */
  code: Scalars['String'];
};

export type DiscountRedeemCodeConnection = {
  /** A list of edges. */
  edges: Array<DiscountRedeemCodeEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type DiscountRedeemCodeEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of DiscountRedeemCodeEdge. */
  node: DiscountRedeemCode;
};

/** The selection of shipping countries to which this discount applies. */
export type DiscountShippingDestinationSelection =
  | DiscountCountryAll
  | DiscountCountries;

/** Specifies the destinations where the free shipping discount will be applied. */
export type DiscountShippingDestinationSelectionInput = {
  /** Whether the discount code applies to all countries. */
  all?: Maybe<Scalars['Boolean']>;
  /** A list of countries where the discount code will apply. */
  countries?: Maybe<DiscountCountriesInput>;
};

/** The status of the discount. */
export enum DiscountStatus {
  /** The discount is active. */
  Active = 'ACTIVE',
  /** The discount is expired. */
  Expired = 'EXPIRED',
  /** The discount is scheduled. */
  Scheduled = 'SCHEDULED',
}

/** An error that occurs during the execution of a discount mutation. */
export type DiscountUserError = DisplayableError & {
  /** An error code to uniquely identify the error. */
  code?: Maybe<DiscountErrorCode>;
  /** Extra information about this error. */
  extraInfo?: Maybe<Scalars['String']>;
  /** Path to the input field which caused the error. */
  field?: Maybe<Array<Scalars['String']>>;
  /** The error message. */
  message: Scalars['String'];
};

/** Represents an error in the input of a mutation. */
export type DisplayableError = {
  /** Path to the input field which caused the error. */
  field?: Maybe<Array<Scalars['String']>>;
  /** The error message. */
  message: Scalars['String'];
};

/** The possible statuses of a dispute. */
export enum DisputeStatus {
  NeedsResponse = 'NEEDS_RESPONSE',
  UnderReview = 'UNDER_REVIEW',
  ChargeRefunded = 'CHARGE_REFUNDED',
  Accepted = 'ACCEPTED',
  Won = 'WON',
  Lost = 'LOST',
}

/** The possible types for a dispute. */
export enum DisputeType {
  /** The dispute has turned into a chargeback. */
  Chargeback = 'CHARGEBACK',
  /** The dispute is in the inquiry phase. */
  Inquiry = 'INQUIRY',
}

/** A unique string that represents the address of a Shopify store on the Internet. */
export type Domain = Node & {
  /** The host name of the domain (eg: `example.com`). */
  host: Scalars['String'];
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** Whether SSL is enabled or not. */
  sslEnabled: Scalars['Boolean'];
  /** The URL of the domain (eg: `https://example.com`). */
  url: Scalars['URL'];
};

/**
 * Returns unfulfilled line items grouped by their fulfillment service. Each draft
 * fulfillment contains additional information, such as whether the fulfillment
 * requires shipping and whether a shipping label can be printed for it.
 */
export type DraftFulfillment = {
  /** Whether a label can be purchased. */
  allowLabelPurchase: Scalars['Boolean'];
  /** The line items (which might correspond to a variant) that are part of this draft fulfillment. */
  lineItems: Array<LineItem>;
  /** Whether a fulfillment requires shipping. */
  requiresShipping: Scalars['Boolean'];
  /** The service responsible for fulfilling the fulfillment. */
  service: FulfillmentService;
};

/** Represents a draft order. Merchants can use draft orders to create orders on behalf of their customers. */
export type DraftOrder = Node &
  HasMetafields &
  CommentEventSubject &
  LegacyInteroperability &
  HasEvents & {
    /** Order-level discount applied to the draft order. */
    appliedDiscount?: Maybe<DraftOrderAppliedDiscount>;
    /** Billing address of the customer. */
    billingAddress?: Maybe<MailingAddress>;
    /**
     * Date and time when the draft order converted to a new order,
     * and the draft order's status changed to **Completed**.
     */
    completedAt?: Maybe<Scalars['DateTime']>;
    /** Date and time when the draft order was created in Shopify. */
    createdAt: Scalars['DateTime'];
    /** Three letter code for the currency of the store at the time that the invoice is sent. */
    currencyCode: CurrencyCode;
    /** Custom information added to the draft order on behalf of your customer. */
    customAttributes: Array<Attribute>;
    /** Customer who will be sent an invoice for the draft order, if there is one. */
    customer?: Maybe<Customer>;
    /** Email address of the customer, which is used to send notifications to. */
    email?: Maybe<Scalars['String']>;
    /** List of events associated with the draft order. */
    events: EventConnection;
    /** Whether the merchant has added timeline comments to the draft order. */
    hasTimelineComment: Scalars['Boolean'];
    /** Globally unique identifier. */
    id: Scalars['ID'];
    /** Date and time when the invoice was last emailed to the customer. */
    invoiceSentAt?: Maybe<Scalars['DateTime']>;
    /** Link to the checkout, which is sent to your customer in the invoice email. */
    invoiceUrl?: Maybe<Scalars['URL']>;
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars['UnsignedInt64'];
    /** List of the line items in the draft order. */
    lineItems: DraftOrderLineItemConnection;
    /** The metafield associated with the resource. */
    metafield?: Maybe<Metafield>;
    /** A paginated list of metafields associated with the resource. */
    metafields: MetafieldConnection;
    /** Unique identifier for the draft order, which is unique within the store. For example, _#D1223_. */
    name: Scalars['String'];
    /** Text from an optional note attached to the draft order. */
    note2?: Maybe<Scalars['String']>;
    /** Order that was created from this draft order. */
    order?: Maybe<Order>;
    /** Returns a private metafield found by namespace and key. */
    privateMetafield?: Maybe<PrivateMetafield>;
    /** List of private metafields. */
    privateMetafields: PrivateMetafieldConnection;
    /** Shipping mailing address of the customer. */
    shippingAddress?: Maybe<MailingAddress>;
    /** Line item that contains the shipping costs. */
    shippingLine?: Maybe<ShippingLine>;
    /** Status of the draft order. */
    status: DraftOrderStatus;
    /** Subtotal of the line items and their discounts (does not contain shipping charges or shipping discounts, or taxes). */
    subtotalPrice: Scalars['Money'];
    /** Tags added to the draft order. */
    tags: Array<Scalars['String']>;
    /** Whether the draft order is tax exempt. */
    taxExempt: Scalars['Boolean'];
    /** Total amount of taxes charged for each line item and shipping line. */
    taxLines: Array<TaxLine>;
    /** Whether the line item prices include taxes. */
    taxesIncluded: Scalars['Boolean'];
    /** Total amount of the draft order (includes taxes, shipping charges, and discounts). */
    totalPrice: Scalars['Money'];
    /** Total shipping charge for the draft order. */
    totalShippingPrice: Scalars['Money'];
    /** Total amount of taxes for the draft order. */
    totalTax: Scalars['Money'];
    /** Total weight (grams) of the draft order. */
    totalWeight: Scalars['UnsignedInt64'];
    /**
     * Date and time when the draft order was last changed.
     * The format is YYYY-MM-DD HH:mm:ss (for example, 2016-02-05 17:04:01).
     */
    updatedAt: Scalars['DateTime'];
  };

/** Represents a draft order. Merchants can use draft orders to create orders on behalf of their customers. */
export type DraftOrderEventsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<EventSortKeys>;
  query?: Maybe<Scalars['String']>;
};

/** Represents a draft order. Merchants can use draft orders to create orders on behalf of their customers. */
export type DraftOrderLineItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Represents a draft order. Merchants can use draft orders to create orders on behalf of their customers. */
export type DraftOrderMetafieldArgs = {
  namespace: Scalars['String'];
  key: Scalars['String'];
};

/** Represents a draft order. Merchants can use draft orders to create orders on behalf of their customers. */
export type DraftOrderMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Represents a draft order. Merchants can use draft orders to create orders on behalf of their customers. */
export type DraftOrderPrivateMetafieldArgs = {
  namespace: Scalars['String'];
  key: Scalars['String'];
};

/** Represents a draft order. Merchants can use draft orders to create orders on behalf of their customers. */
export type DraftOrderPrivateMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** The order-level discount applied to a draft order. */
export type DraftOrderAppliedDiscount = {
  /**
   * Amount of the order-level discount that is applied to the draft order.
   * @deprecated Use `amountV2` instead
   */
  amount: Scalars['Money'];
  /** Amount of money discounted. */
  amountV2: MoneyV2;
  /** Description of the order-level discount. */
  description: Scalars['String'];
  /** Name of the order-level discount. */
  title?: Maybe<Scalars['String']>;
  /**
   * Amount of the order level discount (when value_type is percentage,
   * the value in this field is the percentage discount).
   */
  value: Scalars['Float'];
  /** Type of the order-level discount. */
  valueType: DraftOrderAppliedDiscountType;
};

/** The input fields for applying an order-level discount to a draft order. */
export type DraftOrderAppliedDiscountInput = {
  /** The applied amount of the discount. */
  amount?: Maybe<Scalars['Money']>;
  /** Reason for the discount. */
  description?: Maybe<Scalars['String']>;
  /** Title of the discount. */
  title?: Maybe<Scalars['String']>;
  /**
   * The value of the discount.
   * If the type of the discount is fixed amount, then this is a fixed dollar amount.
   * If the type is percentage, then this is the percentage.
   */
  value: Scalars['Float'];
  /** The type of discount. */
  valueType: DraftOrderAppliedDiscountType;
};

/** The valid discount types that can be applied to a draft order. */
export enum DraftOrderAppliedDiscountType {
  /** A fixed amount in the store's currency. */
  FixedAmount = 'FIXED_AMOUNT',
  /** A percentage of the order subtotal. */
  Percentage = 'PERCENTAGE',
}

/** Return type for `draftOrderCalculate` mutation. */
export type DraftOrderCalculatePayload = {
  /** The calculated properties for a draft order. */
  calculatedDraftOrder?: Maybe<CalculatedDraftOrder>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `draftOrderComplete` mutation. */
export type DraftOrderCompletePayload = {
  /** The completed draft order. */
  draftOrder?: Maybe<DraftOrder>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

export type DraftOrderConnection = {
  /** A list of edges. */
  edges: Array<DraftOrderEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Return type for `draftOrderCreate` mutation. */
export type DraftOrderCreatePayload = {
  /** The created draft order. */
  draftOrder?: Maybe<DraftOrder>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Specifies the draft order to delete by its ID. */
export type DraftOrderDeleteInput = {
  /** The ID of the draft order to delete. */
  id: Scalars['ID'];
};

/** Return type for `draftOrderDelete` mutation. */
export type DraftOrderDeletePayload = {
  /** The ID of the deleted draft order. */
  deletedId?: Maybe<Scalars['ID']>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

export type DraftOrderEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of DraftOrderEdge. */
  node: DraftOrder;
};

/** The input fields used to create or update a draft order. */
export type DraftOrderInput = {
  /**
   * The discount that will be applied to the draft order.
   * A draft order line item can have one discount. A draft order can also have one order-level discount.
   */
  appliedDiscount?: Maybe<DraftOrderAppliedDiscountInput>;
  /** The mailing address associated with the payment method. */
  billingAddress?: Maybe<MailingAddressInput>;
  /** Customer associated with the draft order. */
  customerId?: Maybe<Scalars['ID']>;
  /** Extra information added to the customer. */
  customAttributes?: Maybe<Array<AttributeInput>>;
  /** The customer's email address. */
  email?: Maybe<Scalars['String']>;
  /**
   * Product variant line item or custom line item associated to the draft order.
   * Each draft order must include at least one line item.
   */
  lineItems?: Maybe<Array<DraftOrderLineItemInput>>;
  /** Metafields attached to the draft order. */
  metafields?: Maybe<Array<MetafieldInput>>;
  /** The private metafields attached to the draft order. */
  privateMetafields?: Maybe<Array<PrivateMetafieldInput>>;
  /** The text of an optional note that a shop owner can attach to the draft order. */
  note?: Maybe<Scalars['String']>;
  /** The mailing address to where the order will be shipped. */
  shippingAddress?: Maybe<MailingAddressInput>;
  /** A shipping line object, which details the shipping method used. */
  shippingLine?: Maybe<ShippingLineInput>;
  /**
   * Additional short descriptors, commonly used for filtering and searching,
   * formatted as a string of comma-separated values.
   */
  tags?: Maybe<Array<Scalars['String']>>;
  /**
   * Whether or not taxes are exempt for the draft order.
   * If false, then Shopify will refer to the taxable field for each line item.
   * If a customer is applied to the draft order, then Shopify will use the customer's tax exempt field instead.
   */
  taxExempt?: Maybe<Scalars['Boolean']>;
  /** Sent as part of a draft order object to load customer shipping information. */
  useCustomerDefaultAddress?: Maybe<Scalars['Boolean']>;
};

/** Return type for `draftOrderInvoicePreview` mutation. */
export type DraftOrderInvoicePreviewPayload = {
  /** HTML to preview the draft order invoice email. */
  previewHtml?: Maybe<Scalars['HTML']>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `draftOrderInvoiceSend` mutation. */
export type DraftOrderInvoiceSendPayload = {
  /** The draft order an invoice email is sent for. */
  draftOrder?: Maybe<DraftOrder>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Represents a line item included in a draft order. */
export type DraftOrderLineItem = Node & {
  /** Discount which will be applied to the line item or the overall order. */
  appliedDiscount?: Maybe<DraftOrderAppliedDiscount>;
  /**
   * Whether this is a product variant line item, or a custom line item.
   * If set to true indicates a custom line item. If set to false indicates a product variant line item.
   */
  custom: Scalars['Boolean'];
  /** List of additional information (metafields) about the line item. */
  customAttributes: Array<Attribute>;
  /** Line item price after discounts are applied. */
  discountedTotal: Scalars['Money'];
  /** The `discountedTotal` divided by `quantity`, resulting in the value of the discount per unit. */
  discountedUnitPrice: Scalars['Money'];
  /**
   * Name of the service provider who fulfilled the order.
   *
   * Valid values are either **manual** or the name of the provider.
   * For example, **amazon**, **shipwire**.
   */
  fulfillmentService: FulfillmentService;
  /**
   * Weight in grams. Can only be specified if this is a custom line item.
   * @deprecated Use `weight` instead
   */
  grams?: Maybe<Scalars['Int']>;
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** Image associated with the draft order line item. */
  image?: Maybe<Image>;
  /** Whether the line item represents the puchase of a gift card. */
  isGiftCard: Scalars['Boolean'];
  /** Name of the product. */
  name: Scalars['String'];
  /** Total price (without discounts) of the line item, based on the original unit price of the variant x quantity. */
  originalTotal: Scalars['Money'];
  /** Variant price without any discounts applied. */
  originalUnitPrice: Scalars['Money'];
  /** The product corresponding to the line item’s product variant. */
  product?: Maybe<Product>;
  /** Number of variant items requested in the draft order. */
  quantity: Scalars['Int'];
  /** Whether physical shipping is required for the variant. */
  requiresShipping: Scalars['Boolean'];
  /** Variant SKU number. */
  sku?: Maybe<Scalars['String']>;
  /** A list of tax line objects, each of which details the total taxes applicable to the order. */
  taxLines: Array<TaxLine>;
  /** Whether the variant is taxable. */
  taxable: Scalars['Boolean'];
  /** Title of the product or variant (this field only applies to custom line items). */
  title: Scalars['String'];
  /** Total value of the discount applied to the line item. */
  totalDiscount: Scalars['Money'];
  /** Associated variant for the line item. */
  variant?: Maybe<ProductVariant>;
  /** Name of the variant. */
  variantTitle?: Maybe<Scalars['String']>;
  /** Name of the vendor who made the variant. */
  vendor?: Maybe<Scalars['String']>;
  /** Weight unit and value for a draft order line item. */
  weight?: Maybe<Weight>;
};

/** Represents a line item included in a draft order. */
export type DraftOrderLineItemImageArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  crop?: Maybe<CropRegion>;
  scale?: Maybe<Scalars['Int']>;
};

export type DraftOrderLineItemConnection = {
  /** A list of edges. */
  edges: Array<DraftOrderLineItemEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type DraftOrderLineItemEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of DraftOrderLineItemEdge. */
  node: DraftOrderLineItem;
};

/** The input fields used to create a line item for a draft order. */
export type DraftOrderLineItemInput = {
  /** Discount which will be applied to the line item. */
  appliedDiscount?: Maybe<DraftOrderAppliedDiscountInput>;
  /** Represents a generic custom attribute using a key value pair. */
  customAttributes?: Maybe<Array<AttributeInput>>;
  /** Ignored when variant ID is provided. This argument is deprecated: Use `weight` instead. */
  grams?: Maybe<Scalars['Int']>;
  /** Ignored when variant ID is provided. */
  originalUnitPrice?: Maybe<Scalars['Money']>;
  /** The number of products that were purchased. */
  quantity: Scalars['Int'];
  /** Ignored when variant ID is provided. */
  requiresShipping?: Maybe<Scalars['Boolean']>;
  /** Ignored when variant ID is provided. */
  sku?: Maybe<Scalars['String']>;
  /** Ignored when variant ID is provided. */
  taxable?: Maybe<Scalars['Boolean']>;
  /** Ignored when variant ID is provided. */
  title?: Maybe<Scalars['String']>;
  /**
   * The ID of the product variant corresponding to the line item.
   * Null if custom line item. Required if product variant line item.
   */
  variantId?: Maybe<Scalars['ID']>;
  /**
   * Specifies the weight unit and value inputs.
   * Ignored when variant ID or product ID are provided.
   */
  weight?: Maybe<WeightInput>;
};

/** The set of valid sort keys for the DraftOrder query. */
export enum DraftOrderSortKeys {
  /** Sort by the `number` value. */
  Number = 'NUMBER',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
  /** Sort by the `status` value. */
  Status = 'STATUS',
  /** Sort by the `total_price` value. */
  TotalPrice = 'TOTAL_PRICE',
  /** Sort by the `customer_name` value. */
  CustomerName = 'CUSTOMER_NAME',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
}

/** The valid statuses for a draft order. */
export enum DraftOrderStatus {
  /** The draft order has been paid. */
  Completed = 'COMPLETED',
  /** An invoice for the draft order has been sent to the customer. */
  InvoiceSent = 'INVOICE_SENT',
  /** The draft order is open. It has not been paid, and an invoice hasn't been sent. */
  Open = 'OPEN',
}

/** Return type for `draftOrderUpdate` mutation. */
export type DraftOrderUpdatePayload = {
  /** The updated draft order. */
  draftOrder?: Maybe<DraftOrder>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Represents a single duty for a line item. */
export type Duty = Node & {
  /** The ISO code of the country of origin of the line item. */
  countryCodeOfOrigin?: Maybe<CountryCode>;
  /** The harmonized system code of the line item. */
  harmonizedSystemCode?: Maybe<Scalars['String']>;
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** The price of the duty for the line item. */
  price: MoneyBag;
  /** The TaxLine objects connected to the duty for the line item. */
  taxLines: Array<TaxLine>;
};

/** The attribute editable information. */
export type EditableProperty = {
  /** Whether the attribute is locked for editing. */
  locked: Scalars['Boolean'];
  /** The reason the attribute is locked for editing. */
  reason?: Maybe<Scalars['FormattedString']>;
};

/** Specifies the fields for an email. */
export type EmailInput = {
  /** Specifies the email subject. */
  subject?: Maybe<Scalars['String']>;
  /** Specifies the email recipient. */
  to?: Maybe<Scalars['String']>;
  /** Specifies the email sender. */
  from?: Maybe<Scalars['String']>;
  /** Specifies the email body. */
  body?: Maybe<Scalars['String']>;
  /** Specifies any bcc recipients for the email. */
  bcc?: Maybe<Array<Scalars['String']>>;
  /** Specifies a custom message to include in the email. */
  customMessage?: Maybe<Scalars['String']>;
};

/**
 * Events chronicle resource activities such as the creation of an article, the fulfillment of an order, or the
 * addition of a product.
 */
export type Event = {
  /** The name of the app that created the event. Returns null when the event originates from the Shopify admin. */
  appTitle?: Maybe<Scalars['String']>;
  /** Whether the event was created by an app. */
  attributeToApp: Scalars['Boolean'];
  /** Whether the event was caused by an admin user. */
  attributeToUser: Scalars['Boolean'];
  /** The date and time when the event was created. */
  createdAt: Scalars['DateTime'];
  /** Whether the event is critical. */
  criticalAlert: Scalars['Boolean'];
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** Human readable text that describes the event. */
  message: Scalars['FormattedString'];
};

export type EventConnection = {
  /** A list of edges. */
  edges: Array<EventEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type EventEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of EventEdge. */
  node: Event;
};

/** The set of valid sort keys for the Event query. */
export enum EventSortKeys {
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
}

/** Represents a video hosted outside of Shopify. */
export type ExternalVideo = Node &
  Media & {
    /** A word or phrase to share the nature or contents of a media. */
    alt?: Maybe<Scalars['String']>;
    /** The URL. */
    embeddedUrl: Scalars['URL'];
    /** Globally unique identifier. */
    id: Scalars['ID'];
    /** The media content type. */
    mediaContentType: MediaContentType;
    /** Any errors which have occurred on the media. */
    mediaErrors: Array<MediaError>;
    /** The preview image for the media. */
    preview?: Maybe<MediaPreviewImage>;
    /** Current status of the media. */
    status: MediaStatus;
  };

/** Requirements that must be met before an app can be installed. */
export type FailedRequirement = {
  /** Action to be taken to resolve a failed requirement, including URL link. */
  action?: Maybe<NavigationItem>;
  /**
   * A concise set of copy strings to be displayed to merchants, to guide them in resolving problems your app
   * encounters when trying to make use of their Shop and its resources.
   */
  message: Scalars['String'];
};

/** A filter option is one possible value in a search filter. */
export type FilterOption = {
  /** The filter option's label for display purposes. */
  label: Scalars['String'];
  /** The filter option's value. */
  value: Scalars['String'];
};

/** Return type for `flowTriggerReceive` mutation. */
export type FlowTriggerReceivePayload = {
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/**
 * Represents a fulfillment. In Shopify, a fulfillment represents a shipment of one
 * or more items in an order. When an order has been completely fulfilled, it means
 * that all the items that are included in the order have been sent to the
 * customer. There can be more than one fulfillment for an order.
 */
export type Fulfillment = LegacyInteroperability &
  Node & {
    /** The date and time when the fulfillment was created. */
    createdAt: Scalars['DateTime'];
    /** The date that this fulfillment was delivered. */
    deliveredAt?: Maybe<Scalars['DateTime']>;
    /** Human readable display status for this fulfillment. */
    displayStatus?: Maybe<FulfillmentDisplayStatus>;
    /** The estimated date that this fulfillment will arrive. */
    estimatedDeliveryAt?: Maybe<Scalars['DateTime']>;
    /** The history of events associated with this fulfillment. */
    events: FulfillmentEventConnection;
    /** List of the fulfillment's line items. */
    fulfillmentLineItems: FulfillmentLineItemConnection;
    /** A list of fulfillment orders for the fulfillment. */
    fulfillmentOrders: FulfillmentOrderConnection;
    /** Globally unique identifier. */
    id: Scalars['ID'];
    /** The date and time when the fulfillment went into transit. */
    inTransitAt?: Maybe<Scalars['DateTime']>;
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars['UnsignedInt64'];
    /** The location that the fulfillment was processed at. */
    location?: Maybe<Location>;
    /** Human readable reference identifier for this fulfillment. */
    name: Scalars['String'];
    /** The order for which the fulfillment was created. */
    order: Order;
    /** Whether any of the line items in the fulfillment require shipping. */
    requiresShipping: Scalars['Boolean'];
    /** Fulfillment service associated with the fulfillment. */
    service?: Maybe<FulfillmentService>;
    /** The status of the fulfillment. */
    status: FulfillmentStatus;
    /** Sum of all line item quantities for the fulfillment. */
    totalQuantity: Scalars['Int'];
    /**
     * Tracking information associated with the fulfillment,
     * such as the tracking company, tracking number, and tracking URL.
     */
    trackingInfo: Array<FulfillmentTrackingInfo>;
    /** The date and time when the fulfillment was last modified. */
    updatedAt: Scalars['DateTime'];
  };

/**
 * Represents a fulfillment. In Shopify, a fulfillment represents a shipment of one
 * or more items in an order. When an order has been completely fulfilled, it means
 * that all the items that are included in the order have been sent to the
 * customer. There can be more than one fulfillment for an order.
 */
export type FulfillmentEventsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<FulfillmentEventSortKeys>;
};

/**
 * Represents a fulfillment. In Shopify, a fulfillment represents a shipment of one
 * or more items in an order. When an order has been completely fulfilled, it means
 * that all the items that are included in the order have been sent to the
 * customer. There can be more than one fulfillment for an order.
 */
export type FulfillmentFulfillmentLineItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/**
 * Represents a fulfillment. In Shopify, a fulfillment represents a shipment of one
 * or more items in an order. When an order has been completely fulfilled, it means
 * that all the items that are included in the order have been sent to the
 * customer. There can be more than one fulfillment for an order.
 */
export type FulfillmentFulfillmentOrdersArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/**
 * Represents a fulfillment. In Shopify, a fulfillment represents a shipment of one
 * or more items in an order. When an order has been completely fulfilled, it means
 * that all the items that are included in the order have been sent to the
 * customer. There can be more than one fulfillment for an order.
 */
export type FulfillmentTrackingInfoArgs = {
  first?: Maybe<Scalars['Int']>;
};

/** Return type for `fulfillmentCancel` mutation. */
export type FulfillmentCancelPayload = {
  /** The canceled fulfillment. */
  fulfillment?: Maybe<Fulfillment>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

export type FulfillmentConnection = {
  /** A list of edges. */
  edges: Array<FulfillmentEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Return type for `fulfillmentCreate` mutation. */
export type FulfillmentCreatePayload = {
  /** The created fulfillment. */
  fulfillment?: Maybe<Fulfillment>;
  /** The order for which the fulfillment is created. */
  order?: Maybe<Order>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `fulfillmentCreateV2` mutation. */
export type FulfillmentCreateV2Payload = {
  /** The created fulfillment. */
  fulfillment?: Maybe<Fulfillment>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** The display status of a fulfillment. */
export enum FulfillmentDisplayStatus {
  /** Displayed as **Attempted delivery**. */
  AttemptedDelivery = 'ATTEMPTED_DELIVERY',
  /** Displayed as **Canceled**. */
  Canceled = 'CANCELED',
  /** Displayed as **Confirmed**. */
  Confirmed = 'CONFIRMED',
  /** Displayed as **Delivered**. */
  Delivered = 'DELIVERED',
  /** Displayed as **Failure**. */
  Failure = 'FAILURE',
  /** Displayed as **Fulfilled**. */
  Fulfilled = 'FULFILLED',
  /** Displayed as **In transit**. */
  InTransit = 'IN_TRANSIT',
  /** Displayed as **Label printed**. */
  LabelPrinted = 'LABEL_PRINTED',
  /** Displayed as **Label purchased**. */
  LabelPurchased = 'LABEL_PURCHASED',
  /** Displayed as **Label voided**. */
  LabelVoided = 'LABEL_VOIDED',
  /** Displayed as **Marked as fulfilled**. */
  MarkedAsFulfilled = 'MARKED_AS_FULFILLED',
  /** Displayed as **Not delivered**. */
  NotDelivered = 'NOT_DELIVERED',
  /** Displayed as **Out for delivery**. */
  OutForDelivery = 'OUT_FOR_DELIVERY',
  /** Displayed as **Ready for pickup**. */
  ReadyForPickup = 'READY_FOR_PICKUP',
  /** Displayed as **Submitted**. */
  Submitted = 'SUBMITTED',
}

export type FulfillmentEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of FulfillmentEdge. */
  node: Fulfillment;
};

/** An event that describes a fulfillment at a time. */
export type FulfillmentEvent = Node & {
  /** The time at which this fulfillment event happened. */
  happenedAt: Scalars['DateTime'];
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** The status of this fulfillment event. */
  status: FulfillmentEventStatus;
};

export type FulfillmentEventConnection = {
  /** A list of edges. */
  edges: Array<FulfillmentEventEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type FulfillmentEventEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of FulfillmentEventEdge. */
  node: FulfillmentEvent;
};

/** The set of valid sort keys for the FulfillmentEvent query. */
export enum FulfillmentEventSortKeys {
  /** Sort by the `happened_at` value. */
  HappenedAt = 'HAPPENED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
}

/** Event status' describe the status of a fulfillment. */
export enum FulfillmentEventStatus {
  /** A shipping label has been purchased. */
  LabelPurchased = 'LABEL_PURCHASED',
  /** A purchased shipping label has been printed. */
  LabelPrinted = 'LABEL_PRINTED',
  /** The fulfillment is ready to be picked up. */
  ReadyForPickup = 'READY_FOR_PICKUP',
  /** The fulfillment is confirmed. */
  Confirmed = 'CONFIRMED',
  /** The fulfillment is in transit. */
  InTransit = 'IN_TRANSIT',
  /** The fulfillment is out for delivery. */
  OutForDelivery = 'OUT_FOR_DELIVERY',
  /** A delivery was attempted. */
  AttemptedDelivery = 'ATTEMPTED_DELIVERY',
  /** The fulfillment was successfully delivered. */
  Delivered = 'DELIVERED',
  /** The fulfillment request failed. */
  Failure = 'FAILURE',
}

/** The input fields used to create a fulfillment. */
export type FulfillmentInput = {
  /** The ID of the order to be fulfilled. */
  orderId: Scalars['ID'];
  /** The line items to be fulfilled. */
  lineItems?: Maybe<Array<FulfillmentLineItemInput>>;
  /** Tracking numbers associated with the fulfillment. */
  trackingNumbers?: Maybe<Array<Scalars['String']>>;
  /** The URLs to track the fulfillment. */
  trackingUrls?: Maybe<Array<Scalars['String']>>;
  /** The name of the tracking company. */
  trackingCompany?: Maybe<Scalars['String']>;
  /**
   * Whether the customer is notified.
   * If set to true, a notification is sent when the fulfillment is created.
   */
  notifyCustomer?: Maybe<Scalars['Boolean']>;
  /** A reference to the shipping method, such as `Free Shipping`. */
  shippingMethod?: Maybe<Scalars['String']>;
  /** The ID of the location from which the items will be fulfilled. */
  locationId: Scalars['ID'];
};

/** Represents a line item from an order that's included in a fulfillment. */
export type FulfillmentLineItem = Node & {
  /**
   * The total price after discounts are applied.
   * @deprecated Use `discountedTotalSet` instead
   */
  discountedTotal: Scalars['Money'];
  /** The total price after discounts are applied in shop and presentment currencies. */
  discountedTotalSet: MoneyBag;
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** The associated order's line item. */
  lineItem: LineItem;
  /**
   * The total price before discounts are applied.
   * @deprecated Use `originalTotalSet` instead
   */
  originalTotal: Scalars['Money'];
  /** The total price before discounts are applied in shop and presentment currencies. */
  originalTotalSet: MoneyBag;
  /** Number of line items in the fulfillment. */
  quantity?: Maybe<Scalars['Int']>;
};

export type FulfillmentLineItemConnection = {
  /** A list of edges. */
  edges: Array<FulfillmentLineItemEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type FulfillmentLineItemEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of FulfillmentLineItemEdge. */
  node: FulfillmentLineItem;
};

/** The input fields used to include a line item from an order in a fulfillment. */
export type FulfillmentLineItemInput = {
  /** The ID of the line item. */
  id: Scalars['ID'];
  /** The quantity of the line item to be fulfilled. */
  quantity?: Maybe<Scalars['Int']>;
};

/**
 * Represents a fulfillment order. In Shopify, a fulfillment order represents a group of one or more items
 * in an order that are to be fulfilled from the same location. There can be more than one fulfillment order
 * for an order at a given location.
 */
export type FulfillmentOrder = Node & {
  /** The fulfillment order's assigned location. This is the location expected to perform fulfillment. */
  assignedLocation: FulfillmentOrderAssignedLocation;
  /** The destination where the items should be sent. */
  destination?: Maybe<FulfillmentOrderDestination>;
  /** A list of fulfillments for the fulfillment order. */
  fulfillments: FulfillmentConnection;
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** A list of the fulfillment order's line items. */
  lineItems: FulfillmentOrderLineItemConnection;
  /** A list of locations that the fulfillment order can potentially move to. */
  locationsForMove: FulfillmentOrderLocationForMoveConnection;
  /** A list of requests sent by the merchant to the fulfillment service for this fulfillment order. */
  merchantRequests: FulfillmentOrderMerchantRequestConnection;
  /** The order that's associated with the fulfillment order. */
  order: Order;
  /** The request status of the fulfillment order. */
  requestStatus: FulfillmentOrderRequestStatus;
  /** The status of the fulfillment order. */
  status: FulfillmentOrderStatus;
  /** The actions that can be performed on this fulfillment order. */
  supportedActions: Array<FulfillmentOrderSupportedAction>;
};

/**
 * Represents a fulfillment order. In Shopify, a fulfillment order represents a group of one or more items
 * in an order that are to be fulfilled from the same location. There can be more than one fulfillment order
 * for an order at a given location.
 */
export type FulfillmentOrderFulfillmentsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/**
 * Represents a fulfillment order. In Shopify, a fulfillment order represents a group of one or more items
 * in an order that are to be fulfilled from the same location. There can be more than one fulfillment order
 * for an order at a given location.
 */
export type FulfillmentOrderLineItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/**
 * Represents a fulfillment order. In Shopify, a fulfillment order represents a group of one or more items
 * in an order that are to be fulfilled from the same location. There can be more than one fulfillment order
 * for an order at a given location.
 */
export type FulfillmentOrderLocationsForMoveArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/**
 * Represents a fulfillment order. In Shopify, a fulfillment order represents a group of one or more items
 * in an order that are to be fulfilled from the same location. There can be more than one fulfillment order
 * for an order at a given location.
 */
export type FulfillmentOrderMerchantRequestsArgs = {
  kind?: Maybe<FulfillmentOrderMerchantRequestKind>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Return type for `fulfillmentOrderAcceptCancellationRequest` mutation. */
export type FulfillmentOrderAcceptCancellationRequestPayload = {
  /** The fulfillment order whose cancellation request was accepted. */
  fulfillmentOrder?: Maybe<FulfillmentOrder>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `fulfillmentOrderAcceptFulfillmentRequest` mutation. */
export type FulfillmentOrderAcceptFulfillmentRequestPayload = {
  /** The fulfillment order whose fulfillment request was accepted. */
  fulfillmentOrder?: Maybe<FulfillmentOrder>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** The actions that can be taken on a fulfillment order. */
export enum FulfillmentOrderAction {
  /**
   * Create a fulfillment for selected line items in the fulfillment order. The
   * corresponding mutation for this action is FulfillmentCreateV2.
   */
  CreateFulfillment = 'CREATE_FULFILLMENT',
  /**
   * Send a request for fulfilling selected line items in a fulfillment order to a
   * fulfillment service. The corresponding mutation for this action is
   * FulfillmentOrderSubmitFulfillmentRequest.
   */
  RequestFulfillment = 'REQUEST_FULFILLMENT',
  /** Cancel a fulfillment order. The corresponding mutation for this action is FulfillmentOrderCancel. */
  CancelFulfillmentOrder = 'CANCEL_FULFILLMENT_ORDER',
  /** Move a fulfillment order. The corresponding mutation for this action is FulfillmentOrderMove. */
  Move = 'MOVE',
  /**
   * Send a cancellation request to the fulfillment service of a fulfillment order.
   * The corresponding mutation for this action is
   * FulfillmentOrderSubmitCancellationRequest.
   */
  RequestCancellation = 'REQUEST_CANCELLATION',
  /** Open an external URL to initiate the fulfillment process outside Shopify. */
  External = 'EXTERNAL',
}

/**
 * Represents the assigned location of a fulfillment order, which is a snapshot of the location
 * at which the fulfillment order was created. The assigned location is expected to perform fulfillment.
 */
export type FulfillmentOrderAssignedLocation = {
  /** The first line of the address for the location. */
  address1?: Maybe<Scalars['String']>;
  /** The second line of the address for the location. */
  address2?: Maybe<Scalars['String']>;
  /** The city of the location. */
  city?: Maybe<Scalars['String']>;
  /** The two-letter country code of the location. */
  countryCode: CountryCode;
  /**
   * The location where the fulfillment order was created. This can differ from the
   * `FulfillmentOrderAssignedLocation` if the location was updated since the fulfillment order
   * was closed.
   */
  location?: Maybe<Location>;
  /** The name of the location. */
  name: Scalars['String'];
  /** The phone number of the location. */
  phone?: Maybe<Scalars['String']>;
  /** The province of the location. */
  province?: Maybe<Scalars['String']>;
  /** The ZIP code of the location. */
  zip?: Maybe<Scalars['String']>;
};

/** The assigment status to be used to filter fulfillment orders. */
export enum FulfillmentOrderAssignmentStatus {
  /**
   * Fulfillment orders for which the merchant has requested cancellation of
   * the previously accepted fulfillment request.
   */
  CancellationRequested = 'CANCELLATION_REQUESTED',
  /** Fulfillment orders for which the merchant has requested fulfillment. */
  FulfillmentRequested = 'FULFILLMENT_REQUESTED',
  /**
   * Fulfillment orders for which the merchant's fulfillment request has been accepted.
   * Any number of fulfillments can be created on these fulfillment orders
   * to completely fulfill the requested items.
   */
  FulfillmentAccepted = 'FULFILLMENT_ACCEPTED',
}

/** Return type for `fulfillmentOrderCancel` mutation. */
export type FulfillmentOrderCancelPayload = {
  /** The fulfillment order that was marked as canceled. */
  fulfillmentOrder?: Maybe<FulfillmentOrder>;
  /** The fulfillment order that was created to replace the canceled fulfillment order. */
  replacementFulfillmentOrder?: Maybe<FulfillmentOrder>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `fulfillmentOrderClose` mutation. */
export type FulfillmentOrderClosePayload = {
  /** The fulfillment order that was marked as incomplete. */
  fulfillmentOrder?: Maybe<FulfillmentOrder>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

export type FulfillmentOrderConnection = {
  /** A list of edges. */
  edges: Array<FulfillmentOrderEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Represents the destination where the items should be sent upon fulfillment. */
export type FulfillmentOrderDestination = Node & {
  /** The first line of the address of the destination. */
  address1?: Maybe<Scalars['String']>;
  /** The second line of the address of the destination. */
  address2?: Maybe<Scalars['String']>;
  /** The city of the destination. */
  city?: Maybe<Scalars['String']>;
  /** The company of the destination. */
  company?: Maybe<Scalars['String']>;
  /** The two-letter country code of the destination. */
  countryCode?: Maybe<CountryCode>;
  /** The email of the customer at the destination. */
  email?: Maybe<Scalars['String']>;
  /** The first name of the customer at the destination. */
  firstName?: Maybe<Scalars['String']>;
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** The last name of the customer at the destination. */
  lastName?: Maybe<Scalars['String']>;
  /** The phone number of the customer at the destination. */
  phone?: Maybe<Scalars['String']>;
  /** The province of the destination. */
  province?: Maybe<Scalars['String']>;
  /** The ZIP code of the destination. */
  zip?: Maybe<Scalars['String']>;
};

export type FulfillmentOrderEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of FulfillmentOrderEdge. */
  node: FulfillmentOrder;
};

/** Represents a line item belonging to a fulfillment order. */
export type FulfillmentOrderLineItem = Node & {
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** The associated order line item. */
  lineItem: LineItem;
  /** The number of units remaining to be fulfilled. */
  remainingQuantity: Scalars['Int'];
  /** The total number of units to be fulfilled. */
  totalQuantity: Scalars['Int'];
};

export type FulfillmentOrderLineItemConnection = {
  /** A list of edges. */
  edges: Array<FulfillmentOrderLineItemEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type FulfillmentOrderLineItemEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of FulfillmentOrderLineItemEdge. */
  node: FulfillmentOrderLineItem;
};

/** The input fields used to include a line item from a fulfillment order. */
export type FulfillmentOrderLineItemInput = {
  /** The ID of the fulfillment order line item. */
  id: Scalars['ID'];
  /** The quantity of the fulfillment order line item. */
  quantity: Scalars['Int'];
};

/** The input fields used to include the line items of a specified fulfillment order that should be fulfilled. */
export type FulfillmentOrderLineItemsInput = {
  /** The ID of the fulfillment order. */
  fulfillmentOrderId: Scalars['ID'];
  /**
   * The fulfillment order line items to be fulfilled.
   * If left blank, all line items of the fulfillment order will be fulfilled.
   */
  fulfillmentOrderLineItems?: Maybe<Array<FulfillmentOrderLineItemInput>>;
};

/** A location that a fulfillment order can potentially move to. */
export type FulfillmentOrderLocationForMove = {
  /** The location being considered as the fulfillment order's new assigned location. */
  location: Location;
  /**
   * A human-readable string with the reason why the fulfillment order, or some of its line items, can't be
   * moved to the location.
   */
  message?: Maybe<Scalars['String']>;
  /** Whether the fulfillment order can be moved to the location. */
  movable: Scalars['Boolean'];
};

export type FulfillmentOrderLocationForMoveConnection = {
  /** A list of edges. */
  edges: Array<FulfillmentOrderLocationForMoveEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type FulfillmentOrderLocationForMoveEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of FulfillmentOrderLocationForMoveEdge. */
  node: FulfillmentOrderLocationForMove;
};

/** Represents a request made by the merchant to a fulfillment service for a fulfillment order. */
export type FulfillmentOrderMerchantRequest = Node & {
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** The kind of request made. */
  kind: FulfillmentOrderMerchantRequestKind;
  /** The optional message that the merchant included in the request. */
  message?: Maybe<Scalars['String']>;
  /**
   * Additional options requested by the merchant. These depend on the `kind` of the request.
   * For example, for a `FULFILLMENT_REQUEST`, one option is `notify_customer`, which indicates whether the
   * merchant intends to notify the customer upon fulfillment. The fulfillment service can then set
   * `notifyCustomer` when making calls to `FulfillmentCreateV2`.
   */
  requestOptions?: Maybe<Scalars['JSON']>;
  /** The response from the fulfillment service. */
  responseData?: Maybe<Scalars['JSON']>;
  /** The timestamp when the request was made. */
  sentAt: Scalars['DateTime'];
};

export type FulfillmentOrderMerchantRequestConnection = {
  /** A list of edges. */
  edges: Array<FulfillmentOrderMerchantRequestEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type FulfillmentOrderMerchantRequestEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of FulfillmentOrderMerchantRequestEdge. */
  node: FulfillmentOrderMerchantRequest;
};

/** The kinds of request merchants can make to a fulfillment service. */
export enum FulfillmentOrderMerchantRequestKind {
  /** The merchant requested fulfillment for a fulfillment order. */
  FulfillmentRequest = 'FULFILLMENT_REQUEST',
  /** The merchant requested cancellation of an accepted or in-progress fulfillment order. */
  CancellationRequest = 'CANCELLATION_REQUEST',
}

/** Return type for `fulfillmentOrderMove` mutation. */
export type FulfillmentOrderMovePayload = {
  /** A new fulfillment order representing all items that were able to be moved to the new location. */
  movedFulfillmentOrder?: Maybe<FulfillmentOrder>;
  /** The fulfillment order that was moved. On success, this fulfillment order will be closed. */
  originalFulfillmentOrder?: Maybe<FulfillmentOrder>;
  /**
   * A new fulfillment order representing any items still assigned to the original location.
   * This is created if all line items on the original fulfillment order could not be moved to the new location
   * due to not being stocked there.
   */
  remainingFulfillmentOrder?: Maybe<FulfillmentOrder>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `fulfillmentOrderRejectCancellationRequest` mutation. */
export type FulfillmentOrderRejectCancellationRequestPayload = {
  /** The fulfillment order whose cancellation request was rejected. */
  fulfillmentOrder?: Maybe<FulfillmentOrder>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `fulfillmentOrderRejectFulfillmentRequest` mutation. */
export type FulfillmentOrderRejectFulfillmentRequestPayload = {
  /** The fulfillment order whose fulfillment request was rejected. */
  fulfillmentOrder?: Maybe<FulfillmentOrder>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** The request status of a fulfillment order. */
export enum FulfillmentOrderRequestStatus {
  /**
   * The initial request status for the newly created fulfillment orders. This is the only valid
   * request status for fulfillment orders that aren't assigned to a fulfillment service.
   */
  Unsubmitted = 'UNSUBMITTED',
  /** The merchant requested fulfillment for this fulfillment order. */
  Submitted = 'SUBMITTED',
  /** The fulfillment service accepted the merchant's fulfillment request. */
  Accepted = 'ACCEPTED',
  /** The fulfillment service rejected the merchant's fulfillment request. */
  Rejected = 'REJECTED',
  /** The merchant requested a cancellation of the fulfillment request for this fulfillment order. */
  CancellationRequested = 'CANCELLATION_REQUESTED',
  /** The fulfillment service accepted the merchant's fulfillment cancellation request. */
  CancellationAccepted = 'CANCELLATION_ACCEPTED',
  /** The fulfillment service rejected the merchant's fulfillment cancellation request. */
  CancellationRejected = 'CANCELLATION_REJECTED',
  /** The fulfillment service closed the fulfillment order without completing it. */
  Closed = 'CLOSED',
}

/** The set of valid sort keys for the FulfillmentOrder query. */
export enum FulfillmentOrderSortKeys {
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
}

/** The status of a fulfillment order. */
export enum FulfillmentOrderStatus {
  /** The default state for newly created fulfillment orders. */
  Open = 'OPEN',
  /** The fulfillment order is being processed. */
  InProgress = 'IN_PROGRESS',
  /** The fulfillment order has been cancelled by the merchant. */
  Cancelled = 'CANCELLED',
  /** The fulfillment order cannot be completed as requested. */
  Incomplete = 'INCOMPLETE',
  /** The fulfillment order has been completed and closed. */
  Closed = 'CLOSED',
}

/** Return type for `fulfillmentOrderSubmitCancellationRequest` mutation. */
export type FulfillmentOrderSubmitCancellationRequestPayload = {
  /** The fulfillment order whose cancellation was requested. */
  fulfillmentOrder?: Maybe<FulfillmentOrder>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `fulfillmentOrderSubmitFulfillmentRequest` mutation. */
export type FulfillmentOrderSubmitFulfillmentRequestPayload = {
  /** The original fulfillment order intended to request fulfillment for. */
  originalFulfillmentOrder?: Maybe<FulfillmentOrder>;
  /**
   * The fulfillment order that was submitted to the fulfillment service. This will be the same as
   * the original fulfillment order field. The exception to this is partial fulfillment requests or
   * fulfillment request for cancelled or incomplete fulfillment orders.
   */
  submittedFulfillmentOrder?: Maybe<FulfillmentOrder>;
  /**
   * This field will only be present for partial fulfillment requests. This will represent the new
   * fulfillment order with the remaining line items not submitted to the fulfillment service.
   */
  unsubmittedFulfillmentOrder?: Maybe<FulfillmentOrder>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Represents one of the methods that the fulfillment order supports. */
export type FulfillmentOrderSupportedAction = {
  /** The action value. */
  action: FulfillmentOrderAction;
  /** The external URL to be used to initiate the fulfillment process outside Shopify. */
  externalUrl?: Maybe<Scalars['URL']>;
};

/**
 * Represents a fulfillment service. A fulfillment service is a third-party service
 * that prepares and ships orders on behalf of the store owner.
 */
export type FulfillmentService = {
  /** The callback URL the fulfillment service has registered for requests. */
  callbackUrl?: Maybe<Scalars['URL']>;
  /** Whether the fulfillment service has opted into fulfillment order based requests. */
  fulfillmentOrdersOptIn: Scalars['Boolean'];
  /** Human-readable unique identifier for this fulfillment service. */
  handle: Scalars['String'];
  /** The ID of the fulfillment service. */
  id: Scalars['ID'];
  /** Whether the fulfillment service tracks product inventory and provides updates to Shopify. */
  inventoryManagement: Scalars['Boolean'];
  /** Location associated with the fulfillment service. */
  location?: Maybe<Location>;
  /** Whether the fulfillment service supports local deliveries. */
  productBased: Scalars['Boolean'];
  /** The name of the fulfillment service as seen by merchants. */
  serviceName: Scalars['String'];
  /** Shipping methods associated with the fulfillment service provider. */
  shippingMethods: Array<ShippingMethod>;
  /** Type associated with the fulfillment service. */
  type: FulfillmentServiceType;
};

/** Return type for `fulfillmentServiceCreate` mutation. */
export type FulfillmentServiceCreatePayload = {
  /** The created fulfillment service. */
  fulfillmentService?: Maybe<FulfillmentService>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `fulfillmentServiceDelete` mutation. */
export type FulfillmentServiceDeletePayload = {
  /** The ID of the deleted fulfillment service. */
  deletedId?: Maybe<Scalars['ID']>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** The type of a fulfillment service. */
export enum FulfillmentServiceType {
  /** Fulfillment by gift card. */
  GiftCard = 'GIFT_CARD',
  /** Manual fulfillment by the merchant. */
  Manual = 'MANUAL',
  /** Fullfillment by a third-party fulfillment service. */
  ThirdParty = 'THIRD_PARTY',
}

/** Return type for `fulfillmentServiceUpdate` mutation. */
export type FulfillmentServiceUpdatePayload = {
  /** The updated fulfillment service. */
  fulfillmentService?: Maybe<FulfillmentService>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** The status of a fulfillment. */
export enum FulfillmentStatus {
  /**
   * Shopify has created the fulfillment and is waiting for the third-party
   * fulfillment service to transition it to `open` or `success`.
   */
  Pending = 'PENDING',
  /** The third-party fulfillment service has acknowledged the fulfilment and is processing it. */
  Open = 'OPEN',
  /** The fulfillment was completed successfully. */
  Success = 'SUCCESS',
  /** The fulfillment was canceled. */
  Cancelled = 'CANCELLED',
  /** There was an error with the fulfillment request. */
  Error = 'ERROR',
  /** The fulfillment request failed. */
  Failure = 'FAILURE',
}

/** Represents the tracking information for a fulfillment. */
export type FulfillmentTrackingInfo = {
  /** The name of the tracking company. */
  company?: Maybe<Scalars['String']>;
  /** The tracking number of the fulfillment. */
  number?: Maybe<Scalars['String']>;
  /** The URLs to track the fulfillment. */
  url?: Maybe<Scalars['URL']>;
};

/** Return type for `fulfillmentTrackingInfoUpdate` mutation. */
export type FulfillmentTrackingInfoUpdatePayload = {
  /** The updated fulfillment with tracking information. */
  fulfillment?: Maybe<Fulfillment>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `fulfillmentTrackingInfoUpdateV2` mutation. */
export type FulfillmentTrackingInfoUpdateV2Payload = {
  /** The updated fulfillment with tracking information. */
  fulfillment?: Maybe<Fulfillment>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** The input fields used to specify all possible fields for tracking information. */
export type FulfillmentTrackingInput = {
  /** The tracking number of the fulfillment. */
  number?: Maybe<Scalars['String']>;
  /** The URL to track the fulfillment. */
  url?: Maybe<Scalars['URL']>;
  /** The name of the tracking company. */
  company?: Maybe<Scalars['String']>;
};

/** The input fields used to create a fulfillment from fulfillment orders. */
export type FulfillmentV2Input = {
  /**
   * The fulfillment's tracking information, including a tracking URL, a tracking number,
   * and the company associated with the fulfillment.
   */
  trackingInfo?: Maybe<FulfillmentTrackingInput>;
  /**
   * Whether the customer is notified.
   * If set to true, a notification is sent when the fulfillment is created.
   */
  notifyCustomer?: Maybe<Scalars['Boolean']>;
  /**
   * Pairs of `fulfillment_order_id` and `fulfillment_order_line_items` that represent the fulfillment
   * order line items that have to be fulfilled for each fulfillment order.  For any given pair, if the
   * fulfillment order line items are left blank then all the fulfillment order line items of the
   * associated fulfillment order ID will be fulfilled.
   */
  lineItemsByFulfillmentOrder: Array<FulfillmentOrderLineItemsInput>;
};

/** Connector to event records on a compatible host. */
export type HasEvents = {
  /** The paginated list of events associated with the host subject. */
  events: EventConnection;
};

/** Connector to event records on a compatible host. */
export type HasEventsEventsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<EventSortKeys>;
  query?: Maybe<Scalars['String']>;
};

/** Represents information about the metafields associated to the specified resource. */
export type HasMetafields = {
  /** The metafield associated with the resource. */
  metafield?: Maybe<Metafield>;
  /** A paginated list of metafields associated with the resource. */
  metafields: MetafieldConnection;
  /** Returns a private metafield found by namespace and key. */
  privateMetafield?: Maybe<PrivateMetafield>;
  /** List of private metafields. */
  privateMetafields: PrivateMetafieldConnection;
};

/** Represents information about the metafields associated to the specified resource. */
export type HasMetafieldsMetafieldArgs = {
  namespace: Scalars['String'];
  key: Scalars['String'];
};

/** Represents information about the metafields associated to the specified resource. */
export type HasMetafieldsMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Represents information about the metafields associated to the specified resource. */
export type HasMetafieldsPrivateMetafieldArgs = {
  namespace: Scalars['String'];
  key: Scalars['String'];
};

/** Represents information about the metafields associated to the specified resource. */
export type HasMetafieldsPrivateMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Published translations associated with the resource. */
export type HasPublishedTranslations = {
  /** The translations associated with the resource. */
  translations: Array<PublishedTranslation>;
};

/** Published translations associated with the resource. */
export type HasPublishedTranslationsTranslationsArgs = {
  locale: Scalars['String'];
};

/** Represents an image resource. */
export type Image = HasMetafields & {
  /** A word or phrase to share the nature or contents of an image. */
  altText?: Maybe<Scalars['String']>;
  /** A unique identifier for the image. */
  id?: Maybe<Scalars['ID']>;
  /** The metafield associated with the resource. */
  metafield?: Maybe<Metafield>;
  /** A paginated list of metafields associated with the resource. */
  metafields: MetafieldConnection;
  /**
   * The location of the original image as a URL.
   *
   * If there are any existing transformations in the original source URL, they will remain and not be stripped.
   */
  originalSrc: Scalars['URL'];
  /** Returns a private metafield found by namespace and key. */
  privateMetafield?: Maybe<PrivateMetafield>;
  /** List of private metafields. */
  privateMetafields: PrivateMetafieldConnection;
  /**
   * The location of the image as a URL.
   * @deprecated Previously an image had a single `src` field. This could either return the original image
   * location or a URL that contained transformations such as sizing or scale.
   *
   * These transformations were specified by arguments on the parent field.
   *
   * Now an image has two distinct URL fields: `originalSrc` and `transformedSrc`.
   *
   * * `originalSrc` - the original unmodified image URL
   * * `transformedSrc` - the image URL with the specified transformations included
   *
   * To migrate to the new fields, image transformations should be moved from the parent field to `transformedSrc`.
   *
   * Before:
   * ```graphql
   * {
   *   shop {
   *     productImages(maxWidth: 200, scale: 2) {
   *       edges {
   *         node {
   *           src
   *         }
   *       }
   *     }
   *   }
   * }
   * ```
   *
   * After:
   * ```graphql
   * {
   *   shop {
   *     productImages {
   *       edges {
   *         node {
   *           transformedSrc(maxWidth: 200, scale: 2)
   *         }
   *       }
   *     }
   *   }
   * }
   * ```
   *
   */
  src: Scalars['URL'];
  /**
   * The location of the transformed image as a URL.
   *
   * All transformation arguments are considered "best-effort". If they can be applied to an image, they will be.
   * Otherwise any transformations which an image type does not support will be ignored.
   */
  transformedSrc: Scalars['URL'];
};

/** Represents an image resource. */
export type ImageMetafieldArgs = {
  namespace: Scalars['String'];
  key: Scalars['String'];
};

/** Represents an image resource. */
export type ImageMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Represents an image resource. */
export type ImagePrivateMetafieldArgs = {
  namespace: Scalars['String'];
  key: Scalars['String'];
};

/** Represents an image resource. */
export type ImagePrivateMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Represents an image resource. */
export type ImageTransformedSrcArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  crop?: Maybe<CropRegion>;
  scale?: Maybe<Scalars['Int']>;
  preferredContentType?: Maybe<ImageContentType>;
};

export type ImageConnection = {
  /** A list of edges. */
  edges: Array<ImageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** List of supported image content types. */
export enum ImageContentType {
  /** A PNG image. */
  Png = 'PNG',
  /** A JPG image. */
  Jpg = 'JPG',
  /** A WEBP image. */
  Webp = 'WEBP',
}

export type ImageEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of ImageEdge. */
  node: Image;
};

/** Specifies the input fields for an image. */
export type ImageInput = {
  /** Globally unique identifier. */
  id?: Maybe<Scalars['ID']>;
  /** A word or phrase to share the nature or contents of an image. */
  altText?: Maybe<Scalars['String']>;
  /** The URL of the image. May be a signed upload URL. */
  src?: Maybe<Scalars['String']>;
};

/** Upload parameter of an image. */
export type ImageUploadParameter = {
  /** Parameter name. */
  name: Scalars['String'];
  /** Parameter value. */
  value: Scalars['String'];
};

/** Return type for `inventoryActivate` mutation. */
export type InventoryActivatePayload = {
  /** The newly activated inventory level. */
  inventoryLevel?: Maybe<InventoryLevel>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Specifies the items and their adjustments. */
export type InventoryAdjustItemInput = {
  /** ID of the inventory item to adjust. */
  inventoryItemId: Scalars['ID'];
  /** Count by which to adjust the available quantity. */
  availableDelta: Scalars['Int'];
};

/** Specifies the fields required to adjust the inventory quantity. */
export type InventoryAdjustQuantityInput = {
  /** ID of the inventory level to adjust. */
  inventoryLevelId: Scalars['ID'];
  /** Count by which to adjust the available quantity. */
  availableDelta: Scalars['Int'];
};

/** Return type for `inventoryAdjustQuantity` mutation. */
export type InventoryAdjustQuantityPayload = {
  /** Represents the updated inventory quantity of an inventory item at a specific location. */
  inventoryLevel?: Maybe<InventoryLevel>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `inventoryBulkAdjustQuantityAtLocation` mutation. */
export type InventoryBulkAdjustQuantityAtLocationPayload = {
  /** The updated inventory quantities. */
  inventoryLevels?: Maybe<Array<InventoryLevel>>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `inventoryDeactivate` mutation. */
export type InventoryDeactivatePayload = {
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/**
 * Represents the goods available to be shipped to a customer.
 * It holds essential information about the goods, including SKU and whether it is tracked.
 */
export type InventoryItem = Node &
  LegacyInteroperability & {
    /** The ISO code of the country of origin. */
    countryCodeOfOrigin?: Maybe<CountryCode>;
    /** List of country specific harmonized system codes. */
    countryHarmonizedSystemCodes: CountryHarmonizedSystemCodeConnection;
    /** The date and time when the inventory item was created. */
    createdAt: Scalars['DateTime'];
    /** The number of inventory items that share the same SKU with this item. */
    duplicateSkuCount: Scalars['Int'];
    /** The harmonized system code of the item. */
    harmonizedSystemCode?: Maybe<Scalars['String']>;
    /** Globally unique identifier. */
    id: Scalars['ID'];
    /** URL for inventory history web page. */
    inventoryHistoryUrl?: Maybe<Scalars['URL']>;
    /** Get the inventory level at a specific location. */
    inventoryLevel?: Maybe<InventoryLevel>;
    /** Paginated list of inventory levels for each location that the inventory item is stocked at. */
    inventoryLevels: InventoryLevelConnection;
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars['UnsignedInt64'];
    /** The number of locations where this inventory item is stocked. */
    locationsCount: Scalars['Int'];
    /** The ISO code of the province of origin. */
    provinceCodeOfOrigin?: Maybe<Scalars['String']>;
    /** Whether the item requires shipping or not. */
    requiresShipping: Scalars['Boolean'];
    /** Inventory item SKU. */
    sku?: Maybe<Scalars['String']>;
    /** Whether the inventory quantities of inventory levels for the item are tracked or not. */
    tracked: Scalars['Boolean'];
    /** Whether changes to the inventory item tracked attribute are allowed. */
    trackedEditable: EditableProperty;
    /** Unit cost associated with the inventory item. */
    unitCost?: Maybe<MoneyV2>;
    /** The date and time when the inventory item was updated. */
    updatedAt: Scalars['DateTime'];
    /** The variant that owns this inventory item. */
    variant: ProductVariant;
  };

/**
 * Represents the goods available to be shipped to a customer.
 * It holds essential information about the goods, including SKU and whether it is tracked.
 */
export type InventoryItemCountryHarmonizedSystemCodesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/**
 * Represents the goods available to be shipped to a customer.
 * It holds essential information about the goods, including SKU and whether it is tracked.
 */
export type InventoryItemInventoryLevelArgs = {
  locationId: Scalars['ID'];
};

/**
 * Represents the goods available to be shipped to a customer.
 * It holds essential information about the goods, including SKU and whether it is tracked.
 */
export type InventoryItemInventoryLevelsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  query?: Maybe<Scalars['String']>;
};

export type InventoryItemConnection = {
  /** A list of edges. */
  edges: Array<InventoryItemEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type InventoryItemEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of InventoryItemEdge. */
  node: InventoryItem;
};

/** Inventory items. */
export type InventoryItemInput = {
  /** Unit cost associated with the inventory item, the currency is the shop's default currency. */
  cost?: Maybe<Scalars['Decimal']>;
  /** Whether the inventory item is tracked. */
  tracked?: Maybe<Scalars['Boolean']>;
};

/** Inventory items. */
export type InventoryItemUpdateInput = {
  /** Unit cost associated with the inventory item, the currency is the shop's default currency. */
  cost?: Maybe<Scalars['Decimal']>;
  /** Whether the inventory item is tracked. */
  tracked?: Maybe<Scalars['Boolean']>;
  /** The ISO code of the country of origin. */
  countryCodeOfOrigin?: Maybe<CountryCode>;
  /** The ISO code of the province of origin. */
  provinceCodeOfOrigin?: Maybe<Scalars['String']>;
  /** The harmonized system code of the inventory item. */
  harmonizedSystemCode?: Maybe<Scalars['String']>;
  /** List of country-specific harmonized system codes. */
  countryHarmonizedSystemCodes?: Maybe<Array<CountryHarmonizedSystemCodeInput>>;
};

/** Return type for `inventoryItemUpdate` mutation. */
export type InventoryItemUpdatePayload = {
  /** The updated inventory item. */
  inventoryItem?: Maybe<InventoryItem>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Represents the inventory quantity of an inventory item at a specific location. */
export type InventoryLevel = Node & {
  /** Quantity of items available at the location. */
  available: Scalars['Int'];
  /** Whether inventoryDeactivate is allowed for this inventory level. */
  canDeactivate: Scalars['Boolean'];
  /** The date and time when the inventory level was created. */
  createdAt: Scalars['DateTime'];
  /** Reason why canDeactivate is false, or impact of deactivating the inventory level. */
  deactivationAlert?: Maybe<Scalars['String']>;
  /** Reason why canDeactivate is false with URLs linked in HTML, or impact of deactivating the inventory level. */
  deactivationAlertHtml?: Maybe<Scalars['FormattedString']>;
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** Quantity of items incoming to the location. */
  incoming: Scalars['Int'];
  /** Inventory item associated with the inventory level. */
  item: InventoryItem;
  /** Location associated with the inventory level. */
  location: Location;
  /** The date and time when the inventory level was updated. */
  updatedAt: Scalars['DateTime'];
};

export type InventoryLevelConnection = {
  /** A list of edges. */
  edges: Array<InventoryLevelEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type InventoryLevelEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of InventoryLevelEdge. */
  node: InventoryLevel;
};

/** Inventory quantity at a specific location. */
export type InventoryLevelInput = {
  /** Sets the quantity available at the location. */
  availableQuantity: Scalars['Int'];
  /** ID of the location. */
  locationId: Scalars['ID'];
};

/** A job corresponds to some long running task that the client should poll for status. */
export type Job = {
  /** This indicates if the job is still queued or has been run. */
  done: Scalars['Boolean'];
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** This field will only resolve once the job is done. Can be used to ask for object(s) that have been changed by the job. */
  query?: Maybe<QueryRoot>;
};

/** The locale language allowed for Kit Skill. */
export enum KitSkillLocale {
  /** English language. */
  En = 'EN',
}

/** Return type for `kitSkillTriggerRequest` mutation. */
export type KitSkillTriggerRequestPayload = {
  /** Conversation unique identifier sent to Conversation API and returned to app developer. */
  conversationUid?: Maybe<Scalars['String']>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/**
 * Interoperability metadata for types that directly correspond to a REST Admin API resource.
 * For example, on the Product type, LegacyInteroperability returns metadata for
 * the corresponding [Product
 * object](https://help.shopify.com/api/reference/products/product) in the REST Admin API.
 */
export type LegacyInteroperability = {
  /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64'];
};

/**
 * The total number of pending orders on a shop if less then a maximum, or that maximum.
 * The atMax field indicates when this maximum has been reached.
 */
export type LimitedPendingOrderCount = {
  /** This is set when the number of pending orders has reached the maximum. */
  atMax: Scalars['Boolean'];
  /**
   * The number of pendings orders on the shop.
   * Limited to a maximum of 10000.
   */
  count: Scalars['Int'];
};

/** Represents a single line in a shopping cart. */
export type LineItem = Node & {
  /**
   * Whether the line item's variant has an ID and inventory is managed by Shopify.
   * @deprecated Use `restockable` instead
   */
  canRestock: Scalars['Boolean'];
  /** List of additional information (metafields) about the line item. */
  customAttributes: Array<Attribute>;
  /** The discounts that have been allocated onto the line item by discount applications. */
  discountAllocations: Array<DiscountAllocation>;
  /**
   * The total line price after discounts are applied.
   * @deprecated Use `discountedTotalSet` instead
   */
  discountedTotal: Scalars['Money'];
  /** The total line price after discounts are applied in shop and presentment currencies. */
  discountedTotalSet: MoneyBag;
  /**
   * The price of a single variant unit after line item discounts are applied.
   * @deprecated Use `discountedUnitPriceSet` instead
   */
  discountedUnitPrice: Scalars['Money'];
  /** The price of a single variant unit after line item discounts are applied in shop and presentment currencies. */
  discountedUnitPriceSet: MoneyBag;
  /** The duties associated with the line item. */
  duties: Array<Duty>;
  /** The total number of units to fulfill. */
  fulfillableQuantity: Scalars['Int'];
  /**
   * Name of the service provider who fulfilled the order.
   *
   * Valid values are either **manual** or the name of the provider.
   * For example, **amazon**, **shipwire**.
   */
  fulfillmentService: FulfillmentService;
  /**
   * The line item's fulfillment status. Returns 'fulfilled' if fulfillableQuantity >= quantity,
   * 'partial' if  fulfillableQuantity > 0, and 'unfulfilled' otherwise.
   */
  fulfillmentStatus: Scalars['String'];
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** The Image object associated to the line item's variant. */
  image?: Maybe<Image>;
  /** Whether the line item can be edited or not. */
  merchantEditable: Scalars['Boolean'];
  /** Name of the product. */
  name: Scalars['String'];
  /** A count of the number of line items that cannot be fulfilled. */
  nonFulfillableQuantity: Scalars['Int'];
  /**
   * Total price (without discounts) of the line item, based on the original unit price of the variant x quantity.
   * @deprecated Use `originalTotalSet` instead
   */
  originalTotal: Scalars['Money'];
  /**
   * Total price (without discounts) of the line item, based on the original unit
   * price of the  variant x quantity in shop and presentment currencies.
   */
  originalTotalSet: MoneyBag;
  /**
   * Variant price without any discounts applied.
   * @deprecated Use `originalUnitPriceSet` instead
   */
  originalUnitPrice: Scalars['Money'];
  /** Variant price without any discounts applied in shop and presentment currencies. */
  originalUnitPriceSet: MoneyBag;
  /** The Product object associated with this line item's variant. */
  product?: Maybe<Product>;
  /** Number of variant items ordered. */
  quantity: Scalars['Int'];
  /** The line item's quantity minus its refundedQuantity. */
  refundableQuantity: Scalars['Int'];
  /** Whether physical shipping is required for the variant. */
  requiresShipping: Scalars['Boolean'];
  /** Whether the line item's variant has an ID and inventory is managed by Shopify. */
  restockable: Scalars['Boolean'];
  /** Variant SKU number. */
  sku?: Maybe<Scalars['String']>;
  /** The TaxLine object connected to this line item. */
  taxLines: Array<TaxLine>;
  /** Whether the variant is taxable. */
  taxable: Scalars['Boolean'];
  /** Title of the product or variant (this field only applies to custom line items). */
  title: Scalars['String'];
  /**
   * The sum of all AppliedDiscounts on this line item.
   * @deprecated Use `totalDiscountSet` instead
   */
  totalDiscount: Scalars['Money'];
  /** The sum of all AppliedDiscounts on this line item in shop and presentment currencies. */
  totalDiscountSet: MoneyBag;
  /**
   * The total discounted value of unfulfilled units.
   * @deprecated Use `unfulfilledDiscountedTotalSet` instead
   */
  unfulfilledDiscountedTotal: Scalars['Money'];
  /** The total discounted value of unfulfilled units in shop and presentment currencies. */
  unfulfilledDiscountedTotalSet: MoneyBag;
  /**
   * The total value before discount of all unfulfilled units.
   * @deprecated Use `unfulfilledOriginalTotalSet` instead
   */
  unfulfilledOriginalTotal: Scalars['Money'];
  /** The total value before discount of all unfulfilled units in shop and presentment currencies. */
  unfulfilledOriginalTotalSet: MoneyBag;
  /** The number of units not yet fulfilled. */
  unfulfilledQuantity: Scalars['Int'];
  /** The Variant object associated with this line item. */
  variant?: Maybe<ProductVariant>;
  /** Name of the variant. */
  variantTitle?: Maybe<Scalars['String']>;
  /** Name of the vendor who made the variant. */
  vendor?: Maybe<Scalars['String']>;
};

/** Represents a single line in a shopping cart. */
export type LineItemImageArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  crop?: Maybe<CropRegion>;
  scale?: Maybe<Scalars['Int']>;
};

/** Represents a single line in a shopping cart. */
export type LineItemTaxLinesArgs = {
  first?: Maybe<Scalars['Int']>;
};

export type LineItemConnection = {
  /** A list of edges. */
  edges: Array<LineItemEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type LineItemEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of LineItemEdge. */
  node: LineItem;
};

/** Represents a single line in a shopping cart. */
export type LineItemMutable = Node & {
  /**
   * Whether the line item's variant has an ID and inventory is managed by Shopify.
   * @deprecated Use `restockable` instead
   */
  canRestock: Scalars['Boolean'];
  /** List of additional information (metafields) about the line item. */
  customAttributes: Array<Attribute>;
  /** The discounts that have been allocated onto the line item by discount applications. */
  discountAllocations: Array<DiscountAllocation>;
  /**
   * The total line price after discounts are applied.
   * @deprecated Use `discountedTotalSet` instead
   */
  discountedTotal: Scalars['Money'];
  /** The total line price after discounts are applied in shop and presentment currencies. */
  discountedTotalSet: MoneyBag;
  /**
   * The price of a single variant unit after line item discounts are applied.
   * @deprecated Use `discountedUnitPriceSet` instead
   */
  discountedUnitPrice: Scalars['Money'];
  /** The price of a single variant unit after line item discounts are applied in shop and presentment currencies. */
  discountedUnitPriceSet: MoneyBag;
  /** The total number of units to fulfill. */
  fulfillableQuantity: Scalars['Int'];
  /**
   * Name of the service provider who fulfilled the order.
   *
   * Valid values are either **manual** or the name of the provider.
   * For example, **amazon**, **shipwire**.
   */
  fulfillmentService: FulfillmentService;
  /**
   * The line item's fulfillment status. Returns 'fulfilled' if fulfillableQuantity >= quantity,
   * 'partial' if  fulfillableQuantity > 0, and 'unfulfilled' otherwise.
   */
  fulfillmentStatus: Scalars['String'];
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** The Image object associated to the line item's variant. */
  image?: Maybe<Image>;
  /** Whether the line item can be edited or not. */
  merchantEditable: Scalars['Boolean'];
  /** Name of the product. */
  name: Scalars['String'];
  /** A count of the number of line items that cannot be fulfilled. */
  nonFulfillableQuantity: Scalars['Int'];
  /**
   * Total price (without discounts) of the line item, based on the original unit price of the variant x quantity.
   * @deprecated Use `originalTotalSet` instead
   */
  originalTotal: Scalars['Money'];
  /**
   * Total price (without discounts) of the line item, based on the original unit
   * price of the  variant x quantity in shop and presentment currencies.
   */
  originalTotalSet: MoneyBag;
  /**
   * Variant price without any discounts applied.
   * @deprecated Use `originalUnitPriceSet` instead
   */
  originalUnitPrice: Scalars['Money'];
  /** Variant price without any discounts applied in shop and presentment currencies. */
  originalUnitPriceSet: MoneyBag;
  /** The Product object associated with this line item's variant. */
  product?: Maybe<Product>;
  /** Number of variant items ordered. */
  quantity: Scalars['Int'];
  /** The line item's quantity minus its refundedQuantity. */
  refundableQuantity: Scalars['Int'];
  /** Whether physical shipping is required for the variant. */
  requiresShipping: Scalars['Boolean'];
  /** Whether the line item's variant has an ID and inventory is managed by Shopify. */
  restockable: Scalars['Boolean'];
  /** Variant SKU number. */
  sku?: Maybe<Scalars['String']>;
  /** The TaxLine object connected to this line item. */
  taxLines: Array<TaxLine>;
  /** Whether the variant is taxable. */
  taxable: Scalars['Boolean'];
  /** Title of the product or variant (this field only applies to custom line items). */
  title: Scalars['String'];
  /**
   * The sum of all AppliedDiscounts on this line item.
   * @deprecated Use `totalDiscountSet` instead
   */
  totalDiscount: Scalars['Money'];
  /** The sum of all AppliedDiscounts on this line item in shop and presentment currencies. */
  totalDiscountSet: MoneyBag;
  /**
   * The total discounted value of unfulfilled units.
   * @deprecated Use `unfulfilledDiscountedTotalSet` instead
   */
  unfulfilledDiscountedTotal: Scalars['Money'];
  /** The total discounted value of unfulfilled units in shop and presentment currencies. */
  unfulfilledDiscountedTotalSet: MoneyBag;
  /**
   * The total value before discount of all unfulfilled units.
   * @deprecated Use `unfulfilledOriginalTotalSet` instead
   */
  unfulfilledOriginalTotal: Scalars['Money'];
  /** The total value before discount of all unfulfilled units in shop and presentment currencies. */
  unfulfilledOriginalTotalSet: MoneyBag;
  /** The number of units not yet fulfilled. */
  unfulfilledQuantity: Scalars['Int'];
  /** The Variant object associated with this line item. */
  variant?: Maybe<ProductVariant>;
  /** Name of the variant. */
  variantTitle?: Maybe<Scalars['String']>;
  /** Name of the vendor who made the variant. */
  vendor?: Maybe<Scalars['String']>;
};

/** Represents a single line in a shopping cart. */
export type LineItemMutableImageArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  crop?: Maybe<CropRegion>;
  scale?: Maybe<Scalars['Int']>;
};

/** Represents a single line in a shopping cart. */
export type LineItemMutableTaxLinesArgs = {
  first?: Maybe<Scalars['Int']>;
};

export type LineItemMutableConnection = {
  /** A list of edges. */
  edges: Array<LineItemMutableEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type LineItemMutableEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of LineItemMutableEdge. */
  node: LineItemMutable;
};

/** A link to direct users to. */
export type Link = HasPublishedTranslations & {
  /** A context-sensitive label for the link. */
  label: Scalars['String'];
  /** The translations associated with the resource. */
  translations: Array<PublishedTranslation>;
  /** The URL that the link visits. */
  url: Scalars['URL'];
};

/** A link to direct users to. */
export type LinkTranslationsArgs = {
  locale: Scalars['String'];
};

/** A locale. */
export type Locale = {
  /** Locale ISO code. */
  isoCode: Scalars['String'];
  /** Locale name. */
  name: Scalars['String'];
};

/** Represents the location where the physical good resides. */
export type Location = Node &
  LegacyInteroperability & {
    /** Whether this location can be reactivated. */
    activatable: Scalars['Boolean'];
    /** The LocationAddress object for location. */
    address: LocationAddress;
    /** Whether the location address has been verified. */
    addressVerified: Scalars['Boolean'];
    /** Whether this location can be deactivated. */
    deactivatable: Scalars['Boolean'];
    /**
     * Date and time the location was deactivated (null if location is still active).
     * Following UTC ISO8601 format, e.g.: "2019-04-24T13:42:24Z".
     */
    deactivatedAt?: Maybe<Scalars['String']>;
    /** Whether this location can be deleted. */
    deletable: Scalars['Boolean'];
    /** Name of the service provider that fulfills from this location. */
    fulfillmentService?: Maybe<FulfillmentService>;
    /** Indicates whether this location can fulfill online orders. */
    fulfillsOnlineOrders: Scalars['Boolean'];
    /** Indicates whether or not this location has active inventory. */
    hasActiveInventory: Scalars['Boolean'];
    /** Indicates whether or not this location has unfulfilled orders. */
    hasUnfulfilledOrders: Scalars['Boolean'];
    /** Globally unique identifier. */
    id: Scalars['ID'];
    /** A single inventory level for the given inventory item. */
    inventoryLevel?: Maybe<InventoryLevel>;
    /** Paginated list of inventory levels for inventory items stocked at the location. */
    inventoryLevels: InventoryLevelConnection;
    /** Whether the location is active. */
    isActive: Scalars['Boolean'];
    /**
     * Whether the location is your primary location for shipping inventory.
     * @deprecated The concept of a primary location is deprecated, shipsInventory can be used to get a fallback location
     */
    isPrimary: Scalars['Boolean'];
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars['UnsignedInt64'];
    /** The name of the location. */
    name: Scalars['String'];
    /** Indicates whether or not this location ships inventory. */
    shipsInventory: Scalars['Boolean'];
    /** List of suggested addresses for this location (empty if none). */
    suggestedAddresses: Array<LocationSuggestedAddress>;
  };

/** Represents the location where the physical good resides. */
export type LocationInventoryLevelArgs = {
  inventoryItemId: Scalars['ID'];
};

/** Represents the location where the physical good resides. */
export type LocationInventoryLevelsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  query?: Maybe<Scalars['String']>;
};

/** Represents the address of the location. */
export type LocationAddress = {
  /** The first line of the address for the location. */
  address1?: Maybe<Scalars['String']>;
  /** The second line of the address for the location. */
  address2?: Maybe<Scalars['String']>;
  /** The city of the location. */
  city?: Maybe<Scalars['String']>;
  /** The country of the location. */
  country?: Maybe<Scalars['String']>;
  /** The two-letter country code of the location. */
  countryCode?: Maybe<Scalars['String']>;
  /** A formatted version of the location address. */
  formatted: Array<Scalars['String']>;
  /** The latitude coordinates of the location. */
  latitude?: Maybe<Scalars['Float']>;
  /** The longitude coordinates of the location. */
  longitude?: Maybe<Scalars['Float']>;
  /** The phone number of the location. */
  phone?: Maybe<Scalars['String']>;
  /** The province of the location. */
  province?: Maybe<Scalars['String']>;
  /**
   * The code for the region of the address, such as the province, state, or district.
   * For example QC for Quebec, Canada.
   */
  provinceCode?: Maybe<Scalars['String']>;
  /** The ZIP code of the location. */
  zip?: Maybe<Scalars['String']>;
};

export type LocationConnection = {
  /** A list of edges. */
  edges: Array<LocationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type LocationEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of LocationEdge. */
  node: Location;
};

/** The set of valid sort keys for the Location query. */
export enum LocationSortKeys {
  /** Sort by the `name` value. */
  Name = 'NAME',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
}

/** Represents a suggested address for a location. */
export type LocationSuggestedAddress = {
  /** The first line of the suggested address. */
  address1?: Maybe<Scalars['String']>;
  /** The second line of the suggested address. */
  address2?: Maybe<Scalars['String']>;
  /** The city of the suggested address. */
  city?: Maybe<Scalars['String']>;
  /** The country of the suggested address. */
  country?: Maybe<Scalars['String']>;
  /** The country code of the suggested address. */
  countryCode?: Maybe<CountryCode>;
  /** A formatted version of the suggested address. */
  formatted: Array<Scalars['String']>;
  /** The province of the suggested address. */
  province?: Maybe<Scalars['String']>;
  /** The province code of the suggested address. */
  provinceCode?: Maybe<Scalars['String']>;
  /** The ZIP code of the suggested address. */
  zip?: Maybe<Scalars['String']>;
};

/**
 * Represents a customer mailing address.
 *
 * For example, a customer's default address and an order's billing address are both mailling addresses.
 */
export type MailingAddress = Node & {
  /** The first line of the address. Typically the street address or PO Box number. */
  address1?: Maybe<Scalars['String']>;
  /** The second line of the address. Typically the number of the apartment, suite, or unit. */
  address2?: Maybe<Scalars['String']>;
  /** The name of the city, district, village, or town. */
  city?: Maybe<Scalars['String']>;
  /** The name of the customer's company or organization. */
  company?: Maybe<Scalars['String']>;
  /** The name of the country. */
  country?: Maybe<Scalars['String']>;
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   * @deprecated Use `countryCodeV2` instead
   */
  countryCode?: Maybe<Scalars['String']>;
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   */
  countryCodeV2?: Maybe<CountryCode>;
  /** The first name of the customer. */
  firstName?: Maybe<Scalars['String']>;
  /** A formatted version of the address, customized by the provided arguments. */
  formatted: Array<Scalars['String']>;
  /** A comma-separated list of the values for city, province, and country. */
  formattedArea?: Maybe<Scalars['String']>;
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** The last name of the customer. */
  lastName?: Maybe<Scalars['String']>;
  /** The latitude coordinate of the customer address. */
  latitude?: Maybe<Scalars['Float']>;
  /** The longitude coordinate of the customer address. */
  longitude?: Maybe<Scalars['Float']>;
  /** The full name of the customer, based on firstName and lastName. */
  name?: Maybe<Scalars['String']>;
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   */
  phone?: Maybe<Scalars['String']>;
  /** The region of the address, such as the province, state, or district. */
  province?: Maybe<Scalars['String']>;
  /**
   * The two-letter code for the region.
   *
   * For example, ON.
   */
  provinceCode?: Maybe<Scalars['String']>;
  /** The zip or postal code of the address. */
  zip?: Maybe<Scalars['String']>;
};

/**
 * Represents a customer mailing address.
 *
 * For example, a customer's default address and an order's billing address are both mailling addresses.
 */
export type MailingAddressFormattedArgs = {
  withName?: Maybe<Scalars['Boolean']>;
  withCompany?: Maybe<Scalars['Boolean']>;
};

/** The fields used to create or update a mailing address. */
export type MailingAddressInput = {
  /** The first line of the address. Typically the street address or PO Box number. */
  address1?: Maybe<Scalars['String']>;
  /** The second line of the address. Typically the number of the apartment, suite, or unit. */
  address2?: Maybe<Scalars['String']>;
  /** The name of the city, district, village, or town. */
  city?: Maybe<Scalars['String']>;
  /** The name of the customer's company or organization. */
  company?: Maybe<Scalars['String']>;
  /** The name of the country. This argument is deprecated: Use `countryCode` instead. */
  country?: Maybe<Scalars['String']>;
  /** The two-letter code for the country of the address. */
  countryCode?: Maybe<CountryCode>;
  /** The first name of the customer. */
  firstName?: Maybe<Scalars['String']>;
  /** This argument is deprecated: Not needed for 90% of mutations, and provided separately where it is needed. */
  id?: Maybe<Scalars['ID']>;
  /** The last name of the customer. */
  lastName?: Maybe<Scalars['String']>;
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   */
  phone?: Maybe<Scalars['String']>;
  /**
   * The region of the address, such as the province, state, or district. This
   * argument is deprecated: Use `provinceCode` instead.
   */
  province?: Maybe<Scalars['String']>;
  /**
   * The code for the region of the address, such as the province, state, or district.
   * For example QC for Quebec, Canada.
   */
  provinceCode?: Maybe<Scalars['String']>;
  /** The zip or postal code of the address. */
  zip?: Maybe<Scalars['String']>;
};

/** Manual discount applications capture the intentions of a discount that was manually created for an order. */
export type ManualDiscountApplication = DiscountApplication & {
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethod;
  /** The description of the discount application. */
  description?: Maybe<Scalars['String']>;
  /**
   * An ordered index that can be used to identify the discount application and indicate the precedence
   * of the discount application for calculations.
   */
  index: Scalars['Int'];
  /** How the discount amount is distributed on the discounted lines. */
  targetSelection: DiscountApplicationTargetSelection;
  /** Whether the discount is applied on line items or shipping lines. */
  targetType: DiscountApplicationTargetType;
  /** The title of the discount application. */
  title: Scalars['String'];
  /** The value of the discount application. */
  value: PricingValue;
};

/** A marketing activity represents marketing created by an app on behalf of the merchant. */
export type MarketingActivity = Node & {
  /** The url of the activity listing page of this marketing activity in the marketing section. */
  activityListUrl?: Maybe<Scalars['URL']>;
  /** Amount spent on this marketing activity. */
  adSpend?: Maybe<MoneyV2>;
  /** The app which created this marketing activity. */
  app: App;
  /** Errors generated when app was trying to complete this activity. */
  appErrors?: Maybe<MarketingActivityExtensionAppErrors>;
  /** The budget for this marketing activity. */
  budget?: Maybe<MarketingBudget>;
  /** The date and time when the marketing activity was created. */
  createdAt: Scalars['DateTime'];
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** The broad category of marketing, used for reporting aggregation. */
  marketingChannel: MarketingChannel;
  /** Associated marketing event of this marketing activity. */
  marketingEvent?: Maybe<MarketingEvent>;
  /** A contextual description of the marketing activity based on the platform and tactic used. */
  sourceAndMedium: Scalars['String'];
  /** Status helps to identify if this marketing activity has been completed, queued, failed etc. */
  status: MarketingActivityStatus;
  /**
   * The [date and time](
   *           https://help.shopify.com/https://en.wikipedia.org/wiki/ISO_8601
   *           ) when the activity's status last changed.
   */
  statusTransitionedAt?: Maybe<Scalars['DateTime']>;
  /** The method of marketing used for this marketing activity. */
  tactic: MarketingTactic;
  /** Expected status set by app in prior to an asynchronous operation. */
  targetStatus?: Maybe<MarketingActivityStatus>;
  /** Title of this marketing activity. */
  title: Scalars['String'];
  /** The date and time when the marketing activity was updated. */
  updatedAt: Scalars['DateTime'];
  /** The set of UTM parameters being tracked for this marketing activity. */
  utmParameters?: Maybe<UtmParameters>;
};

/** This type combines budget amount and its marketing budget type. */
export type MarketingActivityBudgetInput = {
  /** Budget type for marketing activity. */
  budgetType?: Maybe<MarketingBudgetBudgetType>;
  /** Amount of budget for the marketing activity. */
  total?: Maybe<MoneyInput>;
};

export type MarketingActivityConnection = {
  /** A list of edges. */
  edges: Array<MarketingActivityEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type MarketingActivityEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of MarketingActivityEdge. */
  node: MarketingActivity;
};

/** The error code resulted from the marketing activity extension integration. */
export enum MarketingActivityExtensionAppErrorCode {
  /** The shop/user must be onboarded to use the app. */
  NotOnboardedError = 'NOT_ONBOARDED_ERROR',
  /** The app has returned validation errors. */
  ValidationError = 'VALIDATION_ERROR',
  /** The app is not responding or returning unexpected data. */
  ApiError = 'API_ERROR',
  /** The app has returned an error when invoking the platform. */
  PlatformError = 'PLATFORM_ERROR',
  /** The app needs to be installed. */
  InstallRequiredError = 'INSTALL_REQUIRED_ERROR',
}

/** Represents errors returned from apps when using the marketing activity extension. */
export type MarketingActivityExtensionAppErrors = {
  /** The app error type. */
  code: MarketingActivityExtensionAppErrorCode;
  /** The list of errors returned by the app. */
  userErrors: Array<UserError>;
};

/** The set of valid sort keys for the MarketingActivity query. */
export enum MarketingActivitySortKeys {
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
}

/** Status helps to identify if this marketing activity has been completed, queued, failed etc. */
export enum MarketingActivityStatus {
  /** This marketing activity is currently running. */
  Active = 'ACTIVE',
  /** This marketing activity is permanently unavailable. */
  Deleted = 'DELETED',
  /** This marketing activity was deleted and it was triggered from outside of Shopify. */
  DeletedExternally = 'DELETED_EXTERNALLY',
  /** This marketing activity is disconnected and no longer editable. */
  Disconnected = 'DISCONNECTED',
  /** This marketing activity is unable to run. */
  Failed = 'FAILED',
  /** This marketing activity has completed running. */
  Inactive = 'INACTIVE',
  /** This marketing activity is currently not running. */
  Paused = 'PAUSED',
  /** This marketing activity is pending creation on the app's platform. */
  Pending = 'PENDING',
  /** This marketing activity is scheduled to run. */
  Scheduled = 'SCHEDULED',
  /** There is no defined status for external marketing activities. */
  Undefined = 'UNDEFINED',
}

/** Specifies the input fields required to update a marketing activity. */
export type MarketingActivityUpdateInput = {
  /** The id for this marketing activity. */
  id: Scalars['ID'];
  /** The ID of the recommendation this marketing activity was created from, if one exists. */
  marketingRecommendationId?: Maybe<Scalars['ID']>;
  /** The title of this marketing activity. */
  title?: Maybe<Scalars['String']>;
  /** The budget for this marketing activity. */
  budget?: Maybe<MarketingActivityBudgetInput>;
  /**
   * The cumulative amount spent on this marketing activity. This argument is
   * deprecated: Use `MarketingEngagementCreate.MarketingEngagementInput.adSpend`
   * GraphQL to send the ad spend.
   */
  adSpend?: Maybe<MoneyInput>;
  /** The current state of the marketing activity. */
  status?: Maybe<MarketingActivityStatus>;
  /**
   * Specifies the
   * [Urchin Traffic Module (UTM) parameters](https://en.wikipedia.org/wiki/UTM_parameters)
   * that are associated with a related marketing campaign. UTMInput is required for all Marketing
   * tactics except Storefront App. This utm param can be only set once and never modified.
   */
  utm?: Maybe<UtmInput>;
  /**
   * A list of the items that were marketed in this marketing activity. Valid types for these items are:
   * * `Product`
   * * `Shop` (Must be your current shop).
   */
  marketedResources?: Maybe<Array<Scalars['ID']>>;
  /**
   * Encoded context provided by Shopify during the update marketing activity
   * callback. This argument is deprecated: This context is no longer needed by
   * Shopify in the callback.
   */
  context?: Maybe<Scalars['String']>;
  /** Error messages generated when app was trying to complete this activity. */
  errors?: Maybe<Scalars['JSON']>;
};

/** Return type for `marketingActivityUpdate` mutation. */
export type MarketingActivityUpdatePayload = {
  /** The updated marketing activity. */
  marketingActivity?: Maybe<MarketingActivity>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** This type combines budget amount and its marketing budget type. */
export type MarketingBudget = {
  /** The budget type for a marketing activity. */
  budgetType: MarketingBudgetBudgetType;
  /** The amount of budget for marketing activity. */
  total: MoneyV2;
};

/** The budget type for a marketing activity. */
export enum MarketingBudgetBudgetType {
  /** A daily budget. */
  Daily = 'DAILY',
  /** A budget for the lifetime of a marketing activity. */
  Lifetime = 'LIFETIME',
}

/**
 * The available marketing channels for a marketing activity or event. A marketing
 * channel is broad category of marketing, used for reporting aggregation.
 */
export enum MarketingChannel {
  /** Paid search. */
  Search = 'SEARCH',
  /** Displayed ads. */
  Display = 'DISPLAY',
  /** Social media. */
  Social = 'SOCIAL',
  /** Email. */
  Email = 'EMAIL',
  /** Referral links. */
  Referral = 'REFERRAL',
}

/** Marketing engagement represents customer activity taken on a marketing event. */
export type MarketingEngagement = {
  /** The total ad spend for the day, if the marketing event is a paid ad with a daily spend. */
  adSpend?: Maybe<MoneyV2>;
  /** The total number of clicks on the marketing event for the day. */
  clicksCount?: Maybe<Scalars['Int']>;
  /** The total number of comments for the day. */
  commentsCount?: Maybe<Scalars['Int']>;
  /** The total number of complaints for the day. */
  complaintsCount?: Maybe<Scalars['Int']>;
  /** The total number of fails for the day. */
  failsCount?: Maybe<Scalars['Int']>;
  /** The total number of favorites for the day. */
  favoritesCount?: Maybe<Scalars['Int']>;
  /** The date time at which the data was fetched. */
  fetchedAt?: Maybe<Scalars['DateTime']>;
  /** The total number of impressions for the day. */
  impressionsCount?: Maybe<Scalars['Int']>;
  /** Whether the engagements are reported as lifetime values rather than daily totals. */
  isCumulative?: Maybe<Scalars['Boolean']>;
  /** The marketing activity related to this engagement. */
  marketingActivity: MarketingActivity;
  /** The date that these engagements occurred on. */
  occurredOn: Scalars['Date'];
  /** The total number of sends for the day. */
  sendsCount?: Maybe<Scalars['Int']>;
  /** The total number of shares for the day. */
  sharesCount?: Maybe<Scalars['Int']>;
  /** The total number of unique clicks for the day. */
  uniqueClicksCount?: Maybe<Scalars['Int']>;
  /** The total number of unique views for the day. */
  uniqueViewsCount?: Maybe<Scalars['Int']>;
  /** The total number of unsubscribes for the day. */
  unsubscribesCount?: Maybe<Scalars['Int']>;
  /** The UTC Offset that the app is using to determine which date to allocate spend to. */
  utcOffset?: Maybe<Scalars['UtcOffset']>;
  /** The total number of views for the day. */
  viewsCount?: Maybe<Scalars['Int']>;
};

/** Return type for `marketingEngagementCreate` mutation. */
export type MarketingEngagementCreatePayload = {
  /** The marketing engagement that was created. */
  marketingEngagement?: Maybe<MarketingEngagement>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** This object represents marketing engagement input fields for a marketing engagement. */
export type MarketingEngagementInput = {
  /** The date that these engagements occurred on. */
  occurredOn: Scalars['Date'];
  /** The total number of impressions for the day. */
  impressionsCount?: Maybe<Scalars['Int']>;
  /** The total number of views for the day. */
  viewsCount?: Maybe<Scalars['Int']>;
  /** The total number of clicks on the marketing event for the day. */
  clicksCount?: Maybe<Scalars['Int']>;
  /** The total number of shares for the day. */
  sharesCount?: Maybe<Scalars['Int']>;
  /** The total number of favorites for the day. */
  favoritesCount?: Maybe<Scalars['Int']>;
  /** The total number of comments for the day. */
  commentsCount?: Maybe<Scalars['Int']>;
  /** The total number of unsubscribes for the day. */
  unsubscribesCount?: Maybe<Scalars['Int']>;
  /** The total number of complaints for the day. */
  complaintsCount?: Maybe<Scalars['Int']>;
  /** The total number of fails for the day. */
  failsCount?: Maybe<Scalars['Int']>;
  /** The total number of sends for the day. */
  sendsCount?: Maybe<Scalars['Int']>;
  /** The total number of unique views for the day. */
  uniqueViewsCount?: Maybe<Scalars['Int']>;
  /** The total number of unique clicks for the day. */
  uniqueClicksCount?: Maybe<Scalars['Int']>;
  /** The total ad spend for the day, if the marketing event is a paid ad with a daily spend. */
  adSpend?: Maybe<MoneyInput>;
  /** Whether the engagements are reported as lifetime values rather than daily totals. */
  isCumulative?: Maybe<Scalars['Boolean']>;
  /** The UTC Offset that the app is using to determine which date to allocate spend to. */
  utcOffset?: Maybe<Scalars['UtcOffset']>;
  /** The date time at which the data was fetched. */
  fetchedAt?: Maybe<Scalars['DateTime']>;
};

/** Represents actions that market a merchant's store or products. */
export type MarketingEvent = Node &
  LegacyInteroperability & {
    /** The app that the marketing event is attributed to. */
    app: App;
    /** The marketing channel used by the marketing event. */
    channel?: Maybe<MarketingChannel>;
    /** A human-readable description of the marketing event. */
    description?: Maybe<Scalars['String']>;
    /** The date and time when the marketing event ended. */
    endedAt?: Maybe<Scalars['DateTime']>;
    /** Globally unique identifier. */
    id: Scalars['ID'];
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars['UnsignedInt64'];
    /** The URL where the marketing event can be managed. */
    manageUrl?: Maybe<Scalars['URL']>;
    /** The URL where the marketing event can be previewed. */
    previewUrl?: Maybe<Scalars['URL']>;
    /** An optional ID that helps Shopify validate engagement data. */
    remoteId?: Maybe<Scalars['String']>;
    /** The date and time when the marketing event is scheduled to end. */
    scheduledToEndAt?: Maybe<Scalars['DateTime']>;
    /**
     * Where the `MarketingEvent` occurred and what kind of content was used.
     * Because `utmSource` and `utmMedium` are often used interchangeably, this is
     * based on a combination of `marketingChannel`, `referringDomain`, and `type` to
     * provide a consistent representation for any given piece of marketing
     * regardless of the app that created it.
     */
    sourceAndMedium: Scalars['String'];
    /** The date and time when the marketing event started. */
    startedAt: Scalars['DateTime'];
    /**
     * The display text for the marketing event type.
     * @deprecated Use `sourceAndMedium` instead
     */
    targetTypeDisplayText: Scalars['String'];
    /** The marketing event type. */
    type: MarketingTactic;
    /** The name of the marketing campaign. */
    utmCampaign?: Maybe<Scalars['String']>;
    /** The medium that the marketing campaign is using. Example values: `cpc`, `banner`. */
    utmMedium?: Maybe<Scalars['String']>;
    /** The referrer of the marketing event. Example values: `google`, `newsletter`. */
    utmSource?: Maybe<Scalars['String']>;
  };

export type MarketingEventConnection = {
  /** A list of edges. */
  edges: Array<MarketingEventEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type MarketingEventEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of MarketingEventEdge. */
  node: MarketingEvent;
};

/** The set of valid sort keys for the MarketingEvent query. */
export enum MarketingEventSortKeys {
  /** Sort by the `started_at` value. */
  StartedAt = 'STARTED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
}

/** The available types of marketing event. */
export enum MarketingTactic {
  /** An abandoned cart recovery email. */
  AbandonedCart = 'ABANDONED_CART',
  /** An ad, such as a Facebook ad. */
  Ad = 'AD',
  /** An affiliate link. */
  Affiliate = 'AFFILIATE',
  /** A link. */
  Link = 'LINK',
  /** A loyalty program. */
  Loyalty = 'LOYALTY',
  /** A messaging app, such as Facebook Messenger. */
  Message = 'MESSAGE',
  /** A newsletter. */
  Newsletter = 'NEWSLETTER',
  /** A notification in the Shopify admin. */
  Notification = 'NOTIFICATION',
  /** A blog post. */
  Post = 'POST',
  /** A retargeting ad. */
  Retargeting = 'RETARGETING',
  /** A transactional email. */
  Transactional = 'TRANSACTIONAL',
  /** Search engine optimization. */
  Seo = 'SEO',
  /** A direct visit to the online store. */
  Direct = 'DIRECT',
  /** Popup on merchant's store. */
  StorefrontApp = 'STOREFRONT_APP',
  /** A display ad. */
  Display = 'DISPLAY',
  /** Paid search. */
  Search = 'SEARCH',
  /** A follow-up email. */
  FollowUp = 'FOLLOW_UP',
  /** A promotional receipt. */
  Receipt = 'RECEIPT',
}

/** Represents a media interface. */
export type Media = {
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']>;
  /** The media content type. */
  mediaContentType: MediaContentType;
  /** Any errors which have occurred on the media. */
  mediaErrors: Array<MediaError>;
  /** The preview image for the media. */
  preview?: Maybe<MediaPreviewImage>;
  /** Current status of the media. */
  status: MediaStatus;
};

export type MediaConnection = {
  /** A list of edges. */
  edges: Array<MediaEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** The possible content types for a media object. */
export enum MediaContentType {
  /** A Shopify hosted video. */
  Video = 'VIDEO',
  /** An externally hosted video. */
  ExternalVideo = 'EXTERNAL_VIDEO',
  /** A 3d model. */
  Model_3D = 'MODEL_3D',
  /** A Shopify hosted image. */
  Image = 'IMAGE',
}

export type MediaEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of MediaEdge. */
  node: Media;
};

/** Represents a media error. */
export type MediaError = {
  /** Code representing the type of error. */
  code: MediaErrorCode;
  /** Additional details regarding the error. */
  details?: Maybe<Scalars['String']>;
  /** Translated error message. */
  message: Scalars['String'];
};

/** Error types for media. */
export enum MediaErrorCode {
  /** Media error has occured for unknown reason. */
  Unknown = 'UNKNOWN',
  /** Media could not be processed because the signed url was invalid. */
  InvalidSignedUrl = 'INVALID_SIGNED_URL',
  /** Media could not be processed because the image could not be downloaded. */
  ImageDownloadFailure = 'IMAGE_DOWNLOAD_FAILURE',
  /** Media could not be processed because the image could not be processed. */
  ImageProcessingFailure = 'IMAGE_PROCESSING_FAILURE',
  /** Media timed out because it is currently being modified by another operation. */
  MediaTimeoutError = 'MEDIA_TIMEOUT_ERROR',
  /** Media could not be created because the external video could not be found. */
  ExternalVideoNotFound = 'EXTERNAL_VIDEO_NOT_FOUND',
  /** Media could not be created because the external video is not listed or is private. */
  ExternalVideoUnlisted = 'EXTERNAL_VIDEO_UNLISTED',
  /** Media could not be created because the external video has an invalid aspect ratio. */
  ExternalVideoInvalidAspectRatio = 'EXTERNAL_VIDEO_INVALID_ASPECT_RATIO',
  /** Video failed validation. */
  VideoValidationError = 'VIDEO_VALIDATION_ERROR',
  /** Model failed validation. */
  Model3DValidationError = 'MODEL3D_VALIDATION_ERROR',
}

/** Represents a Shopify hosted image. */
export type MediaImage = Node &
  Media & {
    /** A word or phrase to share the nature or contents of a media. */
    alt?: Maybe<Scalars['String']>;
    /** Globally unique identifier. */
    id: Scalars['ID'];
    /** The image for the media. */
    image?: Maybe<Image>;
    /** The media content type. */
    mediaContentType: MediaContentType;
    /** Any errors which have occurred on the media. */
    mediaErrors: Array<MediaError>;
    /** The preview image for the media. */
    preview?: Maybe<MediaPreviewImage>;
    /** Current status of the media. */
    status: MediaStatus;
  };

/** Represents the preview image for a media. */
export type MediaPreviewImage = {
  /** The preview image for the media. */
  image?: Maybe<Image>;
  /** Current status of the preview image. */
  status: MediaPreviewImageStatus;
};

/** The possible statuses for a media preview image. */
export enum MediaPreviewImageStatus {
  /** Preview image is uploaded but not yet processed. */
  Uploaded = 'UPLOADED',
  /** Preview image is being processed. */
  Processing = 'PROCESSING',
  /** Preview image is ready to be displayed. */
  Ready = 'READY',
  /** Preview image processing has failed. */
  Failed = 'FAILED',
}

/** The possible statuses for a media object. */
export enum MediaStatus {
  /** Media has been uploaded but not yet processed. */
  Uploaded = 'UPLOADED',
  /** Media is being processed. */
  Processing = 'PROCESSING',
  /** Media is ready to be displayed. */
  Ready = 'READY',
  /** Media processing has failed. */
  Failed = 'FAILED',
}

/** Represents an error that happens during execution of a Media query or mutation. */
export type MediaUserError = DisplayableError & {
  /** Error code to uniquely identify the error. */
  code?: Maybe<MediaUserErrorCode>;
  /** Path to the input field which caused the error. */
  field?: Maybe<Array<Scalars['String']>>;
  /** The error message. */
  message: Scalars['String'];
};

/** Possible error codes that could be returned by a media mutation. */
export enum MediaUserErrorCode {
  /** Input value is invalid. */
  Invalid = 'INVALID',
  /** Video validation failed. */
  VideoValidationError = 'VIDEO_VALIDATION_ERROR',
  /** Model validation failed. */
  Model3DValidationError = 'MODEL3D_VALIDATION_ERROR',
  /** Video creation throttle was exceeded. */
  VideoThrottleExceeded = 'VIDEO_THROTTLE_EXCEEDED',
  /** Model3d creation throttle was exceeded. */
  Model3DThrottleExceeded = 'MODEL3D_THROTTLE_EXCEEDED',
  /** Exceeded the limit of media per product. */
  ProductMediaLimitExceeded = 'PRODUCT_MEDIA_LIMIT_EXCEEDED',
  /** Exceeded the limit of media per shop. */
  ShopMediaLimitExceeded = 'SHOP_MEDIA_LIMIT_EXCEEDED',
  /** Product does not exist. */
  ProductDoesNotExist = 'PRODUCT_DOES_NOT_EXIST',
  /** Media does not exist. */
  MediaDoesNotExist = 'MEDIA_DOES_NOT_EXIST',
  /** Media cannot be modified. It is currently being modified by another operation. */
  MediaCannotBeModified = 'MEDIA_CANNOT_BE_MODIFIED',
}

/**
 * Metafields represent custom metadata attached to a resource. Metafields can be sorted into namespaces and are
 * composed of keys, values, and value types.
 */
export type Metafield = Node &
  LegacyInteroperability & {
    /** The date and time when the metafield was created. */
    createdAt: Scalars['DateTime'];
    /** The description of a metafield. */
    description?: Maybe<Scalars['String']>;
    /** Globally unique identifier. */
    id: Scalars['ID'];
    /** The key name for a metafield. */
    key: Scalars['String'];
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars['UnsignedInt64'];
    /** The namespace for a metafield. */
    namespace: Scalars['String'];
    /** Owner type of a metafield visible to the Storefront API. */
    ownerType: MetafieldOwnerType;
    /** The date and time when the metafield was updated. */
    updatedAt: Scalars['DateTime'];
    /** The value of a metafield. */
    value: Scalars['String'];
    /** Represents the metafield value type. */
    valueType: MetafieldValueType;
  };

export type MetafieldConnection = {
  /** A list of edges. */
  edges: Array<MetafieldEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Specifies the input fields to delete a metafield. */
export type MetafieldDeleteInput = {
  /** The ID of the metafield to delete. */
  id: Scalars['ID'];
};

/** Return type for `metafieldDelete` mutation. */
export type MetafieldDeletePayload = {
  /** The ID of the deleted metafield. */
  deletedId?: Maybe<Scalars['ID']>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

export type MetafieldEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of MetafieldEdge. */
  node: Metafield;
};

/** Specifies the input fields for a metafield. */
export type MetafieldInput = {
  /** The description of the metafield . */
  description?: Maybe<Scalars['String']>;
  /** The unique ID of the metafield. */
  id?: Maybe<Scalars['ID']>;
  /** The key name of the metafield. */
  key?: Maybe<Scalars['String']>;
  /** The namespace for a metafield. */
  namespace?: Maybe<Scalars['String']>;
  /** The value of a metafield. */
  value?: Maybe<Scalars['String']>;
  /** The value type of a metafield. */
  valueType?: Maybe<MetafieldValueType>;
};

/** Metafield owner types. */
export enum MetafieldOwnerType {
  /** A metafield owner type. */
  Article = 'ARTICLE',
  /** A metafield owner type. */
  Blog = 'BLOG',
  /** A metafield owner type. */
  Collection = 'COLLECTION',
  /** A metafield owner type. */
  Customer = 'CUSTOMER',
  /** A metafield owner type. */
  Draftorder = 'DRAFTORDER',
  /** A metafield owner type. */
  Order = 'ORDER',
  /** A metafield owner type. */
  Page = 'PAGE',
  /** A metafield owner type. */
  Product = 'PRODUCT',
  /** A metafield owner type. */
  Productimage = 'PRODUCTIMAGE',
  /** A metafield owner type. */
  Productvariant = 'PRODUCTVARIANT',
  /** A metafield owner type. */
  Shop = 'SHOP',
}

/** Represents a whitelist record that enables a metafield to be visible to the storefront. */
export type MetafieldStorefrontVisibility = Node &
  LegacyInteroperability & {
    /** The date and time when the whitelist record was created. */
    createdAt: Scalars['DateTime'];
    /** Globally unique identifier. */
    id: Scalars['ID'];
    /** Key of a metafield in the visibility whitelist. */
    key: Scalars['String'];
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars['UnsignedInt64'];
    /** Namespace of a metafield in the visibility whitelist. */
    namespace: Scalars['String'];
    /** Owner type of a metafield in the visibility whitelist. */
    ownerType: MetafieldOwnerType;
    /** The date and time when the whitelist record was updated. */
    updatedAt: Scalars['DateTime'];
  };

export type MetafieldStorefrontVisibilityConnection = {
  /** A list of edges. */
  edges: Array<MetafieldStorefrontVisibilityEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Return type for `metafieldStorefrontVisibilityCreate` mutation. */
export type MetafieldStorefrontVisibilityCreatePayload = {
  /** The metafield storefront visibility that was created. */
  metafieldStorefrontVisibility?: Maybe<MetafieldStorefrontVisibility>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `metafieldStorefrontVisibilityDelete` mutation. */
export type MetafieldStorefrontVisibilityDeletePayload = {
  /** The ID of the deleted metafield storefront visibility. */
  deletedMetafieldStorefrontVisibilityId?: Maybe<Scalars['ID']>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

export type MetafieldStorefrontVisibilityEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of MetafieldStorefrontVisibilityEdge. */
  node: MetafieldStorefrontVisibility;
};

/** Specifies the input fields for a MetafieldStorefrontVisibilityInput. */
export type MetafieldStorefrontVisibilityInput = {
  /** The namespace of the metafield to be visible to the storefront api. */
  namespace: Scalars['String'];
  /** The key of the metafield to be visible to the storefront api. */
  key: Scalars['String'];
  /** The core resource ( e.g.: Product ) that owns this metafield. */
  ownerType: MetafieldOwnerType;
};

/** Metafield value types. */
export enum MetafieldValueType {
  /** A string. */
  String = 'STRING',
  /** An integer. */
  Integer = 'INTEGER',
  /** A JSON string. */
  JsonString = 'JSON_STRING',
}

/** The set of valid sort keys for the MethodDefinition query. */
export enum MethodDefinitionSortKeys {
  /** Sort by the `rate_provider_type` value. */
  RateProviderType = 'RATE_PROVIDER_TYPE',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
}

/** Represents a Shopify hosted 3D model. */
export type Model3d = Node &
  Media & {
    /** A word or phrase to share the nature or contents of a media. */
    alt?: Maybe<Scalars['String']>;
    /** The filename of the 3d model. */
    filename: Scalars['String'];
    /** Globally unique identifier. */
    id: Scalars['ID'];
    /** The media content type. */
    mediaContentType: MediaContentType;
    /** Any errors which have occurred on the media. */
    mediaErrors: Array<MediaError>;
    /** The original source for a 3d model. */
    originalSource: Model3dSource;
    /** The preview image for the media. */
    preview?: Maybe<MediaPreviewImage>;
    /** The sources for a 3d model. */
    sources: Array<Model3dSource>;
    /** Current status of the media. */
    status: MediaStatus;
  };

/** Represents a source for a Shopify hosted 3d model. */
export type Model3dSource = {
  /** The filesize of the 3d model. */
  filesize: Scalars['Int'];
  /** The format of the 3d model. */
  format: Scalars['String'];
  /** The MIME type of the 3d model. */
  mimeType: Scalars['String'];
  /** The URL of the 3d model. */
  url: Scalars['String'];
};

/** A collection of monetary values in their respective currencies. */
export type MoneyBag = {
  /** Amount in presentment currency. */
  presentmentMoney: MoneyV2;
  /** Amount in shop currency. */
  shopMoney: MoneyV2;
};

/** Specifies the fields for a monetary value with currency. */
export type MoneyInput = {
  /** Decimal money amount. */
  amount: Scalars['Decimal'];
  /** Currency of the money. */
  currencyCode: CurrencyCode;
};

/**
 * A monetary value with currency.
 *
 * To format currencies, combine this type's amount and currencyCode fields with your client's locale.
 *
 * For example, in JavaScript you could use Intl.NumberFormat:
 *
 * ```js
 * new Intl.NumberFormat(locale, {
 *   style: 'currency',
 *   currency: currencyCode
 * }).format(amount);
 * ```
 *
 * Other formatting libraries include:
 *
 * * iOS - [NumberFormatter](https://developer.apple.com/documentation/foundation/numberformatter)
 * * Android - [NumberFormat](https://developer.android.com/reference/java/text/NumberFormat.html)
 * * PHP - [NumberFormatter](http://php.net/manual/en/class.numberformatter.php)
 *
 * For a more general solution, the [Unicode CLDR number formatting database] is available with many implementations
 * (such as [TwitterCldr](https://github.com/twitter/twitter-cldr-rb)).
 */
export type MoneyV2 = {
  /** Decimal money amount. */
  amount: Scalars['Decimal'];
  /** Currency of the money. */
  currencyCode: CurrencyCode;
};

/** An individual move to perform of an object to a position. */
export type MoveInput = {
  /** The ID of the object to be moved. */
  id: Scalars['ID'];
  /** The new position of the object in the set, using a 0 based index. */
  newPosition: Scalars['UnsignedInt64'];
};

/** The schema's entry point for all mutation operations. */
export type Mutation = {
  /** Allows an app to create a credit for a shop that can be used towards future app purchases. */
  appCreditCreate?: Maybe<AppCreditCreatePayload>;
  /** Allows an app to charge a shop for features or services one time. */
  appPurchaseOneTimeCreate?: Maybe<AppPurchaseOneTimeCreatePayload>;
  /** Cancels an app subscription on a store. */
  appSubscriptionCancel?: Maybe<AppSubscriptionCancelPayload>;
  /** Allows an app to charge a store for features or services on a recurring basis. */
  appSubscriptionCreate?: Maybe<AppSubscriptionCreatePayload>;
  /** Updates the app plan's pricing details attached to an app subscription. */
  appSubscriptionLineItemUpdate?: Maybe<AppSubscriptionLineItemUpdatePayload>;
  /** Allows an app to charge a store for usage. */
  appUsageRecordCreate?: Maybe<AppUsageRecordCreatePayload>;
  /**
   * Starts the cancelation process of a running bulk operation.
   *
   * There may be a short delay from when a cancelation starts until the operation is actually canceled.
   */
  bulkOperationCancel?: Maybe<BulkOperationCancelPayload>;
  /**
   * Creates and runs a bulk operation query.
   *
   * See the [bulk operations guide](https://help.shopify.com/api/guides/bulk-operations) for more details.
   */
  bulkOperationRunQuery?: Maybe<BulkOperationRunQueryPayload>;
  /** Adds products to a collection. */
  collectionAddProducts?: Maybe<CollectionAddProductsPayload>;
  /** Creates a collection. */
  collectionCreate?: Maybe<CollectionCreatePayload>;
  /** Deletes a collection. */
  collectionDelete?: Maybe<CollectionDeletePayload>;
  /**
   * Publishes a collection to a channel.
   * @deprecated Use `publishablePublish` instead
   */
  collectionPublish?: Maybe<CollectionPublishPayload>;
  /**
   * Removes a set of products from a given collection. It can take a long time to
   * run. Instead of returning a collection it returns a job, which should be polled.
   */
  collectionRemoveProducts?: Maybe<CollectionRemoveProductsPayload>;
  /** Asynchronously reorders a set of products from a given collection. */
  collectionReorderProducts?: Maybe<CollectionReorderProductsPayload>;
  /**
   * Unpublishes a collection.
   * @deprecated Use `publishableUnpublish` instead
   */
  collectionUnpublish?: Maybe<CollectionUnpublishPayload>;
  /** Updates a collection. */
  collectionUpdate?: Maybe<CollectionUpdatePayload>;
  /** Add tax exemptions to a customer. */
  customerAddTaxExemptions?: Maybe<CustomerAddTaxExemptionsPayload>;
  /** Creates a new customer. */
  customerCreate?: Maybe<CustomerCreatePayload>;
  /** Deletes a customer. */
  customerDelete?: Maybe<CustomerDeletePayload>;
  /** Generates a new account activation URL. */
  customerGenerateAccountActivationUrl?: Maybe<
    CustomerGenerateAccountActivationUrlPayload
  >;
  /** Remove tax exemptions from a customer. */
  customerRemoveTaxExemptions?: Maybe<CustomerRemoveTaxExemptionsPayload>;
  /** Replace tax exemptions on a customer. */
  customerReplaceTaxExemptions?: Maybe<CustomerReplaceTaxExemptionsPayload>;
  /** Updates a customer's attributes. */
  customerUpdate?: Maybe<CustomerUpdatePayload>;
  /** Updates a customer's default address. */
  customerUpdateDefaultAddress?: Maybe<CustomerUpdateDefaultAddressPayload>;
  /** Creates a delivery profile. */
  deliveryProfileCreate?: Maybe<DeliveryProfileCreatePayload>;
  /** Enqueues the deletion/removal of a delivery profile. */
  deliveryProfileRemove?: Maybe<DeliveryProfileRemovePayload>;
  /** Updates a delivery profile. */
  deliveryProfileUpdate?: Maybe<DeliveryProfileUpdatePayload>;
  /** Set the delivery settings for a shop. */
  deliverySettingUpdate?: Maybe<DeliverySettingUpdatePayload>;
  /** Assign a location as the shipping origin while in legacy compatibility mode profiles. */
  deliveryShippingOriginAssign?: Maybe<DeliveryShippingOriginAssignPayload>;
  /** Activates an automatic discount. */
  discountAutomaticActivate?: Maybe<DiscountAutomaticActivatePayload>;
  /** Creates a basic automatic discount. */
  discountAutomaticBasicCreate?: Maybe<DiscountAutomaticBasicCreatePayload>;
  /** Updates a basic automatic discount using its ID and input. */
  discountAutomaticBasicUpdate?: Maybe<DiscountAutomaticBasicUpdatePayload>;
  /**
   * Asynchronously delete automatic discounts in bulk if a `search` or `saved_search_id` argument is provided or if a
   * maximum discount threshold is reached (1,000). Otherwise, deletions will occur inline.
   * **Warning:** All automatic discounts will be deleted if a blank `search` argument is provided.
   */
  discountAutomaticBulkDelete?: Maybe<DiscountAutomaticBulkDeletePayload>;
  /** Creates a BXGY automatic discount. */
  discountAutomaticBxgyCreate?: Maybe<DiscountAutomaticBxgyCreatePayload>;
  /** Updates a BXGY automatic discount using its ID and input. */
  discountAutomaticBxgyUpdate?: Maybe<DiscountAutomaticBxgyUpdatePayload>;
  /** Deactivates an automatic discount. */
  discountAutomaticDeactivate?: Maybe<DiscountAutomaticDeactivatePayload>;
  /** Deletes an automatic discount. */
  discountAutomaticDelete?: Maybe<DiscountAutomaticDeletePayload>;
  /** Activates a code discount. */
  discountCodeActivate?: Maybe<DiscountCodeActivatePayload>;
  /** Creates a basic code discount. */
  discountCodeBasicCreate?: Maybe<DiscountCodeBasicCreatePayload>;
  /** Updates a basic code discount. */
  discountCodeBasicUpdate?: Maybe<DiscountCodeBasicUpdatePayload>;
  /** Creates a BXGY code discount. */
  discountCodeBxgyCreate?: Maybe<DiscountCodeBxgyCreatePayload>;
  /** Updates a BXGY code discount. */
  discountCodeBxgyUpdate?: Maybe<DiscountCodeBxgyUpdatePayload>;
  /** Deactivates a code discount. */
  discountCodeDeactivate?: Maybe<DiscountCodeDeactivatePayload>;
  /** Deletes a code discount. */
  discountCodeDelete?: Maybe<DiscountCodeDeletePayload>;
  /** Creates a free shipping code discount. */
  discountCodeFreeShippingCreate?: Maybe<DiscountCodeFreeShippingCreatePayload>;
  /** Updates a free shipping code discount. */
  discountCodeFreeShippingUpdate?: Maybe<DiscountCodeFreeShippingUpdatePayload>;
  /**
   * Calculates the properties of a draft order. Useful for determining information
   * such as total taxes or price without actually creating a draft order.
   */
  draftOrderCalculate?: Maybe<DraftOrderCalculatePayload>;
  /** Completes a draft order and creates an order. */
  draftOrderComplete?: Maybe<DraftOrderCompletePayload>;
  /** Creates a draft order. */
  draftOrderCreate?: Maybe<DraftOrderCreatePayload>;
  /** Deletes a draft order. */
  draftOrderDelete?: Maybe<DraftOrderDeletePayload>;
  /** Previews a draft order invoice email. */
  draftOrderInvoicePreview?: Maybe<DraftOrderInvoicePreviewPayload>;
  /** Sends an email invoice for a draft order. */
  draftOrderInvoiceSend?: Maybe<DraftOrderInvoiceSendPayload>;
  /** Updates a draft order. */
  draftOrderUpdate?: Maybe<DraftOrderUpdatePayload>;
  /**
   * Triggers a workflow defined by the merchant in Shopify Flow. To learn more,
   * see [_Create Shopify Flow triggers_](https://help.shopify.com/api/embedded-apps/app-extensions/flow/create-triggers).
   */
  flowTriggerReceive?: Maybe<FlowTriggerReceivePayload>;
  /** Cancels a fulfillment. */
  fulfillmentCancel?: Maybe<FulfillmentCancelPayload>;
  /**
   * Creates a fulfillment for an order.
   * @deprecated Use the new [fulfillmentOrder](https://shopify.dev/tutorials/manage-fulfillments-with-fulfillment-and-fulfillmentorder-resources) APIs to manage fulfillments.
   */
  fulfillmentCreate?: Maybe<FulfillmentCreatePayload>;
  /**
   * Creates a fulfillment for one or many fulfillment orders.
   * The fulfillment orders are associated with the same order and are assigned to the same location.
   */
  fulfillmentCreateV2?: Maybe<FulfillmentCreateV2Payload>;
  /** Accept a cancellation request sent to a fulfillment service for a fulfillment order. */
  fulfillmentOrderAcceptCancellationRequest?: Maybe<
    FulfillmentOrderAcceptCancellationRequestPayload
  >;
  /** Accepts a fulfillment request sent to a fulfillment service for a fulfillment order. */
  fulfillmentOrderAcceptFulfillmentRequest?: Maybe<
    FulfillmentOrderAcceptFulfillmentRequestPayload
  >;
  /** Marks a fulfillment order as canceled. */
  fulfillmentOrderCancel?: Maybe<FulfillmentOrderCancelPayload>;
  /**
   * Marks an in-progress fulfillment order as incomplete, indicating the
   * fulfillment service is unable to ship any remaining items and intends to close
   * the fulfillment order.
   */
  fulfillmentOrderClose?: Maybe<FulfillmentOrderClosePayload>;
  /** Moves a fulfillment order to a new location. */
  fulfillmentOrderMove?: Maybe<FulfillmentOrderMovePayload>;
  /** Rejects a cancellation request sent to a fulfillment service for a fulfillment order. */
  fulfillmentOrderRejectCancellationRequest?: Maybe<
    FulfillmentOrderRejectCancellationRequestPayload
  >;
  /** Rejects a fulfillment request sent to a fulfillment service for a fulfillment order. */
  fulfillmentOrderRejectFulfillmentRequest?: Maybe<
    FulfillmentOrderRejectFulfillmentRequestPayload
  >;
  /** Sends a cancellation request to the fulfillment service of a fulfillment order. */
  fulfillmentOrderSubmitCancellationRequest?: Maybe<
    FulfillmentOrderSubmitCancellationRequestPayload
  >;
  /** Sends a fulfillment request to the fulfillment service of a fulfillment order. */
  fulfillmentOrderSubmitFulfillmentRequest?: Maybe<
    FulfillmentOrderSubmitFulfillmentRequestPayload
  >;
  /** Creates a fulfillment service. */
  fulfillmentServiceCreate?: Maybe<FulfillmentServiceCreatePayload>;
  /** Deletes a fulfillment service. */
  fulfillmentServiceDelete?: Maybe<FulfillmentServiceDeletePayload>;
  /** Updates a fulfillment service. */
  fulfillmentServiceUpdate?: Maybe<FulfillmentServiceUpdatePayload>;
  /**
   * Updates tracking information for a fulfillment.
   * @deprecated Use the new [fulfillmentOrder](https://shopify.dev/tutorials/manage-fulfillments-with-fulfillment-and-fulfillmentorder-resources) APIs to manage fulfillments.
   */
  fulfillmentTrackingInfoUpdate?: Maybe<FulfillmentTrackingInfoUpdatePayload>;
  /** Updates tracking information for a fulfillment. */
  fulfillmentTrackingInfoUpdateV2?: Maybe<
    FulfillmentTrackingInfoUpdateV2Payload
  >;
  /** Activate an inventory item at a location. */
  inventoryActivate?: Maybe<InventoryActivatePayload>;
  /** Adjusts the inventory by a certain quantity. */
  inventoryAdjustQuantity?: Maybe<InventoryAdjustQuantityPayload>;
  /** Adjusts the inventory at a location for multiple inventory items. */
  inventoryBulkAdjustQuantityAtLocation?: Maybe<
    InventoryBulkAdjustQuantityAtLocationPayload
  >;
  /** Deactivate an inventory item at a location. */
  inventoryDeactivate?: Maybe<InventoryDeactivatePayload>;
  /** Updates an inventory item. */
  inventoryItemUpdate?: Maybe<InventoryItemUpdatePayload>;
  /** Kit Skill requested by developer for app and shop. */
  kitSkillTriggerRequest?: Maybe<KitSkillTriggerRequestPayload>;
  /** Updates a marketing activity. */
  marketingActivityUpdate?: Maybe<MarketingActivityUpdatePayload>;
  /** Creates a new marketing event engagement for a marketing activity. */
  marketingEngagementCreate?: Maybe<MarketingEngagementCreatePayload>;
  /** Deletes a metafield. */
  metafieldDelete?: Maybe<MetafieldDeletePayload>;
  /** Makes a Metafield with a specific namespace and key visible to the storefront API. */
  metafieldStorefrontVisibilityCreate?: Maybe<
    MetafieldStorefrontVisibilityCreatePayload
  >;
  /** Deletes a Metafield Storefront Visibility. */
  metafieldStorefrontVisibilityDelete?: Maybe<
    MetafieldStorefrontVisibilityDeletePayload
  >;
  /** Captures from an authorized transaction on an order. */
  orderCapture?: Maybe<OrderCapturePayload>;
  /** Closes an open order. */
  orderClose?: Maybe<OrderClosePayload>;
  /** Add a custom item to the order. */
  orderEditAddCustomItem?: Maybe<OrderEditAddCustomItemPayload>;
  /** Add a line item from an existing product variant. */
  orderEditAddVariant?: Maybe<OrderEditAddVariantPayload>;
  /** Start editing an order. */
  orderEditBegin?: Maybe<OrderEditBeginPayload>;
  /** Applies and saves staged changes to an order. */
  orderEditCommit?: Maybe<OrderEditCommitPayload>;
  /** Set the quantity of an item on the order. */
  orderEditSetQuantity?: Maybe<OrderEditSetQuantityPayload>;
  /** Marks an order as paid. */
  orderMarkAsPaid?: Maybe<OrderMarkAsPaidPayload>;
  /** Opens a closed order. */
  orderOpen?: Maybe<OrderOpenPayload>;
  /** Updates an order. */
  orderUpdate?: Maybe<OrderUpdatePayload>;
  /** Activate a price rule. */
  priceRuleActivate?: Maybe<PriceRuleActivatePayload>;
  /** Create a price rule using the input. */
  priceRuleCreate?: Maybe<PriceRuleCreatePayload>;
  /** Deactivate a price rule. */
  priceRuleDeactivate?: Maybe<PriceRuleDeactivatePayload>;
  /** Delete a price rule. */
  priceRuleDelete?: Maybe<PriceRuleDeletePayload>;
  /** Create a discount code for a price rule. */
  priceRuleDiscountCodeCreate?: Maybe<PriceRuleDiscountCodeCreatePayload>;
  /** Update a discount code for a price rule. */
  priceRuleDiscountCodeUpdate?: Maybe<PriceRuleDiscountCodeUpdatePayload>;
  /** Update a price rule using its id and an input. */
  priceRuleUpdate?: Maybe<PriceRuleUpdatePayload>;
  /** Deletes a private metafield. */
  privateMetafieldDelete?: Maybe<PrivateMetafieldDeletePayload>;
  /** Creates or update a private metafield. */
  privateMetafieldUpsert?: Maybe<PrivateMetafieldUpsertPayload>;
  /** Appends images to a product. */
  productAppendImages?: Maybe<ProductAppendImagesPayload>;
  /** Creates a product. */
  productCreate?: Maybe<ProductCreatePayload>;
  /** Creates media for a product. */
  productCreateMedia?: Maybe<ProductCreateMediaPayload>;
  /** Deletes a product. */
  productDelete?: Maybe<ProductDeletePayload>;
  /** Removes a product images from the product. */
  productDeleteImages?: Maybe<ProductDeleteImagesPayload>;
  /** Deletes media for a product. */
  productDeleteMedia?: Maybe<ProductDeleteMediaPayload>;
  /** Duplicates a product. */
  productDuplicate?: Maybe<ProductDuplicatePayload>;
  /** Updates an image of a product. */
  productImageUpdate?: Maybe<ProductImageUpdatePayload>;
  /**
   * Publishes a product.
   * @deprecated Use `publishablePublish` instead
   */
  productPublish?: Maybe<ProductPublishPayload>;
  /** Asynchronously reorders a set of images for a given product. */
  productReorderImages?: Maybe<ProductReorderImagesPayload>;
  /** Asynchronously Reoders the media attached to a product. */
  productReorderMedia?: Maybe<ProductReorderMediaPayload>;
  /**
   * Unpublishes a product.
   * @deprecated Use `publishableUnpublish` instead
   */
  productUnpublish?: Maybe<ProductUnpublishPayload>;
  /** Updates a product. */
  productUpdate?: Maybe<ProductUpdatePayload>;
  /** Updates media for a product. */
  productUpdateMedia?: Maybe<ProductUpdateMediaPayload>;
  /** Creates a product variant. */
  productVariantCreate?: Maybe<ProductVariantCreatePayload>;
  /** Deletes a product variant. */
  productVariantDelete?: Maybe<ProductVariantDeletePayload>;
  /** Updates a product variant. */
  productVariantUpdate?: Maybe<ProductVariantUpdatePayload>;
  /** Publishes a resource to a channel. */
  publishablePublish?: Maybe<PublishablePublishPayload>;
  /** Publishes a resource to current channel. */
  publishablePublishToCurrentChannel?: Maybe<
    PublishablePublishToCurrentChannelPayload
  >;
  /** Unpublishes a resource to a channel. */
  publishableUnpublish?: Maybe<PublishableUnpublishPayload>;
  /** Unpublishes a resource to current channel. */
  publishableUnpublishToCurrentChannel?: Maybe<
    PublishableUnpublishToCurrentChannelPayload
  >;
  /** Creates a refund. */
  refundCreate?: Maybe<RefundCreatePayload>;
  /** Creates a saved search. */
  savedSearchCreate?: Maybe<SavedSearchCreatePayload>;
  /** Delete a saved search. */
  savedSearchDelete?: Maybe<SavedSearchDeletePayload>;
  /** Update a saved search. */
  savedSearchUpdate?: Maybe<SavedSearchUpdatePayload>;
  /** Creates a new script tag. */
  scriptTagCreate?: Maybe<ScriptTagCreatePayload>;
  /** Deletes a script tag. */
  scriptTagDelete?: Maybe<ScriptTagDeletePayload>;
  /** Updates a script tag. */
  scriptTagUpdate?: Maybe<ScriptTagUpdatePayload>;
  /** Deletes a shipping package. */
  shippingPackageDelete?: Maybe<ShippingPackageDeletePayload>;
  /**
   * Sets a Shipping Package as the default shipping package. The default shipping
   * package is the one used to calculate shipping costs on checkout.
   */
  shippingPackageMakeDefault?: Maybe<ShippingPackageMakeDefaultPayload>;
  /** Updates a custom shipping package. */
  shippingPackageUpdate?: Maybe<ShippingPackageUpdatePayload>;
  /** Disables a locale for a shop. */
  shopLocaleDisable?: Maybe<ShopLocaleDisablePayload>;
  /** Enables a locale for a shop. */
  shopLocaleEnable?: Maybe<ShopLocaleEnablePayload>;
  /** Updates a locale for a shop. */
  shopLocaleUpdate?: Maybe<ShopLocaleUpdatePayload>;
  /** Generates the URL and signed paramaters needed to upload an asset to Shopify. */
  stagedUploadTargetGenerate?: Maybe<StagedUploadTargetGeneratePayload>;
  /** Uploads multiple images. */
  stagedUploadTargetsGenerate?: Maybe<StagedUploadTargetsGeneratePayload>;
  /**
   * Creates staged upload target URLs for each input and is the first step in the
   * upload process. The returned upload targets with URLs can be used as endpoints
   * to upload the files.
   */
  stagedUploadsCreate?: Maybe<StagedUploadsCreatePayload>;
  /** Creates a storefront access token. */
  storefrontAccessTokenCreate?: Maybe<StorefrontAccessTokenCreatePayload>;
  /** Deletes a storefront access token. */
  storefrontAccessTokenDelete?: Maybe<StorefrontAccessTokenDeletePayload>;
  /** Add tags to a taggable object. */
  tagsAdd?: Maybe<TagsAddPayload>;
  /** Remove tags from a taggable object. */
  tagsRemove?: Maybe<TagsRemovePayload>;
  /** Creates or updates translations. */
  translationsRegister?: Maybe<TranslationsRegisterPayload>;
  /** Removes translations. */
  translationsRemove?: Maybe<TranslationsRemovePayload>;
  /** Creates a new webhook subscription. */
  webhookSubscriptionCreate?: Maybe<WebhookSubscriptionCreatePayload>;
  /** Deletes a webhook subscription. */
  webhookSubscriptionDelete?: Maybe<WebhookSubscriptionDeletePayload>;
  /** Updates a webhook subscription. */
  webhookSubscriptionUpdate?: Maybe<WebhookSubscriptionUpdatePayload>;
};

/** The schema's entry point for all mutation operations. */
export type MutationAppCreditCreateArgs = {
  description: Scalars['String'];
  amount: MoneyInput;
  test?: Maybe<Scalars['Boolean']>;
};

/** The schema's entry point for all mutation operations. */
export type MutationAppPurchaseOneTimeCreateArgs = {
  name: Scalars['String'];
  price: MoneyInput;
  returnUrl: Scalars['URL'];
  test?: Maybe<Scalars['Boolean']>;
};

/** The schema's entry point for all mutation operations. */
export type MutationAppSubscriptionCancelArgs = {
  id: Scalars['ID'];
};

/** The schema's entry point for all mutation operations. */
export type MutationAppSubscriptionCreateArgs = {
  name: Scalars['String'];
  lineItems: Array<AppSubscriptionLineItemInput>;
  test?: Maybe<Scalars['Boolean']>;
  trialDays?: Maybe<Scalars['Int']>;
  returnUrl: Scalars['URL'];
};

/** The schema's entry point for all mutation operations. */
export type MutationAppSubscriptionLineItemUpdateArgs = {
  id: Scalars['ID'];
  cappedAmount: MoneyInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationAppUsageRecordCreateArgs = {
  subscriptionLineItemId: Scalars['ID'];
  price: MoneyInput;
  description: Scalars['String'];
};

/** The schema's entry point for all mutation operations. */
export type MutationBulkOperationCancelArgs = {
  id: Scalars['ID'];
};

/** The schema's entry point for all mutation operations. */
export type MutationBulkOperationRunQueryArgs = {
  query: Scalars['String'];
};

/** The schema's entry point for all mutation operations. */
export type MutationCollectionAddProductsArgs = {
  id: Scalars['ID'];
  productIds: Array<Scalars['ID']>;
};

/** The schema's entry point for all mutation operations. */
export type MutationCollectionCreateArgs = {
  input: CollectionInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationCollectionDeleteArgs = {
  input: CollectionDeleteInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationCollectionPublishArgs = {
  input: CollectionPublishInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationCollectionRemoveProductsArgs = {
  id: Scalars['ID'];
  productIds: Array<Scalars['ID']>;
};

/** The schema's entry point for all mutation operations. */
export type MutationCollectionReorderProductsArgs = {
  id: Scalars['ID'];
  moves: Array<MoveInput>;
};

/** The schema's entry point for all mutation operations. */
export type MutationCollectionUnpublishArgs = {
  input: CollectionUnpublishInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationCollectionUpdateArgs = {
  input: CollectionInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationCustomerAddTaxExemptionsArgs = {
  customerId: Scalars['ID'];
  taxExemptions: Array<TaxExemption>;
};

/** The schema's entry point for all mutation operations. */
export type MutationCustomerCreateArgs = {
  input: CustomerInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationCustomerDeleteArgs = {
  input: CustomerDeleteInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationCustomerGenerateAccountActivationUrlArgs = {
  customerId: Scalars['ID'];
};

/** The schema's entry point for all mutation operations. */
export type MutationCustomerRemoveTaxExemptionsArgs = {
  customerId: Scalars['ID'];
  taxExemptions: Array<TaxExemption>;
};

/** The schema's entry point for all mutation operations. */
export type MutationCustomerReplaceTaxExemptionsArgs = {
  customerId: Scalars['ID'];
  taxExemptions: Array<TaxExemption>;
};

/** The schema's entry point for all mutation operations. */
export type MutationCustomerUpdateArgs = {
  input: CustomerInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationCustomerUpdateDefaultAddressArgs = {
  customerId: Scalars['ID'];
  addressId: Scalars['ID'];
};

/** The schema's entry point for all mutation operations. */
export type MutationDeliveryProfileCreateArgs = {
  profile: DeliveryProfileInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationDeliveryProfileRemoveArgs = {
  id: Scalars['ID'];
};

/** The schema's entry point for all mutation operations. */
export type MutationDeliveryProfileUpdateArgs = {
  id: Scalars['ID'];
  profile: DeliveryProfileInput;
  leaveLegacyModeProfiles?: Maybe<Scalars['Boolean']>;
};

/** The schema's entry point for all mutation operations. */
export type MutationDeliverySettingUpdateArgs = {
  setting: DeliverySettingInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationDeliveryShippingOriginAssignArgs = {
  locationId: Scalars['ID'];
};

/** The schema's entry point for all mutation operations. */
export type MutationDiscountAutomaticActivateArgs = {
  id: Scalars['ID'];
};

/** The schema's entry point for all mutation operations. */
export type MutationDiscountAutomaticBasicCreateArgs = {
  automaticBasicDiscount: DiscountAutomaticBasicInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationDiscountAutomaticBasicUpdateArgs = {
  id: Scalars['ID'];
  automaticBasicDiscount: DiscountAutomaticBasicInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationDiscountAutomaticBulkDeleteArgs = {
  search?: Maybe<Scalars['String']>;
  savedSearchId?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Scalars['ID']>>;
};

/** The schema's entry point for all mutation operations. */
export type MutationDiscountAutomaticBxgyCreateArgs = {
  automaticBxgyDiscount: DiscountAutomaticBxgyInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationDiscountAutomaticBxgyUpdateArgs = {
  id: Scalars['ID'];
  automaticBxgyDiscount: DiscountAutomaticBxgyInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationDiscountAutomaticDeactivateArgs = {
  id: Scalars['ID'];
};

/** The schema's entry point for all mutation operations. */
export type MutationDiscountAutomaticDeleteArgs = {
  id: Scalars['ID'];
};

/** The schema's entry point for all mutation operations. */
export type MutationDiscountCodeActivateArgs = {
  id: Scalars['ID'];
};

/** The schema's entry point for all mutation operations. */
export type MutationDiscountCodeBasicCreateArgs = {
  basicCodeDiscount: DiscountCodeBasicInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationDiscountCodeBasicUpdateArgs = {
  id: Scalars['ID'];
  basicCodeDiscount: DiscountCodeBasicInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationDiscountCodeBxgyCreateArgs = {
  bxgyCodeDiscount: DiscountCodeBxgyInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationDiscountCodeBxgyUpdateArgs = {
  id: Scalars['ID'];
  bxgyCodeDiscount: DiscountCodeBxgyInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationDiscountCodeDeactivateArgs = {
  id: Scalars['ID'];
};

/** The schema's entry point for all mutation operations. */
export type MutationDiscountCodeDeleteArgs = {
  id: Scalars['ID'];
};

/** The schema's entry point for all mutation operations. */
export type MutationDiscountCodeFreeShippingCreateArgs = {
  freeShippingCodeDiscount: DiscountCodeFreeShippingInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationDiscountCodeFreeShippingUpdateArgs = {
  id: Scalars['ID'];
  freeShippingCodeDiscount: DiscountCodeFreeShippingInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationDraftOrderCalculateArgs = {
  input: DraftOrderInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationDraftOrderCompleteArgs = {
  id: Scalars['ID'];
  paymentPending?: Maybe<Scalars['Boolean']>;
};

/** The schema's entry point for all mutation operations. */
export type MutationDraftOrderCreateArgs = {
  input: DraftOrderInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationDraftOrderDeleteArgs = {
  input: DraftOrderDeleteInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationDraftOrderInvoicePreviewArgs = {
  id: Scalars['ID'];
  email?: Maybe<EmailInput>;
};

/** The schema's entry point for all mutation operations. */
export type MutationDraftOrderInvoiceSendArgs = {
  id: Scalars['ID'];
  email?: Maybe<EmailInput>;
};

/** The schema's entry point for all mutation operations. */
export type MutationDraftOrderUpdateArgs = {
  id: Scalars['ID'];
  input: DraftOrderInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationFlowTriggerReceiveArgs = {
  body: Scalars['String'];
};

/** The schema's entry point for all mutation operations. */
export type MutationFulfillmentCancelArgs = {
  id: Scalars['ID'];
};

/** The schema's entry point for all mutation operations. */
export type MutationFulfillmentCreateArgs = {
  input: FulfillmentInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationFulfillmentCreateV2Args = {
  fulfillment: FulfillmentV2Input;
  message?: Maybe<Scalars['String']>;
};

/** The schema's entry point for all mutation operations. */
export type MutationFulfillmentOrderAcceptCancellationRequestArgs = {
  id: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
};

/** The schema's entry point for all mutation operations. */
export type MutationFulfillmentOrderAcceptFulfillmentRequestArgs = {
  id: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
};

/** The schema's entry point for all mutation operations. */
export type MutationFulfillmentOrderCancelArgs = {
  id: Scalars['ID'];
};

/** The schema's entry point for all mutation operations. */
export type MutationFulfillmentOrderCloseArgs = {
  id: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
};

/** The schema's entry point for all mutation operations. */
export type MutationFulfillmentOrderMoveArgs = {
  id: Scalars['ID'];
  newLocationId: Scalars['ID'];
};

/** The schema's entry point for all mutation operations. */
export type MutationFulfillmentOrderRejectCancellationRequestArgs = {
  id: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
};

/** The schema's entry point for all mutation operations. */
export type MutationFulfillmentOrderRejectFulfillmentRequestArgs = {
  id: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
};

/** The schema's entry point for all mutation operations. */
export type MutationFulfillmentOrderSubmitCancellationRequestArgs = {
  id: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
};

/** The schema's entry point for all mutation operations. */
export type MutationFulfillmentOrderSubmitFulfillmentRequestArgs = {
  id: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
  notifyCustomer?: Maybe<Scalars['Boolean']>;
  fulfillmentOrderLineItems?: Maybe<Array<FulfillmentOrderLineItemInput>>;
  shippingMethod?: Maybe<Scalars['String']>;
};

/** The schema's entry point for all mutation operations. */
export type MutationFulfillmentServiceCreateArgs = {
  name: Scalars['String'];
  callbackUrl?: Maybe<Scalars['URL']>;
  trackingSupport?: Maybe<Scalars['Boolean']>;
};

/** The schema's entry point for all mutation operations. */
export type MutationFulfillmentServiceDeleteArgs = {
  id: Scalars['ID'];
  destinationLocationId?: Maybe<Scalars['ID']>;
};

/** The schema's entry point for all mutation operations. */
export type MutationFulfillmentServiceUpdateArgs = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  callbackUrl?: Maybe<Scalars['URL']>;
  trackingSupport?: Maybe<Scalars['Boolean']>;
  fulfillmentOrdersOptIn?: Maybe<Scalars['Boolean']>;
};

/** The schema's entry point for all mutation operations. */
export type MutationFulfillmentTrackingInfoUpdateArgs = {
  fulfillmentId: Scalars['ID'];
  trackingInfoUpdateInput: TrackingInfoUpdateInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationFulfillmentTrackingInfoUpdateV2Args = {
  fulfillmentId: Scalars['ID'];
  trackingInfoInput: FulfillmentTrackingInput;
  notifyCustomer?: Maybe<Scalars['Boolean']>;
};

/** The schema's entry point for all mutation operations. */
export type MutationInventoryActivateArgs = {
  inventoryItemId: Scalars['ID'];
  locationId: Scalars['ID'];
  available?: Maybe<Scalars['Int']>;
};

/** The schema's entry point for all mutation operations. */
export type MutationInventoryAdjustQuantityArgs = {
  input: InventoryAdjustQuantityInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationInventoryBulkAdjustQuantityAtLocationArgs = {
  inventoryItemAdjustments: Array<InventoryAdjustItemInput>;
  locationId: Scalars['ID'];
};

/** The schema's entry point for all mutation operations. */
export type MutationInventoryDeactivateArgs = {
  inventoryLevelId: Scalars['ID'];
};

/** The schema's entry point for all mutation operations. */
export type MutationInventoryItemUpdateArgs = {
  id: Scalars['ID'];
  input: InventoryItemUpdateInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationKitSkillTriggerRequestArgs = {
  id: Scalars['ID'];
  locale: KitSkillLocale;
  placeholders?: Maybe<Scalars['JSON']>;
};

/** The schema's entry point for all mutation operations. */
export type MutationMarketingActivityUpdateArgs = {
  input: MarketingActivityUpdateInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationMarketingEngagementCreateArgs = {
  marketingActivityId: Scalars['ID'];
  marketingEngagement: MarketingEngagementInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationMetafieldDeleteArgs = {
  input: MetafieldDeleteInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationMetafieldStorefrontVisibilityCreateArgs = {
  input: MetafieldStorefrontVisibilityInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationMetafieldStorefrontVisibilityDeleteArgs = {
  id: Scalars['ID'];
};

/** The schema's entry point for all mutation operations. */
export type MutationOrderCaptureArgs = {
  input: OrderCaptureInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationOrderCloseArgs = {
  input: OrderCloseInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationOrderEditAddCustomItemArgs = {
  id: Scalars['ID'];
  title: Scalars['String'];
  locationId?: Maybe<Scalars['ID']>;
  price: MoneyInput;
  quantity: Scalars['Int'];
  taxable?: Maybe<Scalars['Boolean']>;
  requiresShipping?: Maybe<Scalars['Boolean']>;
};

/** The schema's entry point for all mutation operations. */
export type MutationOrderEditAddVariantArgs = {
  id: Scalars['ID'];
  variantId: Scalars['ID'];
  locationId?: Maybe<Scalars['ID']>;
  quantity: Scalars['Int'];
};

/** The schema's entry point for all mutation operations. */
export type MutationOrderEditBeginArgs = {
  id: Scalars['ID'];
};

/** The schema's entry point for all mutation operations. */
export type MutationOrderEditCommitArgs = {
  id: Scalars['ID'];
  notifyCustomer?: Maybe<Scalars['Boolean']>;
  staffNote?: Maybe<Scalars['String']>;
};

/** The schema's entry point for all mutation operations. */
export type MutationOrderEditSetQuantityArgs = {
  id: Scalars['ID'];
  lineItemId: Scalars['ID'];
  quantity: Scalars['Int'];
  restock?: Maybe<Scalars['Boolean']>;
  locationId?: Maybe<Scalars['ID']>;
};

/** The schema's entry point for all mutation operations. */
export type MutationOrderMarkAsPaidArgs = {
  input: OrderMarkAsPaidInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationOrderOpenArgs = {
  input: OrderOpenInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationOrderUpdateArgs = {
  input: OrderInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationPriceRuleActivateArgs = {
  id: Scalars['ID'];
};

/** The schema's entry point for all mutation operations. */
export type MutationPriceRuleCreateArgs = {
  priceRule: PriceRuleInput;
  priceRuleDiscountCode?: Maybe<PriceRuleDiscountCodeInput>;
};

/** The schema's entry point for all mutation operations. */
export type MutationPriceRuleDeactivateArgs = {
  id: Scalars['ID'];
};

/** The schema's entry point for all mutation operations. */
export type MutationPriceRuleDeleteArgs = {
  id: Scalars['ID'];
};

/** The schema's entry point for all mutation operations. */
export type MutationPriceRuleDiscountCodeCreateArgs = {
  priceRuleId: Scalars['ID'];
  code: Scalars['String'];
};

/** The schema's entry point for all mutation operations. */
export type MutationPriceRuleDiscountCodeUpdateArgs = {
  priceRuleId: Scalars['ID'];
  code: Scalars['String'];
};

/** The schema's entry point for all mutation operations. */
export type MutationPriceRuleUpdateArgs = {
  id: Scalars['ID'];
  priceRule: PriceRuleInput;
  priceRuleDiscountCode?: Maybe<PriceRuleDiscountCodeInput>;
};

/** The schema's entry point for all mutation operations. */
export type MutationPrivateMetafieldDeleteArgs = {
  input: PrivateMetafieldDeleteInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationPrivateMetafieldUpsertArgs = {
  input: PrivateMetafieldInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationProductAppendImagesArgs = {
  input: ProductAppendImagesInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationProductCreateArgs = {
  input: ProductInput;
  media?: Maybe<Array<CreateMediaInput>>;
};

/** The schema's entry point for all mutation operations. */
export type MutationProductCreateMediaArgs = {
  productId: Scalars['ID'];
  media: Array<CreateMediaInput>;
};

/** The schema's entry point for all mutation operations. */
export type MutationProductDeleteArgs = {
  input: ProductDeleteInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationProductDeleteImagesArgs = {
  id: Scalars['ID'];
  imageIds: Array<Scalars['ID']>;
};

/** The schema's entry point for all mutation operations. */
export type MutationProductDeleteMediaArgs = {
  productId: Scalars['ID'];
  mediaIds: Array<Scalars['ID']>;
};

/** The schema's entry point for all mutation operations. */
export type MutationProductDuplicateArgs = {
  productId: Scalars['ID'];
  newTitle: Scalars['String'];
  includeImages?: Maybe<Scalars['Boolean']>;
};

/** The schema's entry point for all mutation operations. */
export type MutationProductImageUpdateArgs = {
  productId: Scalars['ID'];
  image: ImageInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationProductPublishArgs = {
  input: ProductPublishInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationProductReorderImagesArgs = {
  id: Scalars['ID'];
  moves: Array<MoveInput>;
};

/** The schema's entry point for all mutation operations. */
export type MutationProductReorderMediaArgs = {
  id: Scalars['ID'];
  moves: Array<MoveInput>;
};

/** The schema's entry point for all mutation operations. */
export type MutationProductUnpublishArgs = {
  input: ProductUnpublishInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationProductUpdateArgs = {
  input: ProductInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationProductUpdateMediaArgs = {
  productId: Scalars['ID'];
  media: Array<UpdateMediaInput>;
};

/** The schema's entry point for all mutation operations. */
export type MutationProductVariantCreateArgs = {
  input: ProductVariantInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationProductVariantDeleteArgs = {
  id: Scalars['ID'];
};

/** The schema's entry point for all mutation operations. */
export type MutationProductVariantUpdateArgs = {
  input: ProductVariantInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationPublishablePublishArgs = {
  id: Scalars['ID'];
  input: Array<PublicationInput>;
};

/** The schema's entry point for all mutation operations. */
export type MutationPublishablePublishToCurrentChannelArgs = {
  id: Scalars['ID'];
};

/** The schema's entry point for all mutation operations. */
export type MutationPublishableUnpublishArgs = {
  id: Scalars['ID'];
  input: Array<PublicationInput>;
};

/** The schema's entry point for all mutation operations. */
export type MutationPublishableUnpublishToCurrentChannelArgs = {
  id: Scalars['ID'];
};

/** The schema's entry point for all mutation operations. */
export type MutationRefundCreateArgs = {
  input: RefundInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationSavedSearchCreateArgs = {
  input: SavedSearchCreateInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationSavedSearchDeleteArgs = {
  input: SavedSearchDeleteInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationSavedSearchUpdateArgs = {
  input: SavedSearchUpdateInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationScriptTagCreateArgs = {
  input: ScriptTagInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationScriptTagDeleteArgs = {
  id: Scalars['ID'];
};

/** The schema's entry point for all mutation operations. */
export type MutationScriptTagUpdateArgs = {
  id: Scalars['ID'];
  input: ScriptTagInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationShippingPackageDeleteArgs = {
  id: Scalars['ID'];
};

/** The schema's entry point for all mutation operations. */
export type MutationShippingPackageMakeDefaultArgs = {
  id: Scalars['ID'];
};

/** The schema's entry point for all mutation operations. */
export type MutationShippingPackageUpdateArgs = {
  id: Scalars['ID'];
};

/** The schema's entry point for all mutation operations. */
export type MutationShopLocaleDisableArgs = {
  locale: Scalars['String'];
};

/** The schema's entry point for all mutation operations. */
export type MutationShopLocaleEnableArgs = {
  locale: Scalars['String'];
};

/** The schema's entry point for all mutation operations. */
export type MutationShopLocaleUpdateArgs = {
  locale: Scalars['String'];
  shopLocale: ShopLocaleInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationStagedUploadTargetGenerateArgs = {
  input: StagedUploadTargetGenerateInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationStagedUploadTargetsGenerateArgs = {
  input: Array<StageImageInput>;
};

/** The schema's entry point for all mutation operations. */
export type MutationStagedUploadsCreateArgs = {
  input: Array<StagedUploadInput>;
};

/** The schema's entry point for all mutation operations. */
export type MutationStorefrontAccessTokenCreateArgs = {
  input: StorefrontAccessTokenInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationStorefrontAccessTokenDeleteArgs = {
  input: StorefrontAccessTokenDeleteInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationTagsAddArgs = {
  id: Scalars['ID'];
  tags: Array<Scalars['String']>;
};

/** The schema's entry point for all mutation operations. */
export type MutationTagsRemoveArgs = {
  id: Scalars['ID'];
  tags: Array<Scalars['String']>;
};

/** The schema's entry point for all mutation operations. */
export type MutationTranslationsRegisterArgs = {
  resourceId: Scalars['ID'];
  translations: Array<TranslationInput>;
};

/** The schema's entry point for all mutation operations. */
export type MutationTranslationsRemoveArgs = {
  resourceId: Scalars['ID'];
  translationKeys: Array<Scalars['String']>;
  locales: Array<Scalars['String']>;
};

/** The schema's entry point for all mutation operations. */
export type MutationWebhookSubscriptionCreateArgs = {
  topic: WebhookSubscriptionTopic;
  webhookSubscription: WebhookSubscriptionInput;
};

/** The schema's entry point for all mutation operations. */
export type MutationWebhookSubscriptionDeleteArgs = {
  id: Scalars['ID'];
};

/** The schema's entry point for all mutation operations. */
export type MutationWebhookSubscriptionUpdateArgs = {
  id: Scalars['ID'];
  webhookSubscription: WebhookSubscriptionInput;
};

/** A signed upload parameter for uploading an asset to Shopify. */
export type MutationsStagedUploadTargetGenerateUploadParameter = {
  /** The upload parameter name. */
  name: Scalars['String'];
  /** The upload parameter value. */
  value: Scalars['String'];
};

/**
 * A default cursor for use in pagination.
 * The default cursor can be used for next and previous navigation.
 */
export type Navigable = {
  /** A default cursor for use in pagination. */
  defaultCursor: Scalars['String'];
};

/** A navigation item, holding basic link attributes. */
export type NavigationItem = {
  /** The unique identifier of the navigation item. */
  id: Scalars['String'];
  /** The name of the navigation item. */
  title: Scalars['String'];
  /** The URL of the page that the navigation item links to. */
  url: Scalars['URL'];
};

/** An object with an ID to support global identification. */
export type Node = {
  /** Globally unique identifier. */
  id: Scalars['ID'];
};

/**
 * Represents an article in an OnlineStoreBlog object. Articles appear in reverse chronological order, with the
 * most recent entry at the top of the blog's page. A blog can contain any number of articles.
 */
export type OnlineStoreArticle = Node &
  Navigable &
  HasPublishedTranslations & {
    /** A default cursor for use in pagination. */
    defaultCursor: Scalars['String'];
    /** Globally unique identifier. */
    id: Scalars['ID'];
    /** The translations associated with the resource. */
    translations: Array<PublishedTranslation>;
  };

/**
 * Represents an article in an OnlineStoreBlog object. Articles appear in reverse chronological order, with the
 * most recent entry at the top of the blog's page. A blog can contain any number of articles.
 */
export type OnlineStoreArticleTranslationsArgs = {
  locale: Scalars['String'];
};

/**
 * Shopify stores come with a built-in blogging engine, allowing a shop to have one or more blogs.  Blogs are meant
 * to be used as a type of magazine or newsletter for the shop, with content that changes over time.
 */
export type OnlineStoreBlog = Node &
  HasPublishedTranslations & {
    /** Globally unique identifier. */
    id: Scalars['ID'];
    /** The translations associated with the resource. */
    translations: Array<PublishedTranslation>;
  };

/**
 * Shopify stores come with a built-in blogging engine, allowing a shop to have one or more blogs.  Blogs are meant
 * to be used as a type of magazine or newsletter for the shop, with content that changes over time.
 */
export type OnlineStoreBlogTranslationsArgs = {
  locale: Scalars['String'];
};

/** A custom page on the Online Store. */
export type OnlineStorePage = Node &
  Navigable &
  HasPublishedTranslations & {
    /** A default cursor for use in pagination. */
    defaultCursor: Scalars['String'];
    /** Globally unique identifier. */
    id: Scalars['ID'];
    /** The translations associated with the resource. */
    translations: Array<PublishedTranslation>;
  };

/** A custom page on the Online Store. */
export type OnlineStorePageTranslationsArgs = {
  locale: Scalars['String'];
};

/** Online Store preview URL of the object. */
export type OnlineStorePreviewable = {
  /** The online store preview URL. */
  onlineStorePreviewUrl?: Maybe<Scalars['URL']>;
};

/** An order represents an agreement to do business between a customer and a merchant. */
export type Order = Node &
  CommentEventSubject &
  HasMetafields &
  LegacyInteroperability &
  HasEvents & {
    /**
     * Generated messages that appear at the top of an order page in the Shopify admin.
     * For example, _this is a test order_.
     */
    alerts: Array<ResourceAlert>;
    /**
     * Mailing address provided by the customer.
     * Not all orders have mailing addresses.
     */
    billingAddress?: Maybe<MailingAddress>;
    /** Whether the billing address matches the shipping address. */
    billingAddressMatchesShippingAddress: Scalars['Boolean'];
    /** Whether the order can be manually marked as paid. */
    canMarkAsPaid: Scalars['Boolean'];
    /** Whether notifications can be sent to the customer or not. */
    canNotifyCustomer: Scalars['Boolean'];
    /**
     * Reason the order was canceled.
     * Returns null if the order wasn't canceled.
     */
    cancelReason?: Maybe<OrderCancelReason>;
    /**
     * Date and time when the order was canceled.
     * Returns null if the order wasn't canceled.
     */
    cancelledAt?: Maybe<Scalars['DateTime']>;
    /**
     * Whether payment for the order can be captured.
     * Returns true when the customer's credit card has been authorized for payment and the authorization period has not expired.
     */
    capturable: Scalars['Boolean'];
    /**
     * Amount of the order-level discount (does not contain any line item discounts).
     * @deprecated Use `cartDiscountAmountSet` instead
     */
    cartDiscountAmount?: Maybe<Scalars['Money']>;
    /** Amount of the order-level discount (does not contain any line item discounts) in shop and presentment currencies. */
    cartDiscountAmountSet?: Maybe<MoneyBag>;
    /**
     * Channel that created the order.
     * @deprecated Use `publication` instead
     */
    channel?: Maybe<Channel>;
    /** The ip address of the client that is associated with this order. */
    clientIp?: Maybe<Scalars['String']>;
    /** Whether the order is closed. */
    closed: Scalars['Boolean'];
    /**
     * Date and time when the order closed.
     * If the order is not closed, then this field is null.
     */
    closedAt?: Maybe<Scalars['DateTime']>;
    /** Whether inventory has been reserved for the order. */
    confirmed: Scalars['Boolean'];
    /** Date and time when the order was created in Shopify. */
    createdAt: Scalars['DateTime'];
    /**
     * The currency of the store at the time of the order.
     * If payment hasn't occurred, then this field is null.
     */
    currencyCode: CurrencyCode;
    /** Total amount of duties for the order. If duties are not applicable, then this value is `null`. */
    currentTotalDutiesSet?: Maybe<MoneyBag>;
    /**
     * Custom information added to the order by your customer
     * (Also referred to as note attributes).
     */
    customAttributes: Array<Attribute>;
    /**
     * Unique identifier of the customer who placed the order.
     * Not all orders have customers associated with them.
     */
    customer?: Maybe<Customer>;
    /** Whether the customer agreed to receive marketing materials. */
    customerAcceptsMarketing: Scalars['Boolean'];
    /** Description of the customer's experience with the store leading up to the order. */
    customerJourney?: Maybe<CustomerJourney>;
    /**
     * A two-letter or three-letter language code, optionally followed by a region modifier.
     * Example values could be 'en', 'en-CA', 'en-PIRATE'.
     */
    customerLocale?: Maybe<Scalars['String']>;
    /** Discounts that have been applied on the order. */
    discountApplications: DiscountApplicationConnection;
    /** Discount code provided by the customer. */
    discountCode?: Maybe<Scalars['String']>;
    /** Primary address of the customer, which is shown on the order. */
    displayAddress?: Maybe<MailingAddress>;
    /**
     * Financial status of the order that can be shown to the merchant.
     * This field does not capture all the possible details of an order's financial
     * state and should only be used for display summary purposes.
     */
    displayFinancialStatus?: Maybe<OrderDisplayFinancialStatus>;
    /**
     * Fulfillment status for the order that can be shown to the merchant.
     * This field does not capture all the possible details of an order's fulfillment
     * state. It should only be used for display summary purposes.
     */
    displayFulfillmentStatus: OrderDisplayFulfillmentStatus;
    /** Summary of each dispute associated with the order. Sorted in ascending (ASC) order by ID. */
    disputes: Array<OrderDisputeSummary>;
    /** List of possible fulfilments that can be made for the order (includes line items that can be partially fulfilled). */
    draftFulfillments: Array<DraftFulfillment>;
    /** Whether the order has had any edits applied or not. */
    edited: Scalars['Boolean'];
    /** Email address provided by the customer. */
    email?: Maybe<Scalars['String']>;
    /** List of internal events associated with the order. */
    events: EventConnection;
    /**
     * Whether there are items that can be fulfilled.
     * After an order is completely fulfilled (or completely refunded without any fulfillments) then this field returns false.
     */
    fulfillable: Scalars['Boolean'];
    /** List of fulfillment orders with pagination. */
    fulfillmentOrders: FulfillmentOrderConnection;
    /** List of shipments for the order. */
    fulfillments: Array<Fulfillment>;
    /** Whether the order has been paid in full. */
    fullyPaid: Scalars['Boolean'];
    /** Whether the merchant added timeline comments to the order. */
    hasTimelineComment: Scalars['Boolean'];
    /** Globally unique identifier. */
    id: Scalars['ID'];
    /**
     * First page of the online store that the customer visited before they submitted the order, for displaying to humans.
     * @deprecated Use `customerJourney.lastVisit.landingPageHtml` instead
     */
    landingPageDisplayText?: Maybe<Scalars['String']>;
    /**
     * First page of the online store that the customer visited before they submitted the order.
     * @deprecated Use `customerJourney.lastVisit.landingPage` instead
     */
    landingPageUrl?: Maybe<Scalars['URL']>;
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars['UnsignedInt64'];
    /** List of the order's line items. */
    lineItems: LineItemConnection;
    /** List of the order's line items after any edits. Only available on Developer Preview. */
    lineItemsMutable: LineItemMutableConnection;
    /**
     * If the order was processed using Shopify POS, then this is its location as provided by the merchant.
     * @deprecated Use `physicalLocation` instead
     */
    location?: Maybe<Scalars['String']>;
    /** Whether the order can be edited or not. */
    merchantEditable: Scalars['Boolean'];
    /** The metafield associated with the resource. */
    metafield?: Maybe<Metafield>;
    /** A paginated list of metafields associated with the resource. */
    metafields: MetafieldConnection;
    /**
     * Unique identifier for the order that appears on the order.
     * For example, _#1000_ or _Store1001.
     * This value is not unique across multiple stores.
     */
    name: Scalars['String'];
    /**
     * Net payment for the order, based on the total amount received - total amount refunded.
     * @deprecated Use `netPaymentSet` instead
     */
    netPayment: Scalars['Money'];
    /** Net payment for the order, based on the total amount received - total amount refunded in shop and presentment currencies. */
    netPaymentSet: MoneyBag;
    /**
     * Line items that can't be fulfilled.
     * For example, because some or all of the items have been refunded, or the item
     * is not one which can be fulfilled, such as a tip.
     * These line items would be 'lost' if you only considered the line items in draft fulfillments or fulfillments.
     */
    nonFulfillableLineItems: LineItemConnection;
    /** Contents of the note associated with the order. */
    note?: Maybe<Scalars['String']>;
    /** Total amount of duties prior to any applied edits for the order. If duties are not applicable, then this value is `null`. */
    originalTotalDutiesSet?: Maybe<MoneyBag>;
    /** Total price of the order prior to any applied edits in shop and presentment currencies. */
    originalTotalPriceSet: MoneyBag;
    /** The payment collection details for an order requiring additional payment. */
    paymentCollectionDetails: OrderPaymentCollectionDetails;
    /**
     * List of all payment gateways used for the order.
     * For example, _authorize_net_ and _Cash on Delivery (COD)_.
     */
    paymentGatewayNames: Array<Scalars['String']>;
    /** Phone number provided by the customer. */
    phone?: Maybe<Scalars['String']>;
    /** If the order was processed using Shopify POS, then this is its location as provided by the merchant. */
    physicalLocation?: Maybe<Location>;
    /** The payment currency of the customer for this order. */
    presentmentCurrencyCode: CurrencyCode;
    /** Returns a private metafield found by namespace and key. */
    privateMetafield?: Maybe<PrivateMetafield>;
    /** List of private metafields. */
    privateMetafields: PrivateMetafieldConnection;
    /**
     * Date and time when the order was processed.
     * When orders are imported from an app, this date and time may not match the date and time when the order was created.
     */
    processedAt: Scalars['DateTime'];
    /** Publication that created the order. */
    publication?: Maybe<Publication>;
    /**
     * Marketing referral code from the link that the customer clicked to visit your store.
     * Supports the following URL attributes: _ref_, _source_, or _r_. For example,
     * if the URL is myshopifystore.com/products/slide?ref=j2tj1tn2, then this value is j2tj1tn2.
     * @deprecated Use `customerJourney.lastVisit.referralCode` instead
     */
    referralCode?: Maybe<Scalars['String']>;
    /**
     * Website that sent the customer to your online store.
     * @deprecated Use `customerJourney.lastVisit.referralInfoHtml` instead
     */
    referrerDisplayText?: Maybe<Scalars['String']>;
    /**
     * Webpage where the customer clicked a link that sent them to your online store.
     * For example, _Google_ or _randomblog.com/page1_.
     * @deprecated Use `customerJourney.lastVisit.referrerUrl` instead
     */
    referrerUrl?: Maybe<Scalars['URL']>;
    /**
     * The difference between suggested and actual refund amounts.  A positive value
     * indicates a difference in the merchants favor and a negative value indicates a
     * difference in the customers favor.
     */
    refundDiscrepancySet: MoneyBag;
    /** Whether the order can be refunded. */
    refundable: Scalars['Boolean'];
    /** List of refunds that have been applied to the order. */
    refunds: Array<Refund>;
    /** Whether any line item in the order requires physical shipping. */
    requiresShipping: Scalars['Boolean'];
    /** Whether the order can be restocked. */
    restockable: Scalars['Boolean'];
    /** Fraud risk level of the order. */
    riskLevel: OrderRiskLevel;
    /** The order risks associated with this order. */
    risks: Array<OrderRisk>;
    /** Mailing address for shipping provided by the customer. */
    shippingAddress?: Maybe<MailingAddress>;
    /** Line item that contains the shipping costs. */
    shippingLine?: Maybe<ShippingLine>;
    /** The sum of the quantities for the line items that contribute to the order's subtotal. */
    subtotalLineItemsQuantity: Scalars['Int'];
    /**
     * Subtotal of the line items and their discounts (does not contain shipping costs and shipping discounts).
     * @deprecated Use `subtotalPriceSet` instead
     */
    subtotalPrice?: Maybe<Scalars['Money']>;
    /**
     * Subtotal of the line items and their discounts (does not contain shipping
     * costs and shipping discounts) in shop and presentment currencies.
     */
    subtotalPriceSet?: Maybe<MoneyBag>;
    /** The details of the suggested refund. This response can be used to submit a RefundCreate mutation. */
    suggestedRefund?: Maybe<SuggestedRefund>;
    /** List of tags. */
    tags: Array<Scalars['String']>;
    /** Taxes charged for the line item. */
    taxLines: Array<TaxLine>;
    /** Whether taxes are included in the subtotal price of the order. */
    taxesIncluded: Scalars['Boolean'];
    /**
     * Whether the order is a test.
     * Test orders are made using the Shopify Bogus Gateway or a payment provider with test mode enabled.
     */
    test: Scalars['Boolean'];
    /**
     * Amount authorized for the order, that is uncaptured or undercaptured.
     * @deprecated Use `totalCapturableSet` instead
     */
    totalCapturable: Scalars['Money'];
    /** Amount authorized for the order, that is uncaptured or undercaptured in shop and presentment currencies. */
    totalCapturableSet: MoneyBag;
    /**
     * Total amount discounted from the order (includes order-level and line item discounts).
     * @deprecated Use `totalDiscountsSet` instead
     */
    totalDiscounts?: Maybe<Scalars['Money']>;
    /** Total amount discounted from the order (includes order-level and line item discounts) in shop and presentment currencies. */
    totalDiscountsSet?: Maybe<MoneyBag>;
    /** Total amount of money not yet authorized for the order. */
    totalOutstandingSet: MoneyBag;
    /**
     * Total amount of the order (includes taxes and discounts).
     * @deprecated Use `totalPriceSet` instead
     */
    totalPrice: Scalars['Money'];
    /** Total amount of the order (includes taxes and discounts) in shop and presentment currencies. */
    totalPriceSet: MoneyBag;
    /**
     * Total amount received by the customer for the order.
     * @deprecated Use `totalReceivedSet` instead
     */
    totalReceived: Scalars['Money'];
    /** Total amount received by the customer for the order in shop and presentment currencies. */
    totalReceivedSet: MoneyBag;
    /**
     * Total amount refunded for the order.
     * @deprecated Use `totalRefundedSet` instead
     */
    totalRefunded: Scalars['Money'];
    /** Total amount refunded for the order in shop and presentment currencies. */
    totalRefundedSet: MoneyBag;
    /** Total amount refunded for shipping in shop and presentment currencies. */
    totalRefundedShippingSet: MoneyBag;
    /**
     * Total amount charged for shipping the order.
     * @deprecated Use `totalShippingPriceSet` instead
     */
    totalShippingPrice: Scalars['Money'];
    /** Total amount charged for shipping the order in shop and presentment currencies. */
    totalShippingPriceSet: MoneyBag;
    /**
     * Total of all taxes applied to the order.
     * @deprecated Use `totalTaxSet` instead
     */
    totalTax?: Maybe<Scalars['Money']>;
    /** Total of all taxes applied to the order in shop and presentment currencies. */
    totalTaxSet?: Maybe<MoneyBag>;
    /** Total weight (grams) of the order. */
    totalWeight?: Maybe<Scalars['UnsignedInt64']>;
    /** List of all transactions associated with the order. */
    transactions: Array<OrderTransaction>;
    /**
     * Whether no payments have been made for the order.
     * If no payments have been made for the order, then this returns true.
     */
    unpaid: Scalars['Boolean'];
    /** Date and time when the order was last modified. */
    updatedAt: Scalars['DateTime'];
  };

/** An order represents an agreement to do business between a customer and a merchant. */
export type OrderDiscountApplicationsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** An order represents an agreement to do business between a customer and a merchant. */
export type OrderEventsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<EventSortKeys>;
  query?: Maybe<Scalars['String']>;
};

/** An order represents an agreement to do business between a customer and a merchant. */
export type OrderFulfillmentOrdersArgs = {
  displayable?: Maybe<Scalars['Boolean']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  query?: Maybe<Scalars['String']>;
};

/** An order represents an agreement to do business between a customer and a merchant. */
export type OrderFulfillmentsArgs = {
  first?: Maybe<Scalars['Int']>;
};

/** An order represents an agreement to do business between a customer and a merchant. */
export type OrderLineItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** An order represents an agreement to do business between a customer and a merchant. */
export type OrderLineItemsMutableArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** An order represents an agreement to do business between a customer and a merchant. */
export type OrderMetafieldArgs = {
  namespace: Scalars['String'];
  key: Scalars['String'];
};

/** An order represents an agreement to do business between a customer and a merchant. */
export type OrderMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** An order represents an agreement to do business between a customer and a merchant. */
export type OrderNonFulfillableLineItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** An order represents an agreement to do business between a customer and a merchant. */
export type OrderPrivateMetafieldArgs = {
  namespace: Scalars['String'];
  key: Scalars['String'];
};

/** An order represents an agreement to do business between a customer and a merchant. */
export type OrderPrivateMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** An order represents an agreement to do business between a customer and a merchant. */
export type OrderRefundsArgs = {
  first?: Maybe<Scalars['Int']>;
};

/** An order represents an agreement to do business between a customer and a merchant. */
export type OrderRisksArgs = {
  first?: Maybe<Scalars['Int']>;
};

/** An order represents an agreement to do business between a customer and a merchant. */
export type OrderSuggestedRefundArgs = {
  shippingAmount?: Maybe<Scalars['Money']>;
  refundShipping?: Maybe<Scalars['Boolean']>;
  refundLineItems?: Maybe<Array<RefundLineItemInput>>;
  refundDuties?: Maybe<Array<RefundDutyInput>>;
  suggestFullRefund?: Maybe<Scalars['Boolean']>;
};

/** An order represents an agreement to do business between a customer and a merchant. */
export type OrderTransactionsArgs = {
  first?: Maybe<Scalars['Int']>;
  capturable?: Maybe<Scalars['Boolean']>;
  manuallyResolvable?: Maybe<Scalars['Boolean']>;
};

/** Represents the reason that the order is being canceled. Valid values are: customer, fraud, inventory, declined, other. */
export enum OrderCancelReason {
  /** The customer wanted to cancel the order. */
  Customer = 'CUSTOMER',
  /** The order was fraudulent. */
  Fraud = 'FRAUD',
  /** There was insufficient inventory. */
  Inventory = 'INVENTORY',
  /** Payment was declined. */
  Declined = 'DECLINED',
  /** Some other reason not listed. */
  Other = 'OTHER',
}

/** Specifies the authorized transaction to capture and the total amount to capture from it. */
export type OrderCaptureInput = {
  /** The ID of the order to capture. */
  id: Scalars['ID'];
  /** The ID of the authorized transaction to capture. */
  parentTransactionId: Scalars['ID'];
  /** The amount to capture. */
  amount: Scalars['Money'];
  /**
   * The currency (in ISO format) that is used to capture the order. This must be
   * the presentment currency (the currency used by the customer) and is a required
   * field for orders where the currency and presentment currency differ.
   */
  currency?: Maybe<CurrencyCode>;
};

/** Return type for `orderCapture` mutation. */
export type OrderCapturePayload = {
  /** The transaction of the capture. */
  transaction?: Maybe<OrderTransaction>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Specifies an open order to close. */
export type OrderCloseInput = {
  /** The ID of the order to close. */
  id: Scalars['ID'];
};

/** Return type for `orderClose` mutation. */
export type OrderClosePayload = {
  /** The closed order. */
  order?: Maybe<Order>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

export type OrderConnection = {
  /** A list of edges. */
  edges: Array<OrderEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Represents the order's current financial status. */
export enum OrderDisplayFinancialStatus {
  /** Displayed as **Pending**. */
  Pending = 'PENDING',
  /** Displayed as **Authorized**. */
  Authorized = 'AUTHORIZED',
  /** Displayed as **Partially paid**. */
  PartiallyPaid = 'PARTIALLY_PAID',
  /** Displayed as **Partially refunded**. */
  PartiallyRefunded = 'PARTIALLY_REFUNDED',
  /** Displayed as **Voided**. */
  Voided = 'VOIDED',
  /** Displayed as **Paid**. */
  Paid = 'PAID',
  /** Displayed as **Refunded**. */
  Refunded = 'REFUNDED',
}

/** Represents the order's current fulfillment status. Valid values are: unfulfilled, partial, fulfilled, restocked. */
export enum OrderDisplayFulfillmentStatus {
  /** Displayed as **Unfulfilled**. */
  Unfulfilled = 'UNFULFILLED',
  /** Displayed as **Partially fulfilled**. */
  PartiallyFulfilled = 'PARTIALLY_FULFILLED',
  /** Displayed as **Fulfilled**. */
  Fulfilled = 'FULFILLED',
  /** Displayed as **Restocked**. */
  Restocked = 'RESTOCKED',
  /** Displayed as **Pending fulfillment**. */
  PendingFulfillment = 'PENDING_FULFILLMENT',
  /** Displayed as **Open**. */
  Open = 'OPEN',
  /** Displayed as **In progress**. */
  InProgress = 'IN_PROGRESS',
}

/** A summary of the important details for a dispute on an order. */
export type OrderDisputeSummary = Node & {
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** The type that the dispute was initiated as. */
  initiatedAs: DisputeType;
  /** The current status of the dispute. */
  status: DisputeStatus;
};

export type OrderEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of OrderEdge. */
  node: Order;
};

/** Return type for `orderEditAddCustomItem` mutation. */
export type OrderEditAddCustomItemPayload = {
  /** The added line item. */
  calculatedLineItem?: Maybe<CalculatedLineItem>;
  /** An order with the edits calculated. */
  calculatedOrder?: Maybe<CalculatedOrder>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `orderEditAddVariant` mutation. */
export type OrderEditAddVariantPayload = {
  /** The added line item. */
  calculatedLineItem?: Maybe<CalculatedLineItem>;
  /** An order with the edits calculated. */
  calculatedOrder?: Maybe<CalculatedOrder>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `orderEditBegin` mutation. */
export type OrderEditBeginPayload = {
  /** The order that will be edited. */
  calculatedOrder?: Maybe<CalculatedOrder>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `orderEditCommit` mutation. */
export type OrderEditCommitPayload = {
  /** The order with changes applied. */
  order?: Maybe<Order>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `orderEditSetQuantity` mutation. */
export type OrderEditSetQuantityPayload = {
  /** The line item with changes calculated. */
  calculatedLineItem?: Maybe<CalculatedLineItem>;
  /** An order with the edits calculated. */
  calculatedOrder?: Maybe<CalculatedOrder>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Specifies the information to be updated on the requested order. */
export type OrderInput = {
  /** The email address associated with the order. */
  email?: Maybe<Scalars['String']>;
  /** The ID of the order to update. */
  id: Scalars['ID'];
  /** The order note. */
  note?: Maybe<Scalars['String']>;
  /** The order tags. */
  tags?: Maybe<Array<Scalars['String']>>;
  /** The shipping address associated with the order. */
  shippingAddress?: Maybe<MailingAddressInput>;
  /** Custom information to add to the order, represented as a key value pair. Also referred to as note attributes. */
  customAttributes?: Maybe<Array<AttributeInput>>;
  /** The metafields to associate with this order. */
  metafields?: Maybe<Array<MetafieldInput>>;
};

/** Specifies the order to mark as paid. */
export type OrderMarkAsPaidInput = {
  /** The ID of the order to mark as paid. */
  id: Scalars['ID'];
};

/** Return type for `orderMarkAsPaid` mutation. */
export type OrderMarkAsPaidPayload = {
  /** The order marked as paid. */
  order?: Maybe<Order>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Specifies a closed order to open. */
export type OrderOpenInput = {
  /** The ID of the order to open. */
  id: Scalars['ID'];
};

/** Return type for `orderOpen` mutation. */
export type OrderOpenPayload = {
  /** The opened order. */
  order?: Maybe<Order>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** The payment collection details for an order requiring additional payment. */
export type OrderPaymentCollectionDetails = {
  /** URL allowing additional payments to be collected on the order. */
  additionalPaymentCollectionUrl?: Maybe<Scalars['URL']>;
};

/** Represents a fraud check on an order. */
export type OrderRisk = {
  /**
   * Whether the risk level is shown in the Shopify admin. If false, then this
   * order risk is ignored when Shopify determines the overall risk level for the order.
   */
  display: Scalars['Boolean'];
  /**
   * The likelihood that an order is fraudulent, based on this order risk.
   *
   * The level can be set by Shopify risk analysis or by an app.
   */
  level?: Maybe<OrderRiskLevel>;
  /** The risk message that's shown to the merchant in the Shopify admin. */
  message?: Maybe<Scalars['String']>;
};

/** The likelihood that an order is fraudulent. */
export enum OrderRiskLevel {
  /** There is a low level of risk that this order is fraudulent. */
  Low = 'LOW',
  /** There is a medium level of risk that this order is fraudulent. */
  Medium = 'MEDIUM',
  /** There is a high level of risk that this order is fraudulent. */
  High = 'HIGH',
}

/** The set of valid sort keys for the Order query. */
export enum OrderSortKeys {
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `customer_name` value. */
  CustomerName = 'CUSTOMER_NAME',
  /** Sort by the `financial_status` value. */
  FinancialStatus = 'FINANCIAL_STATUS',
  /** Sort by the `fulfillment_status` value. */
  FulfillmentStatus = 'FULFILLMENT_STATUS',
  /** Sort by the `order_number` value. */
  OrderNumber = 'ORDER_NUMBER',
  /** Sort by the `processed_at` value. */
  ProcessedAt = 'PROCESSED_AT',
  /** Sort by the `total_price` value. */
  TotalPrice = 'TOTAL_PRICE',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
}

/** A change that has been applied to an order. */
export type OrderStagedChange =
  | OrderStagedChangeAddCustomItem
  | OrderStagedChangeAddVariant
  | OrderStagedChangeIncrementItem
  | OrderStagedChangeDecrementItem;

/** A newly created custom item. */
export type OrderStagedChangeAddCustomItem = {
  /** The price of an individual item without any discounts applied. */
  originalUnitPrice: MoneyV2;
  /** The number of items. */
  quantity: Scalars['Int'];
  /** The title of the item. */
  title: Scalars['String'];
};

/** A new item created from an existing product variant. */
export type OrderStagedChangeAddVariant = {
  /** The number of items. */
  quantity: Scalars['Int'];
  /** The product variant of the added item. */
  variant: ProductVariant;
};

export type OrderStagedChangeConnection = {
  /** A list of edges. */
  edges: Array<OrderStagedChangeEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An removal of items from an existing line item on the order. */
export type OrderStagedChangeDecrementItem = {
  /** The number of items removed. */
  delta: Scalars['Int'];
  /** The original line item. */
  lineItem: LineItem;
  /** The intention to restock the removed items. */
  restock: Scalars['Boolean'];
};

export type OrderStagedChangeEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of OrderStagedChangeEdge. */
  node: OrderStagedChange;
};

/** An addition of items to an existing line item on the order. */
export type OrderStagedChangeIncrementItem = {
  /** The number of items added. */
  delta: Scalars['Int'];
  /** The original line item. */
  lineItem: LineItem;
};

/** A transaction represents an exchange of money as part of an order. */
export type OrderTransaction = Node & {
  /** The masked account number associated with the payment method. */
  accountNumber?: Maybe<Scalars['String']>;
  /**
   * The amount of money.
   * @deprecated Use `amountSet` instead
   */
  amount: Scalars['Money'];
  /** The amount and currency of the transaction in shop and presentment currencies. */
  amountSet: MoneyBag;
  /**
   * The amount and currency of the transaction.
   * @deprecated Use `amountSet` instead
   */
  amountV2: MoneyV2;
  /** Authorization code associated with the transaction. */
  authorizationCode?: Maybe<Scalars['String']>;
  /** Date and time when the transaction was created. */
  createdAt: Scalars['DateTime'];
  /** A standardized error code, independent of the payment provider. */
  errorCode?: Maybe<OrderTransactionErrorCode>;
  /** The human-readable payment gateway name used to process the transaction. */
  formattedGateway?: Maybe<Scalars['String']>;
  /** The payment gateway used to process the transaction. */
  gateway?: Maybe<Scalars['String']>;
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** The kind of transaction. */
  kind: OrderTransactionKind;
  /** Whether the transaction can be manually captured. */
  manuallyCapturable: Scalars['Boolean'];
  /**
   * Specifies the available amount to refund on the gateway. Only available within SuggestedRefund.
   * @deprecated Use `maximumRefundableV2` instead
   */
  maximumRefundable?: Maybe<Scalars['Money']>;
  /**
   * Specifies the available amount with currency to refund on the gateway.
   * Only available within SuggestedRefund.
   */
  maximumRefundableV2?: Maybe<MoneyV2>;
  /** The associated order. */
  order?: Maybe<Order>;
  /** The associated parent transaction, for example the authorization of a capture. */
  parentTransaction?: Maybe<OrderTransaction>;
  /** Specifies the payment icon to display for this transaction. */
  paymentIcon?: Maybe<Image>;
  /**
   * Specifies the credit card company used to pay for this transaction.
   * @deprecated Use `paymentIcon` instead
   */
  paymentMethod?: Maybe<PaymentMethods>;
  /** Date and time when the transaction was processed. */
  processedAt?: Maybe<Scalars['DateTime']>;
  /**
   * A transaction receipt attached to the transaction by the gateway.
   * The value of this field depends on which gateway processed the transaction.
   * @deprecated Use `receiptJson` instead
   */
  receipt?: Maybe<Scalars['String']>;
  /** The status of this transaction. */
  status: OrderTransactionStatus;
  /** Whether the transaction is a test transaction. */
  test: Scalars['Boolean'];
  /**
   * Specifies the available amount to capture on the gateway.
   * Only available when an amount is capturable or manually mark as paid.
   * @deprecated Use `totalUnsettledSet` instead
   */
  totalUnsettled?: Maybe<Scalars['Money']>;
  /**
   * Specifies the available amount with currency to capture on the gateway in shop and presentment currencies.
   * Only available when an amount is capturable or manually mark as paid.
   */
  totalUnsettledSet?: Maybe<MoneyBag>;
  /**
   * Specifies the available amount with currency to capture on the gateway.
   * Only available when an amount is capturable or manually mark as paid.
   * @deprecated Use `totalUnsettledSet` instead
   */
  totalUnsettledV2?: Maybe<MoneyV2>;
};

/** A transaction represents an exchange of money as part of an order. */
export type OrderTransactionPaymentIconArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  crop?: Maybe<CropRegion>;
  scale?: Maybe<Scalars['Int']>;
};

export type OrderTransactionConnection = {
  /** A list of edges. */
  edges: Array<OrderTransactionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type OrderTransactionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of OrderTransactionEdge. */
  node: OrderTransaction;
};

/** A standardized error code, independent of the payment provider. */
export enum OrderTransactionErrorCode {
  /** The card number is incorrect. */
  IncorrectNumber = 'INCORRECT_NUMBER',
  /** The format of the card number is incorrect. */
  InvalidNumber = 'INVALID_NUMBER',
  /** The format of the expiry date is incorrect. */
  InvalidExpiryDate = 'INVALID_EXPIRY_DATE',
  /** The format of the CVC is incorrect. */
  InvalidCvc = 'INVALID_CVC',
  /** The card is expired. */
  ExpiredCard = 'EXPIRED_CARD',
  /** The CVC does not match the card number. */
  IncorrectCvc = 'INCORRECT_CVC',
  /** The ZIP or postal code does not match the card number. */
  IncorrectZip = 'INCORRECT_ZIP',
  /** The address does not match the card number. */
  IncorrectAddress = 'INCORRECT_ADDRESS',
  /** The entered PIN is incorrect. */
  IncorrectPin = 'INCORRECT_PIN',
  /** The card was declined. */
  CardDeclined = 'CARD_DECLINED',
  /** There was an error while processing the payment. */
  ProcessingError = 'PROCESSING_ERROR',
  /** Call the card issuer. */
  CallIssuer = 'CALL_ISSUER',
  /**
   * The card has been reported as lost or stolen, and the card issuer has
   * requested that the merchant keep the card and call the number on the back.
   */
  PickUpCard = 'PICK_UP_CARD',
  /** There is an error in the gateway or merchant configuration. */
  ConfigError = 'CONFIG_ERROR',
  /** A real card was used but the gateway was in test mode. */
  TestModeLiveCard = 'TEST_MODE_LIVE_CARD',
  /** The gateway or merchant configuration doesn't support a feature, such as network tokenization. */
  UnsupportedFeature = 'UNSUPPORTED_FEATURE',
  /** There was an unknown error with processing the payment. */
  GenericError = 'GENERIC_ERROR',
  /** The payment method is not available in the customer's country. */
  InvalidCountry = 'INVALID_COUNTRY',
  /** The amount is either too high or too low for the provider. */
  InvalidAmount = 'INVALID_AMOUNT',
  /** The payment method is momentarily unavailable. */
  PaymentMethodUnavailable = 'PAYMENT_METHOD_UNAVAILABLE',
  /** The payment method was invalid. */
  AmazonPaymentsInvalidPaymentMethod = 'AMAZON_PAYMENTS_INVALID_PAYMENT_METHOD',
  /** The maximum amount has been captured. */
  AmazonPaymentsMaxAmountCharged = 'AMAZON_PAYMENTS_MAX_AMOUNT_CHARGED',
  /** The maximum amount has been refunded. */
  AmazonPaymentsMaxAmountRefunded = 'AMAZON_PAYMENTS_MAX_AMOUNT_REFUNDED',
  /** The maximum of 10 authorizations has been captured for an order. */
  AmazonPaymentsMaxAuthorizationsCaptured = 'AMAZON_PAYMENTS_MAX_AUTHORIZATIONS_CAPTURED',
  /** The maximum of 10 refunds has been processed for an order. */
  AmazonPaymentsMaxRefundsProcessed = 'AMAZON_PAYMENTS_MAX_REFUNDS_PROCESSED',
  /** The order was canceled, which canceled all open authorizations. */
  AmazonPaymentsOrderReferenceCanceled = 'AMAZON_PAYMENTS_ORDER_REFERENCE_CANCELED',
  /** The order was not confirmed within three hours. */
  AmazonPaymentsStale = 'AMAZON_PAYMENTS_STALE',
}

/** Specifies the information needed to create an order transaction. */
export type OrderTransactionInput = {
  /** The amount of money for this transaction. */
  amount: Scalars['Money'];
  /** The payment gateway to use for this transaction. */
  gateway: Scalars['String'];
  /** The kind of transaction. */
  kind: OrderTransactionKind;
  /** The ID of the order associated with the transaction. */
  orderId: Scalars['ID'];
  /** The ID of the optional parent transaction, for example the authorization of a capture. */
  parentId?: Maybe<Scalars['ID']>;
};

/** The different kinds of order transactions. */
export enum OrderTransactionKind {
  /** An authorization and capture performed together in a single step. */
  Sale = 'SALE',
  /** A transfer of the money that was reserved during the authorization stage. */
  Capture = 'CAPTURE',
  /**
   * An amount reserved against the cardholder's funding source.
   * Money does not change hands until the authorization is captured.
   */
  Authorization = 'AUTHORIZATION',
  /** A cancellation of a pending authorization or capture. */
  Void = 'VOID',
  /**
   * A partial or full return of captured funds to the cardholder.
   * A refund can happen only after a capture is processed.
   */
  Refund = 'REFUND',
  /** Money returned to the customer when they have paid too much. */
  Change = 'CHANGE',
  /** An authorization for a payment taken with an EMV credit card reader. */
  EmvAuthorization = 'EMV_AUTHORIZATION',
  /** A suggested refund transaction that can be used to create a refund. */
  SuggestedRefund = 'SUGGESTED_REFUND',
}

/** Transaction status' describe the status of a transaction. */
export enum OrderTransactionStatus {
  /** The transaction succeeded. */
  Success = 'SUCCESS',
  /** The transaction failed. */
  Failure = 'FAILURE',
  /** The transaction is pending. */
  Pending = 'PENDING',
  /** There was an error while processing the transaction. */
  Error = 'ERROR',
  /** Awaiting a response. */
  AwaitingResponse = 'AWAITING_RESPONSE',
  /** The transaction status is unknown. */
  Unknown = 'UNKNOWN',
}

/** Return type for `orderUpdate` mutation. */
export type OrderUpdatePayload = {
  /** The updated order. */
  order?: Maybe<Order>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  /** Indicates if there are more pages to fetch. */
  hasNextPage: Scalars['Boolean'];
  /** Indicates if there are any pages prior to the current page. */
  hasPreviousPage: Scalars['Boolean'];
};

/** List of payment methods used in Shopify. */
export enum PaymentMethods {
  Visa = 'VISA',
  Mastercard = 'MASTERCARD',
  Discover = 'DISCOVER',
  AmericanExpress = 'AMERICAN_EXPRESS',
  DinersClub = 'DINERS_CLUB',
  Jcb = 'JCB',
  Dankort = 'DANKORT',
  Maestro = 'MAESTRO',
  Forbrugsforeningen = 'FORBRUGSFORENINGEN',
  Paypal = 'PAYPAL',
  Bogus = 'BOGUS',
  Bitcoin = 'BITCOIN',
  Litecoin = 'LITECOIN',
  Dogecoin = 'DOGECOIN',
}

/** Settings related to payments. */
export type PaymentSettings = {
  /** List of the digital wallets which the shop supports. */
  supportedDigitalWallets: Array<DigitalWallet>;
};

/**
 * Price rules are a set of conditions, including entitlements and prerequisites,
 * that must be met in order for a discount code to apply.
 */
export type PriceRule = Node &
  CommentEventSubject &
  LegacyInteroperability &
  HasEvents & {
    /** The maximum number of times that the price rule can be allocated onto an order. */
    allocationLimit?: Maybe<Scalars['Int']>;
    /** The method by which the price rule's value is allocated to its entitled items. */
    allocationMethod: PriceRuleAllocationMethod;
    /** The application that created the price rule. */
    app?: Maybe<App>;
    /** The date and time when the price rule was created. */
    createdAt: Scalars['DateTime'];
    /** The customers that can use this price rule. */
    customerSelection: PriceRuleCustomerSelection;
    /** List of the price rule's discount codes. */
    discountCodes: PriceRuleDiscountCodeConnection;
    /** How many discount codes associated with the price rule. */
    discountCodesCount: Scalars['Int'];
    /** The date and time when the price rule ends. For open-ended price rules, use `null`. */
    endsAt?: Maybe<Scalars['DateTime']>;
    /**
     * Quantity of prerequisite items required for the price rule to be applicable,  compared to quantity of entitled items.
     * @deprecated Use `prerequisiteToEntitlementQuantityRatio` instead
     */
    entitlementToPrerequisiteQuantityRatio?: Maybe<
      PriceRuleEntitlementToPrerequisiteQuantityRatio
    >;
    /** The paginated list of events associated with the price rule. */
    events: EventConnection;
    /** A list of the price rule's features. */
    features: Array<PriceRuleFeature>;
    /** Indicates whether there are any timeline comments on the price rule. */
    hasTimelineComment: Scalars['Boolean'];
    /** Globally unique identifier. */
    id: Scalars['ID'];
    /** The items to which the price rule applies. */
    itemEntitlements: PriceRuleItemEntitlements;
    /** The items required for the price rule to be applicable. */
    itemPrerequisites: PriceRuleLineItemPrerequisites;
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars['UnsignedInt64'];
    /** Whether the price rule can be applied only once per customer. */
    oncePerCustomer: Scalars['Boolean'];
    /** The number of the entitled items must fall within this range for the price rule to be applicable. */
    prerequisiteQuantityRange?: Maybe<PriceRuleQuantityRange>;
    /** The shipping cost must fall within this range for the price rule to be applicable. */
    prerequisiteShippingPriceRange?: Maybe<PriceRuleMoneyRange>;
    /** The sum of the entitled items subtotal prices must fall within this range for the price rule to be applicable. */
    prerequisiteSubtotalRange?: Maybe<PriceRuleMoneyRange>;
    /** Quantity of prerequisite items required for the price rule to be applicable,  compared to quantity of entitled items. */
    prerequisiteToEntitlementQuantityRatio?: Maybe<
      PriceRulePrerequisiteToEntitlementQuantityRatio
    >;
    /** URLs that can be used to share the discount. */
    shareableUrls: Array<PriceRuleShareableUrl>;
    /** The shipping lines to which the price rule applies. */
    shippingEntitlements: PriceRuleShippingLineEntitlements;
    /** The date and time when the price rule starts. */
    startsAt: Scalars['DateTime'];
    /** The status of the price rule. */
    status: PriceRuleStatus;
    /** A detailed summary of the price rule. */
    summary?: Maybe<Scalars['String']>;
    /** The type of lines (line_item or shipping_line) to which the price rule applies. */
    target: PriceRuleTarget;
    /** The title of the price rule. */
    title: Scalars['String'];
    /** The total sales from orders where the price rule was used. */
    totalSales?: Maybe<MoneyV2>;
    /**
     * A list of the price rule's features.
     * @deprecated Use `features` instead
     */
    traits: Array<PriceRuleTrait>;
    /**
     * The number of times that the price rule has been used. This value is updated
     * asynchronously and can be different than the actual usage count.
     */
    usageCount: Scalars['Int'];
    /** The maximum number of times that the price rule can be used in total. */
    usageLimit?: Maybe<Scalars['Int']>;
    /** A time period during which a price rule is applicable. */
    validityPeriod: PriceRuleValidityPeriod;
    /**
     * The value of the price rule.
     * @deprecated Use `valueV2` instead
     */
    value: PriceRuleValue;
    /** The value of the price rule. */
    valueV2: PricingValue;
  };

/**
 * Price rules are a set of conditions, including entitlements and prerequisites,
 * that must be met in order for a discount code to apply.
 */
export type PriceRuleDiscountCodesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<DiscountCodeSortKeys>;
  query?: Maybe<Scalars['String']>;
  savedSearchId?: Maybe<Scalars['ID']>;
};

/**
 * Price rules are a set of conditions, including entitlements and prerequisites,
 * that must be met in order for a discount code to apply.
 */
export type PriceRuleEventsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<EventSortKeys>;
  query?: Maybe<Scalars['String']>;
};

/** Return type for `priceRuleActivate` mutation. */
export type PriceRuleActivatePayload = {
  /** The activated price rule. */
  priceRule?: Maybe<PriceRule>;
  /** List of errors that occurred executing the mutation. */
  priceRuleUserErrors: Array<PriceRuleUserError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `priceRuleUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** The method by which the price rule's value is allocated to its entitled items. */
export enum PriceRuleAllocationMethod {
  /** The value will be applied to each of the entitled items. */
  Each = 'EACH',
  /** The value will be applied once across the entitled items. */
  Across = 'ACROSS',
}

export type PriceRuleConnection = {
  /** A list of edges. */
  edges: Array<PriceRuleEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Return type for `priceRuleCreate` mutation. */
export type PriceRuleCreatePayload = {
  /** The newly created price rule. */
  priceRule?: Maybe<PriceRule>;
  /** The newly created discount code. */
  priceRuleDiscountCode?: Maybe<PriceRuleDiscountCode>;
  /** List of errors that occurred executing the mutation. */
  priceRuleUserErrors: Array<PriceRuleUserError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `priceRuleUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** A selection of customers for whom the price rule applies. */
export type PriceRuleCustomerSelection = {
  /** List of customers to whom the price rule applies. */
  customers: CustomerConnection;
  /** Whether the price rule applies to all customers. */
  forAllCustomers: Scalars['Boolean'];
  /** A list of customer saved searches that contain the customers who can use the price rule. */
  savedSearches: Array<SavedSearch>;
};

/** A selection of customers for whom the price rule applies. */
export type PriceRuleCustomerSelectionCustomersArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<CustomerSortKeys>;
  query?: Maybe<Scalars['String']>;
  savedSearchId?: Maybe<Scalars['ID']>;
};

/** Specifies the input fields to update a price rule customer selection. */
export type PriceRuleCustomerSelectionInput = {
  /** Whether the price rule applies to all customers. */
  forAllCustomers?: Maybe<Scalars['Boolean']>;
  /**
   * List of customer saved searches that contain the customers to whom the price
   * rule applies. No single customer IDs may be present.
   */
  savedSearchIds?: Maybe<Array<Scalars['ID']>>;
  /** List of customers to add to the current list of customers to whom the price rule applies. `savedSearchIds` must be empty. */
  customerIdsToAdd?: Maybe<Array<Scalars['ID']>>;
  /** A list of customers to remove from the current list of customers to whom the price rule applies. */
  customerIdsToRemove?: Maybe<Array<Scalars['ID']>>;
};

/** Return type for `priceRuleDeactivate` mutation. */
export type PriceRuleDeactivatePayload = {
  /** The deactivated price rule. */
  priceRule?: Maybe<PriceRule>;
  /** List of errors that occurred executing the mutation. */
  priceRuleUserErrors: Array<PriceRuleUserError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `priceRuleUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** Return type for `priceRuleDelete` mutation. */
export type PriceRuleDeletePayload = {
  /** The id price of the deleted price rule. */
  deletedPriceRuleId?: Maybe<Scalars['ID']>;
  /** List of errors that occurred executing the mutation. */
  priceRuleUserErrors: Array<PriceRuleUserError>;
  /** The shop of the deleted price rule. */
  shop: Shop;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `priceRuleUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** A discount code of a price rule. */
export type PriceRuleDiscountCode = Node & {
  /** The application that created the discount code. */
  app?: Maybe<App>;
  /** The code to use the discount. */
  code: Scalars['String'];
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /**
   * The number of times that the price rule has been used. This value is updated
   * asynchronously and can be different than the actual usage count.
   */
  usageCount: Scalars['Int'];
};

export type PriceRuleDiscountCodeConnection = {
  /** A list of edges. */
  edges: Array<PriceRuleDiscountCodeEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Return type for `priceRuleDiscountCodeCreate` mutation. */
export type PriceRuleDiscountCodeCreatePayload = {
  /** The updated price rule. */
  priceRule?: Maybe<PriceRule>;
  /** The newly created discount code. */
  priceRuleDiscountCode?: Maybe<PriceRuleDiscountCode>;
  /** List of errors that occurred executing the mutation. */
  priceRuleUserErrors: Array<PriceRuleUserError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `priceRuleUserErrors` instead
   */
  userErrors: Array<UserError>;
};

export type PriceRuleDiscountCodeEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of PriceRuleDiscountCodeEdge. */
  node: PriceRuleDiscountCode;
};

/** Specifies the input fields to manipulate a discount code. */
export type PriceRuleDiscountCodeInput = {
  /** The code to use the discount. */
  code?: Maybe<Scalars['String']>;
};

/** Return type for `priceRuleDiscountCodeUpdate` mutation. */
export type PriceRuleDiscountCodeUpdatePayload = {
  /** The updated price rule. */
  priceRule?: Maybe<PriceRule>;
  /** The updated discount code. */
  priceRuleDiscountCode?: Maybe<PriceRuleDiscountCode>;
  /** List of errors that occurred executing the mutation. */
  priceRuleUserErrors: Array<PriceRuleUserError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `priceRuleUserErrors` instead
   */
  userErrors: Array<UserError>;
};

export type PriceRuleEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of PriceRuleEdge. */
  node: PriceRule;
};

/** Quantity of prerequisite items required for the price rule to be applicable, compared to quantity of entitled items. */
export type PriceRuleEntitlementToPrerequisiteQuantityRatio = {
  /** The quantity of entitlements in the ratio. */
  entitlementQuantity: Scalars['Int'];
  /** The quantity of prerequisites in the ratio. */
  prerequisiteQuantity: Scalars['Int'];
};

/**
 * Specifies the quantity of prerequisite items required for the price rule to be
 * applicable, compared to quantity of entitled items.
 */
export type PriceRuleEntitlementToPrerequisiteQuantityRatioInput = {
  /** The quantity of entitlements in the ratio. */
  entitlementQuantity?: Maybe<Scalars['Int']>;
  /** The quantity of prerequisites in the ratio. */
  prerequisiteQuantity?: Maybe<Scalars['Int']>;
};

/** Possible error codes that could be returned by a price rule mutation. */
export enum PriceRuleErrorCode {
  /** Input value is blank. */
  Blank = 'BLANK',
  /** Input value should be equal to allowed value. */
  EqualTo = 'EQUAL_TO',
  /** Input value should be greater than minimum allowed value. */
  GreaterThan = 'GREATER_THAN',
  /** Input value should be greater than or equal to minimum allowed value. */
  GreaterThanOrEqualTo = 'GREATER_THAN_OR_EQUAL_TO',
  /** Input value is invalid. */
  Invalid = 'INVALID',
  /** Input value should be less than maximum allowed value. */
  LessThan = 'LESS_THAN',
  /** Input value should be less or equal to maximum allowed value. */
  LessThanOrEqualTo = 'LESS_THAN_OR_EQUAL_TO',
  /** Input value is already taken. */
  Taken = 'TAKEN',
  /** Input value is too long. */
  TooLong = 'TOO_LONG',
  /** Input value is too short. */
  TooShort = 'TOO_SHORT',
  /** Unexpected internal error happened. */
  InternalError = 'INTERNAL_ERROR',
  /** Too many arguments provided. */
  TooManyArguments = 'TOO_MANY_ARGUMENTS',
  /** Missing a required argument. */
  MissingArgument = 'MISSING_ARGUMENT',
  /** Duplicate customer prerequisite id present. */
  CustomerPrerequisiteDuplicate = 'CUSTOMER_PREREQUISITE_DUPLICATE',
  CannotEntitleCollectionsWithProductsOrVariants = 'CANNOT_ENTITLE_COLLECTIONS_WITH_PRODUCTS_OR_VARIANTS',
  ItemEntitlementInvalidType = 'ITEM_ENTITLEMENT_INVALID_TYPE',
  ItemEntitlementsDuplicateCollection = 'ITEM_ENTITLEMENTS_DUPLICATE_COLLECTION',
  ItemEntitlementsDuplicateProduct = 'ITEM_ENTITLEMENTS_DUPLICATE_PRODUCT',
  ItemEntitlementsDuplicateVariant = 'ITEM_ENTITLEMENTS_DUPLICATE_VARIANT',
  ItemEntitlementsExceededMaxCollection = 'ITEM_ENTITLEMENTS_EXCEEDED_MAX_COLLECTION',
  ItemEntitlementsExceededMaxProduct = 'ITEM_ENTITLEMENTS_EXCEEDED_MAX_PRODUCT',
  ItemEntitlementsExceededMaxVariant = 'ITEM_ENTITLEMENTS_EXCEEDED_MAX_VARIANT',
  ItemEntitlementsInvalidCollection = 'ITEM_ENTITLEMENTS_INVALID_COLLECTION',
  ItemEntitlementsInvalidProduct = 'ITEM_ENTITLEMENTS_INVALID_PRODUCT',
  ItemEntitlementsInvalidTargetTypeOrSelection = 'ITEM_ENTITLEMENTS_INVALID_TARGET_TYPE_OR_SELECTION',
  ItemEntitlementsInvalidVariant = 'ITEM_ENTITLEMENTS_INVALID_VARIANT',
  ItemEntitlementsMissing = 'ITEM_ENTITLEMENTS_MISSING',
  VariantAlreadyEntitledThroughProduct = 'VARIANT_ALREADY_ENTITLED_THROUGH_PRODUCT',
  CannotPrerequisiteCollectionWithProductOrVariants = 'CANNOT_PREREQUISITE_COLLECTION_WITH_PRODUCT_OR_VARIANTS',
  ItemPrerequisitesDuplicateCollection = 'ITEM_PREREQUISITES_DUPLICATE_COLLECTION',
  ItemPrerequisitesDuplicateProduct = 'ITEM_PREREQUISITES_DUPLICATE_PRODUCT',
  ItemPrerequisitesDuplicateVariant = 'ITEM_PREREQUISITES_DUPLICATE_VARIANT',
  ItemPrerequisitesExceededMax = 'ITEM_PREREQUISITES_EXCEEDED_MAX',
  ItemPrerequisitesInvalidCollection = 'ITEM_PREREQUISITES_INVALID_COLLECTION',
  ItemPrerequisitesInvalidProduct = 'ITEM_PREREQUISITES_INVALID_PRODUCT',
  ItemPrerequisitesInvalidType = 'ITEM_PREREQUISITES_INVALID_TYPE',
  ItemPrerequisitesInvalidVariant = 'ITEM_PREREQUISITES_INVALID_VARIANT',
  ItemPrerequisitesMissing = 'ITEM_PREREQUISITES_MISSING',
  ItemPrerequisitesMustBeEmpty = 'ITEM_PREREQUISITES_MUST_BE_EMPTY',
  InvalidTargetTypePrerequisiteShippingPriceRange = 'INVALID_TARGET_TYPE_PREREQUISITE_SHIPPING_PRICE_RANGE',
  ShippingEntitlementsDuplicateCountry = 'SHIPPING_ENTITLEMENTS_DUPLICATE_COUNTRY',
  ShippingEntitlementsExceededMax = 'SHIPPING_ENTITLEMENTS_EXCEEDED_MAX',
  ShippingEntitlementsInvalidCountry = 'SHIPPING_ENTITLEMENTS_INVALID_COUNTRY',
  ShippingEntitlementsInvalidTargetTypeOrSelection = 'SHIPPING_ENTITLEMENTS_INVALID_TARGET_TYPE_OR_SELECTION',
  ShippingEntitlementsMissing = 'SHIPPING_ENTITLEMENTS_MISSING',
  ShippingEntitlementsUnsupportedDestinationType = 'SHIPPING_ENTITLEMENTS_UNSUPPORTED_DESTINATION_TYPE',
  BothCustomerAndSavedSearchPrerequisitesSelected = 'BOTH_CUSTOMER_AND_SAVED_SEARCH_PREREQUISITES_SELECTED',
  CustomerPrerequisitesExceededMax = 'CUSTOMER_PREREQUISITES_EXCEEDED_MAX',
  CustomerPrerequisitesInvalidSelection = 'CUSTOMER_PREREQUISITES_INVALID_SELECTION',
  CustomerPrerequisitesMissing = 'CUSTOMER_PREREQUISITES_MISSING',
  CustomerSavedSearchDuplicate = 'CUSTOMER_SAVED_SEARCH_DUPLICATE',
  CustomerSavedSearchExceededMax = 'CUSTOMER_SAVED_SEARCH_EXCEEDED_MAX',
  CustomerSavedSearchInvalid = 'CUSTOMER_SAVED_SEARCH_INVALID',
  DiscountCodeDuplicate = 'DISCOUNT_CODE_DUPLICATE',
  /** Exceeds maximum number allowed. */
  ExceededMax = 'EXCEEDED_MAX',
  BogoInvalidTargetSelection = 'BOGO_INVALID_TARGET_SELECTION',
  BogoInvalidTargetType = 'BOGO_INVALID_TARGET_TYPE',
  BogoInvalidValueType = 'BOGO_INVALID_VALUE_TYPE',
  AllocationMethodMustBeAcrossForGivenTargetSelection = 'ALLOCATION_METHOD_MUST_BE_ACROSS_FOR_GIVEN_TARGET_SELECTION',
  EndDateBeforeStartDate = 'END_DATE_BEFORE_START_DATE',
  PrerequisiteSubtotalAndQuantityRangeBothPresent = 'PREREQUISITE_SUBTOTAL_AND_QUANTITY_RANGE_BOTH_PRESENT',
  PriceRuleAllocationLimitIsZero = 'PRICE_RULE_ALLOCATION_LIMIT_IS_ZERO',
  PriceRuleAllocationLimitOnNonBogo = 'PRICE_RULE_ALLOCATION_LIMIT_ON_NON_BOGO',
  PriceRuleExceededMaxDiscountCode = 'PRICE_RULE_EXCEEDED_MAX_DISCOUNT_CODE',
  PriceRulePercentageValueOutsideRange = 'PRICE_RULE_PERCENTAGE_VALUE_OUTSIDE_RANGE',
  ShopExceededMaxPriceRules = 'SHOP_EXCEEDED_MAX_PRICE_RULES',
}

/** A list of features used by the price rule. */
export enum PriceRuleFeature {
  /** The price rule supports quantity BXGY discounts. */
  BuyOneGetOne = 'BUY_ONE_GET_ONE',
  /** The price rule supports BXGY discounts using custom allocation limit. */
  BuyOneGetOneWithAllocationLimit = 'BUY_ONE_GET_ONE_WITH_ALLOCATION_LIMIT',
  /** The price rule supports bulk discounts. */
  Bulk = 'BULK',
  /** The price rule supports specific customers. */
  SpecificCustomers = 'SPECIFIC_CUSTOMERS',
  /** The price rule supports quantity discounts. */
  QuantityDiscounts = 'QUANTITY_DISCOUNTS',
}

/** The value of a fixed amount price rule. */
export type PriceRuleFixedAmountValue = {
  /** The monetary value of the price rule. */
  amount: Scalars['Money'];
};

/** Specifies the input fields to manipulate a price rule. */
export type PriceRuleInput = {
  /** PriceRuleValidityPeriod for the price rule. */
  validityPeriod?: Maybe<PriceRuleValidityPeriodInput>;
  /** Whether the price rule can be applied only once per customer. */
  oncePerCustomer?: Maybe<Scalars['Boolean']>;
  /** The customers that can use this price rule. */
  customerSelection?: Maybe<PriceRuleCustomerSelectionInput>;
  /** The maximum number of times that the price rule can be used in total. */
  usageLimit?: Maybe<Scalars['Int']>;
  /** Title of the price rule. */
  title?: Maybe<Scalars['String']>;
  /** The maximum number of times that the price rule can be allocated onto an order. */
  allocationLimit?: Maybe<Scalars['Int']>;
  /** The method by which the price rule's value is allocated to its entitled items. */
  allocationMethod?: Maybe<PriceRuleAllocationMethod>;
  /** The value of the price rule. */
  value?: Maybe<PriceRuleValueInput>;
  /** The type of lines (line_item or shipping_line) to which the price rule applies. */
  target?: Maybe<PriceRuleTarget>;
  /** The sum of the entitled items subtotal prices must fall within this range for the price rule to be applicable. */
  prerequisiteSubtotalRange?: Maybe<PriceRuleMoneyRangeInput>;
  /** The number of the entitled items must fall within this range for the price rule to be applicable. */
  prerequisiteQuantityRange?: Maybe<PriceRuleQuantityRangeInput>;
  /** The shipping cost must fall within this range for the price rule to be applicable. */
  prerequisiteShippingPriceRange?: Maybe<PriceRuleMoneyRangeInput>;
  /** The items to which the price rule applies. */
  itemEntitlements?: Maybe<PriceRuleItemEntitlementsInput>;
  /** The items required for the price rule to be applicable. */
  itemPrerequisites?: Maybe<PriceRuleItemPrerequisitesInput>;
  /** The shipping lines to which the price rule applies. */
  shippingEntitlements?: Maybe<PriceRuleShippingEntitlementsInput>;
  /**
   * Quantity of prerequisite items required for the price rule to be applicable,
   * compared to quantity of entitled items. This argument is deprecated: Use
   * `prerequisiteToEntitlementQuantityRatio` instead.
   */
  entitlementToPrerequisiteQuantityRatio?: Maybe<
    PriceRuleEntitlementToPrerequisiteQuantityRatioInput
  >;
  /** Quantity of prerequisite items required for the price rule to be applicable, compared to quantity of entitled items. */
  prerequisiteToEntitlementQuantityRatio?: Maybe<
    PriceRulePrerequisiteToEntitlementQuantityRatioInput
  >;
};

/**
 * The items to which this price rule applies. This may be multiple products,
 * product variants, collections or combinations of the aforementioned.
 */
export type PriceRuleItemEntitlements = {
  /** The collections to which the price rule applies. */
  collections: CollectionConnection;
  /** The product variants to which the price rule applies. */
  productVariants: ProductVariantConnection;
  /** The products to which the price rule applies. */
  products: ProductConnection;
  /** Whether the price rule applies to all line items. */
  targetAllLineItems: Scalars['Boolean'];
};

/**
 * The items to which this price rule applies. This may be multiple products,
 * product variants, collections or combinations of the aforementioned.
 */
export type PriceRuleItemEntitlementsCollectionsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/**
 * The items to which this price rule applies. This may be multiple products,
 * product variants, collections or combinations of the aforementioned.
 */
export type PriceRuleItemEntitlementsProductVariantsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/**
 * The items to which this price rule applies. This may be multiple products,
 * product variants, collections or combinations of the aforementioned.
 */
export type PriceRuleItemEntitlementsProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Specifies the input fields to update a price rule line item entitlement. */
export type PriceRuleItemEntitlementsInput = {
  /** Whether the price rule applies to all items. */
  targetAllLineItems?: Maybe<Scalars['Boolean']>;
  /** The products to which the price rule applies. */
  productIds?: Maybe<Array<Scalars['ID']>>;
  /** The product variants to which the price rule applies. */
  productVariantIds?: Maybe<Array<Scalars['ID']>>;
  /** The collections to which the price rule applies. */
  collectionIds?: Maybe<Array<Scalars['ID']>>;
};

/** Specifies the input fields to update a price rule's item prerequisites. */
export type PriceRuleItemPrerequisitesInput = {
  /** The products needed for the price rule to be applied. */
  productIds?: Maybe<Array<Scalars['ID']>>;
  /** The product variants needed for the price rule to be applied. */
  productVariantIds?: Maybe<Array<Scalars['ID']>>;
  /** The collections needed for the price rule to be applied. */
  collectionIds?: Maybe<Array<Scalars['ID']>>;
};

/**
 * Single or multiple line item products, product variants or collections required
 * for the price rule to be applicable, can also be provided in combination.
 */
export type PriceRuleLineItemPrerequisites = {
  /** The collections required for the price rule to be applicable. */
  collections: CollectionConnection;
  /** The product variants required for the price rule to be applicable. */
  productVariants: ProductVariantConnection;
  /** The products required for the price rule to be applicable. */
  products: ProductConnection;
};

/**
 * Single or multiple line item products, product variants or collections required
 * for the price rule to be applicable, can also be provided in combination.
 */
export type PriceRuleLineItemPrerequisitesCollectionsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/**
 * Single or multiple line item products, product variants or collections required
 * for the price rule to be applicable, can also be provided in combination.
 */
export type PriceRuleLineItemPrerequisitesProductVariantsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/**
 * Single or multiple line item products, product variants or collections required
 * for the price rule to be applicable, can also be provided in combination.
 */
export type PriceRuleLineItemPrerequisitesProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** A money range within which the price rule is applicable. */
export type PriceRuleMoneyRange = {
  /** The lower bound of the money range. */
  greaterThan?: Maybe<Scalars['Money']>;
  /** The lower bound or equal of the money range. */
  greaterThanOrEqualTo?: Maybe<Scalars['Money']>;
  /** The upper bound of the money range. */
  lessThan?: Maybe<Scalars['Money']>;
  /** The upper bound or equal of the money range. */
  lessThanOrEqualTo?: Maybe<Scalars['Money']>;
};

/** Specifies the input fields to update the money range within which the price rule is applicable. */
export type PriceRuleMoneyRangeInput = {
  /** The upper bound of the money range. */
  lessThan?: Maybe<Scalars['Money']>;
  /** The upper or equal bound of the money range. */
  lessThanOrEqualTo?: Maybe<Scalars['Money']>;
  /** The lower bound of the money range. */
  greaterThan?: Maybe<Scalars['Money']>;
  /** The lower or equal bound of the money range. */
  greaterThanOrEqualTo?: Maybe<Scalars['Money']>;
};

/** The value of a percent price rule. */
export type PriceRulePercentValue = {
  /** The percent value of the price rule. */
  percentage: Scalars['Float'];
};

/** Quantity of prerequisite items required for the price rule to be applicable, compared to quantity of entitled items. */
export type PriceRulePrerequisiteToEntitlementQuantityRatio = {
  /** The quantity of entitlements in the ratio. */
  entitlementQuantity: Scalars['Int'];
  /** The quantity of prerequisites in the ratio. */
  prerequisiteQuantity: Scalars['Int'];
};

/**
 * Specifies the quantity of prerequisite items required for the price rule to be
 * applicable, compared to quantity of entitled items.
 */
export type PriceRulePrerequisiteToEntitlementQuantityRatioInput = {
  /** The quantity of entitlements in the ratio. */
  entitlementQuantity?: Maybe<Scalars['Int']>;
  /** The quantity of prerequisites in the ratio. */
  prerequisiteQuantity?: Maybe<Scalars['Int']>;
};

/** A quantity range within which the price rule is applicable. */
export type PriceRuleQuantityRange = {
  /** The lower bound of the quantity range. */
  greaterThan?: Maybe<Scalars['Int']>;
  /** The lower bound or equal of the quantity range. */
  greaterThanOrEqualTo?: Maybe<Scalars['Int']>;
  /** The upper bound of the quantity range. */
  lessThan?: Maybe<Scalars['Int']>;
  /** The upper bound or equal of the quantity range. */
  lessThanOrEqualTo?: Maybe<Scalars['Int']>;
};

/** Specifies the input fields to update the quantity range within which the price rule is applicable. */
export type PriceRuleQuantityRangeInput = {
  /** The upper bound of the quantity range. */
  lessThan?: Maybe<Scalars['Int']>;
  /** The upper or equal bound of the quantity range. */
  lessThanOrEqualTo?: Maybe<Scalars['Int']>;
  /** The lower bound of the quantity range. */
  greaterThan?: Maybe<Scalars['Int']>;
  /** The lower or equal bound of the quantity range. */
  greaterThanOrEqualTo?: Maybe<Scalars['Int']>;
};

/** Shareable URL for the discount code associated with the price rule. */
export type PriceRuleShareableUrl = {
  /** The image URL of the item (product or collection) to which the discount applies. */
  targetItemImage?: Maybe<Image>;
  /** The type of page that's associated with the URL. */
  targetType: PriceRuleShareableUrlTargetType;
  /** The title of the page that's associated with the URL. */
  title: Scalars['String'];
  /** The URL for the discount code. */
  url: Scalars['URL'];
};

/** Page type where shareable URL lands. */
export enum PriceRuleShareableUrlTargetType {
  Home = 'HOME',
  Product = 'PRODUCT',
  Collection = 'COLLECTION',
}

/** Specifies the input fields to update a price rule shipping entitlement. */
export type PriceRuleShippingEntitlementsInput = {
  /** Whether the price rule applies to all shipping lines. */
  targetAllShippingLines?: Maybe<Scalars['Boolean']>;
  /** The codes for the countries to which the price rule applies to. */
  countryCodes?: Maybe<Array<CountryCode>>;
  /** Whether the price rule is applicable to countries that have not been defined in the shop's shipping zones. */
  includeRestOfWorld?: Maybe<Scalars['Boolean']>;
};

/** The shipping lines to which the price rule applies to. */
export type PriceRuleShippingLineEntitlements = {
  /** The codes for the countries to which the price rule applies to. */
  countryCodes: Array<CountryCode>;
  /** Whether the price rule is applicable to countries that have not been defined in the shop's shipping zones. */
  includeRestOfWorld: Scalars['Boolean'];
  /** Whether the price rule applies to all shipping lines. */
  targetAllShippingLines: Scalars['Boolean'];
};

/** The set of valid sort keys for the PriceRule query. */
export enum PriceRuleSortKeys {
  /** Sort by the `starts_at` value. */
  StartsAt = 'STARTS_AT',
  /** Sort by the `ends_at` value. */
  EndsAt = 'ENDS_AT',
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
}

/** The status of the price rule. */
export enum PriceRuleStatus {
  Active = 'ACTIVE',
  Expired = 'EXPIRED',
  Scheduled = 'SCHEDULED',
}

/** The type of lines (line_item or shipping_line) to which the price rule applies. */
export enum PriceRuleTarget {
  /** The price rule applies to line items. */
  LineItem = 'LINE_ITEM',
  /** The price rule applies to shipping lines. */
  ShippingLine = 'SHIPPING_LINE',
}

/** A list of features used by the price rule. */
export enum PriceRuleTrait {
  /** The price rule supports quantity BXGY discounts. */
  BuyOneGetOne = 'BUY_ONE_GET_ONE',
  /** The price rule supports BXGY discounts using custom allocation limit. */
  BuyOneGetOneWithAllocationLimit = 'BUY_ONE_GET_ONE_WITH_ALLOCATION_LIMIT',
  /** The price rule supports bulk discounts. */
  Bulk = 'BULK',
  /** The price rule supports specific customers. */
  SpecificCustomers = 'SPECIFIC_CUSTOMERS',
  /** The price rule supports quantity discounts. */
  QuantityDiscounts = 'QUANTITY_DISCOUNTS',
}

/** Return type for `priceRuleUpdate` mutation. */
export type PriceRuleUpdatePayload = {
  /** The updated price rule. */
  priceRule?: Maybe<PriceRule>;
  /** The updated discount code. */
  priceRuleDiscountCode?: Maybe<PriceRuleDiscountCode>;
  /** List of errors that occurred executing the mutation. */
  priceRuleUserErrors: Array<PriceRuleUserError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `priceRuleUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** Represents an error that happens during execution of a price rule mutation. */
export type PriceRuleUserError = DisplayableError & {
  /** Error code to uniquely identify the error. */
  code?: Maybe<PriceRuleErrorCode>;
  /** Path to the input field which caused the error. */
  field?: Maybe<Array<Scalars['String']>>;
  /** The error message. */
  message: Scalars['String'];
};

/** A time period during which a price rule is applicable. */
export type PriceRuleValidityPeriod = {
  /** The time after which the price rule becomes invalid. */
  end?: Maybe<Scalars['DateTime']>;
  /** The time after which the price rule is valid. */
  start: Scalars['DateTime'];
};

/** Specifies the input fields to update the validity period of a price rule. */
export type PriceRuleValidityPeriodInput = {
  /** The time after which the price rule is valid. */
  start: Scalars['DateTime'];
  /** The time after which the price rule becomes invalid. */
  end?: Maybe<Scalars['DateTime']>;
};

/** The value of the price rule. */
export type PriceRuleValue = PriceRulePercentValue | PriceRuleFixedAmountValue;

/** Specifies the input fields to update a price rule. */
export type PriceRuleValueInput = {
  /** The percentage value of the price rule. */
  percentageValue?: Maybe<Scalars['Float']>;
  /** The fixed amount value of the price rule. */
  fixedAmountValue?: Maybe<Scalars['Money']>;
};

/** The value of the percentage pricing object. */
export type PricingPercentageValue = {
  /** The percentage value of the object. */
  percentage: Scalars['Float'];
};

/** The value of the pricing object. */
export type PricingValue = PricingPercentageValue | MoneyV2;

/**
 * Private metafields represent custom metadata that is attached to a resource.
 * Private metafields are private to the application that creates them on a shop's resources.
 */
export type PrivateMetafield = Node & {
  /** The date and time when the private metafield was created. */
  createdAt: Scalars['DateTime'];
  /** The id of the private metafield. */
  id: Scalars['ID'];
  /** The key name for a private metafield. */
  key: Scalars['String'];
  /** The namespace for a private metafield. */
  namespace: Scalars['String'];
  /** The date and time when the private metafield was updated. */
  updatedAt: Scalars['DateTime'];
  /** The value of a private metafield. */
  value: Scalars['String'];
  /** Represents the private metafield value type. */
  valueType: PrivateMetafieldValueType;
};

export type PrivateMetafieldConnection = {
  /** A list of edges. */
  edges: Array<PrivateMetafieldEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Specifies the input fields for a PrivateMetafield. */
export type PrivateMetafieldDeleteInput = {
  /** The ID of the owning resource. */
  owner?: Maybe<Scalars['ID']>;
  /** The namespace for the private metafield. */
  namespace: Scalars['String'];
  /** The key for the private metafield. */
  key: Scalars['String'];
};

/** Return type for `privateMetafieldDelete` mutation. */
export type PrivateMetafieldDeletePayload = {
  /** The ID of private metafield that was deleted. */
  deletedPrivateMetafieldId?: Maybe<Scalars['ID']>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

export type PrivateMetafieldEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of PrivateMetafieldEdge. */
  node: PrivateMetafield;
};

/** Specifies the input fields for a PrivateMetafield. */
export type PrivateMetafieldInput = {
  /** The owning resource. */
  owner?: Maybe<Scalars['ID']>;
  /** The namespace for the private metafield. */
  namespace: Scalars['String'];
  /** The key for the private metafield. */
  key: Scalars['String'];
  /** The value and value type of the metafield, wrapped in a ValueInput object. */
  valueInput: PrivateMetafieldValueInput;
};

/** Return type for `privateMetafieldUpsert` mutation. */
export type PrivateMetafieldUpsertPayload = {
  /** The private metafield that was created or updated. */
  privateMetafield?: Maybe<PrivateMetafield>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Value Input wraps two fields of Private Metafields into one. Those fields are value and value_type. */
export type PrivateMetafieldValueInput = {
  /** The value of a private metafield. */
  value: Scalars['String'];
  /** Represents the private metafield value type. */
  valueType: PrivateMetafieldValueType;
};

/** Private Metafield value types. */
export enum PrivateMetafieldValueType {
  /** A private metafield value type. */
  String = 'STRING',
  /** A private metafield value type. */
  Integer = 'INTEGER',
  /** A private metafield value type. */
  JsonString = 'JSON_STRING',
}

/** Represents a product, including information about related collections and product variants. */
export type Product = Node &
  Navigable &
  HasMetafields &
  HasPublishedTranslations &
  Publishable &
  OnlineStorePreviewable &
  LegacyInteroperability & {
    /** The number of publications a resource is published to without feedback errors. */
    availablePublicationCount: Scalars['Int'];
    /**
     * The description of the product, complete with HTML formatting.
     * @deprecated Use `descriptionHtml` instead
     */
    bodyHtml?: Maybe<Scalars['String']>;
    /** A list of the collections that include the product. */
    collections: CollectionConnection;
    /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the product was created. */
    createdAt: Scalars['DateTime'];
    /** A default cursor for use in pagination. */
    defaultCursor: Scalars['String'];
    /** A stripped description of the product, single line with HTML tags removed. */
    description: Scalars['String'];
    /** The description of the product, complete with HTML formatting. */
    descriptionHtml: Scalars['HTML'];
    /**
     * Stripped description of the product, single line with HTML tags removed.
     * Truncated to 60 characters.
     * @deprecated Use `description` instead
     */
    descriptionPlainSummary: Scalars['String'];
    /** The featured image for the product. */
    featuredImage?: Maybe<Image>;
    /** The featured media for the product. */
    featuredMedia?: Maybe<Media>;
    /** Information about the product that's provided through resource feedback. */
    feedback?: Maybe<ResourceFeedback>;
    /** The theme template used when viewing the gift card in a store. */
    giftCardTemplateSuffix?: Maybe<Scalars['String']>;
    /** A unique human-friendly string of the product's title. */
    handle: Scalars['String'];
    /** Whether the product has only a single variant with the default option and value. */
    hasOnlyDefaultVariant: Scalars['Boolean'];
    /** Whether the product has out of stock variants. */
    hasOutOfStockVariants: Scalars['Boolean'];
    /** Globally unique identifier. */
    id: Scalars['ID'];
    /** The images associated with the product. */
    images: ImageConnection;
    /** Whether the product is in a given collection. */
    inCollection: Scalars['Boolean'];
    /** Whether the product is a gift card. */
    isGiftCard: Scalars['Boolean'];
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars['UnsignedInt64'];
    /** The media associated with the product. */
    media: MediaConnection;
    /** Total count of media belonging to a product. */
    mediaCount: Scalars['Int'];
    /** The metafield associated with the resource. */
    metafield?: Maybe<Metafield>;
    /** A paginated list of metafields associated with the resource. */
    metafields: MetafieldConnection;
    /** The online store preview URL. */
    onlineStorePreviewUrl?: Maybe<Scalars['URL']>;
    /**
     * The online store URL for the product.
     * A value of `null` indicates that the product is not published to the Online Store sales channel.
     */
    onlineStoreUrl?: Maybe<Scalars['URL']>;
    /** A list of custom product options (maximum of 3 per product). */
    options: Array<ProductOption>;
    /** The price range of the product. */
    priceRange: ProductPriceRange;
    /** Returns a private metafield found by namespace and key. */
    privateMetafield?: Maybe<PrivateMetafield>;
    /** List of private metafields. */
    privateMetafields: PrivateMetafieldConnection;
    /**
     * A list of the channels where the product is published.
     * @deprecated Use `resourcePublications` instead
     */
    productPublications: ProductPublicationConnection;
    /** The product type specified by the merchant. */
    productType: Scalars['String'];
    /** The number of publications a resource is published on. */
    publicationCount: Scalars['Int'];
    /**
     * A list of the channels where the product is published.
     * @deprecated Use `resourcePublications` instead
     */
    publications: ProductPublicationConnection;
    /**
     * The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601))
     * when the product was published to the Online Store.
     */
    publishedAt?: Maybe<Scalars['DateTime']>;
    /**
     * Check to see whether the resource is published to a given channel.
     * @deprecated Use `publishedOnPublication` instead
     */
    publishedOnChannel: Scalars['Boolean'];
    /**
     * Check to see whether the resource is published to the calling app's channel.
     * @deprecated Use `publishedOnCurrentPublication` instead
     */
    publishedOnCurrentChannel: Scalars['Boolean'];
    /** Check to see whether the resource is published to the calling app's publication. */
    publishedOnCurrentPublication: Scalars['Boolean'];
    /** Check to see whether the resource is published to a given publication. */
    publishedOnPublication: Scalars['Boolean'];
    /** The list of resources that are published to a publication. */
    resourcePublications: ResourcePublicationConnection;
    /** SEO information of the product. */
    seo: Seo;
    /** The storefront ID of the product. */
    storefrontId: Scalars['StorefrontID'];
    /** A list of the tags that have been added to the product. */
    tags: Array<Scalars['String']>;
    /** The theme template used when viewing the product in a store. */
    templateSuffix?: Maybe<Scalars['String']>;
    /** The title of the product. */
    title: Scalars['String'];
    /** The quantity of inventory in stock. */
    totalInventory: Scalars['Int'];
    /** The number of variants that are associated with the product. */
    totalVariants: Scalars['Int'];
    /** Whether inventory tracking has been enabled for the product. */
    tracksInventory: Scalars['Boolean'];
    /** The translations associated with the resource. */
    translations: Array<PublishedTranslation>;
    /**
     * The list of channels that the resource is not published to.
     * @deprecated Use `unpublishedPublications` instead
     */
    unpublishedChannels: ChannelConnection;
    /** The list of publications that the resource is not published to. */
    unpublishedPublications: PublicationConnection;
    /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the product was last modified. */
    updatedAt: Scalars['DateTime'];
    /** A list of variants associated with the product. */
    variants: ProductVariantConnection;
    /** The name of the product's vendor. */
    vendor: Scalars['String'];
  };

/** Represents a product, including information about related collections and product variants. */
export type ProductCollectionsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<CollectionSortKeys>;
  query?: Maybe<Scalars['String']>;
};

/** Represents a product, including information about related collections and product variants. */
export type ProductDescriptionArgs = {
  truncateAt?: Maybe<Scalars['Int']>;
};

/** Represents a product, including information about related collections and product variants. */
export type ProductImagesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<ProductImageSortKeys>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  crop?: Maybe<CropRegion>;
  scale?: Maybe<Scalars['Int']>;
};

/** Represents a product, including information about related collections and product variants. */
export type ProductInCollectionArgs = {
  id: Scalars['ID'];
};

/** Represents a product, including information about related collections and product variants. */
export type ProductMediaArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<ProductMediaSortKeys>;
};

/** Represents a product, including information about related collections and product variants. */
export type ProductMetafieldArgs = {
  namespace: Scalars['String'];
  key: Scalars['String'];
};

/** Represents a product, including information about related collections and product variants. */
export type ProductMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Represents a product, including information about related collections and product variants. */
export type ProductOptionsArgs = {
  first?: Maybe<Scalars['Int']>;
};

/** Represents a product, including information about related collections and product variants. */
export type ProductPrivateMetafieldArgs = {
  namespace: Scalars['String'];
  key: Scalars['String'];
};

/** Represents a product, including information about related collections and product variants. */
export type ProductPrivateMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Represents a product, including information about related collections and product variants. */
export type ProductProductPublicationsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Represents a product, including information about related collections and product variants. */
export type ProductPublicationCountArgs = {
  onlyPublished?: Maybe<Scalars['Boolean']>;
};

/** Represents a product, including information about related collections and product variants. */
export type ProductPublicationsArgs = {
  onlyPublished?: Maybe<Scalars['Boolean']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Represents a product, including information about related collections and product variants. */
export type ProductPublishedOnChannelArgs = {
  channelId: Scalars['ID'];
};

/** Represents a product, including information about related collections and product variants. */
export type ProductPublishedOnPublicationArgs = {
  publicationId: Scalars['ID'];
};

/** Represents a product, including information about related collections and product variants. */
export type ProductResourcePublicationsArgs = {
  onlyPublished?: Maybe<Scalars['Boolean']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Represents a product, including information about related collections and product variants. */
export type ProductTranslationsArgs = {
  locale: Scalars['String'];
};

/** Represents a product, including information about related collections and product variants. */
export type ProductUnpublishedChannelsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Represents a product, including information about related collections and product variants. */
export type ProductUnpublishedPublicationsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Represents a product, including information about related collections and product variants. */
export type ProductVariantsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<ProductVariantSortKeys>;
};

/** Specifies product images to append. */
export type ProductAppendImagesInput = {
  /** The ID of the product. */
  id: Scalars['ID'];
  /** The images to be appended to the product. */
  images: Array<ImageInput>;
};

/** Return type for `productAppendImages` mutation. */
export type ProductAppendImagesPayload = {
  /** List of new images appended to the product. */
  newImages?: Maybe<Array<Image>>;
  /** The product object. */
  product?: Maybe<Product>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `productAppendImages` mutation. */
export type ProductAppendImagesPayloadNewImagesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  crop?: Maybe<CropRegion>;
  scale?: Maybe<Scalars['Int']>;
};

/** The set of valid sort keys for the ProductCollection query. */
export enum ProductCollectionSortKeys {
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `price` value. */
  Price = 'PRICE',
  /** Sort by the `best-selling` value. */
  BestSelling = 'BEST_SELLING',
  /** Sort by the `created` value. */
  Created = 'CREATED',
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `manual` value. */
  Manual = 'MANUAL',
  /** Sort by the `collection-default` value. */
  CollectionDefault = 'COLLECTION_DEFAULT',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
}

export type ProductConnection = {
  /** A list of edges. */
  edges: Array<ProductEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Return type for `productCreateMedia` mutation. */
export type ProductCreateMediaPayload = {
  /** The newly created media. */
  media?: Maybe<Array<Media>>;
  /** List of errors that occurred executing the mutation. */
  mediaUserErrors: Array<MediaUserError>;
  /** The product associated with the media. */
  product?: Maybe<Product>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `mediaUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** Return type for `productCreate` mutation. */
export type ProductCreatePayload = {
  /** The product object. */
  product?: Maybe<Product>;
  /** The shop associated with the product. */
  shop: Shop;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `productDeleteImages` mutation. */
export type ProductDeleteImagesPayload = {
  /** This is an array of IDs of images to delete. */
  deletedImageIds: Array<Scalars['ID']>;
  /** This is the product object. */
  product?: Maybe<Product>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Specifies the product to delete. */
export type ProductDeleteInput = {
  /** The ID of the product. */
  id: Scalars['ID'];
};

/** Return type for `productDeleteMedia` mutation. */
export type ProductDeleteMediaPayload = {
  /** List of media IDs which were deleted. */
  deletedMediaIds?: Maybe<Array<Scalars['ID']>>;
  /** List of product image IDs which were deleted. */
  deletedProductImageIds?: Maybe<Array<Scalars['ID']>>;
  /** List of errors that occurred executing the mutation. */
  mediaUserErrors: Array<MediaUserError>;
  /** The product which media was deleted from. */
  product?: Maybe<Product>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `mediaUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** Return type for `productDelete` mutation. */
export type ProductDeletePayload = {
  /** The ID of the deleted product. */
  deletedProductId?: Maybe<Scalars['ID']>;
  /** The shop associated with the product. */
  shop: Shop;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `productDuplicate` mutation. */
export type ProductDuplicatePayload = {
  /** The asynchronous job duplicating the product images. */
  imageJob?: Maybe<Job>;
  /** The duplicated product. */
  newProduct?: Maybe<Product>;
  /** The user's shop. */
  shop: Shop;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

export type ProductEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of ProductEdge. */
  node: Product;
};

/** The set of valid sort keys for the ProductImage query. */
export enum ProductImageSortKeys {
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `position` value. */
  Position = 'POSITION',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
}

/** Return type for `productImageUpdate` mutation. */
export type ProductImageUpdatePayload = {
  /** Image updated. */
  image?: Maybe<Image>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `productImageUpdate` mutation. */
export type ProductImageUpdatePayloadImageArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  crop?: Maybe<CropRegion>;
  scale?: Maybe<Scalars['Int']>;
};

/** Specifies the input fields required to create a product. */
export type ProductInput = {
  /** The description of the product, complete with HTML formatting. */
  descriptionHtml?: Maybe<Scalars['String']>;
  /** A unique human-friendly string for the product. Automatically generated from the product's title. */
  handle?: Maybe<Scalars['String']>;
  /**
   * Whether a redirect is required after a new handle has been provided.
   * If true, then the old handle is redirected to the new one automatically.
   */
  redirectNewHandle?: Maybe<Scalars['Boolean']>;
  /** The SEO information associated with the product. */
  seo?: Maybe<SeoInput>;
  /** The product type specified by the merchant. */
  productType?: Maybe<Scalars['String']>;
  /** A list of the tags that have been added to the product. */
  tags?: Maybe<Array<Scalars['String']>>;
  /** The theme template used when viewing the product in a store. */
  templateSuffix?: Maybe<Scalars['String']>;
  /** Whether the product is a gift card. */
  giftCard?: Maybe<Scalars['Boolean']>;
  /** The theme template used when viewing the gift card in a store. */
  giftCardTemplateSuffix?: Maybe<Scalars['String']>;
  /** The title of the product. */
  title?: Maybe<Scalars['String']>;
  /** The name of the product's vendor. */
  vendor?: Maybe<Scalars['String']>;
  /** A description of the product. Supports HTML formatting. This argument is deprecated: Use `descriptionHtml` instead. */
  bodyHtml?: Maybe<Scalars['String']>;
  /** The IDs of the collections that this product will be added to. */
  collectionsToJoin?: Maybe<Array<Scalars['ID']>>;
  /** The IDs of collections that will no longer include the product. */
  collectionsToLeave?: Maybe<Array<Scalars['ID']>>;
  /** Specifies the product to update or create a new product if absent. */
  id?: Maybe<Scalars['ID']>;
  /** The images to associate with the product. */
  images?: Maybe<Array<ImageInput>>;
  /** The metafields to associate with this product. */
  metafields?: Maybe<Array<MetafieldInput>>;
  /** The private metafields to associated with this product. */
  privateMetafields?: Maybe<Array<PrivateMetafieldInput>>;
  /** List of custom product options (maximum of 3 per product). */
  options?: Maybe<Array<Scalars['String']>>;
  /** A list of the channels where the product is published. This argument is deprecated: Use `PublishablePublish` instead. */
  productPublications?: Maybe<Array<ProductPublicationInput>>;
  /** A list of the channels where the product is published. This argument is deprecated: Use `PublishablePublish` instead. */
  publications?: Maybe<Array<ProductPublicationInput>>;
  /** This argument is deprecated: Use `PublishablePublish` instead. */
  publishDate?: Maybe<Scalars['DateTime']>;
  /** This argument is deprecated: Use `PublishablePublish` instead. */
  publishOn?: Maybe<Scalars['DateTime']>;
  /** This argument is deprecated: Use `PublishablePublish` instead. */
  published?: Maybe<Scalars['Boolean']>;
  /** This argument is deprecated: Use `PublishablePublish` instead. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** A list of variants associated with the product. */
  variants?: Maybe<Array<ProductVariantInput>>;
};

/** The set of valid sort keys for the ProductMedia query. */
export enum ProductMediaSortKeys {
  /** Sort by the `position` value. */
  Position = 'POSITION',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
}

/**
 * Custom product property names like "Size", "Color", and "Material".
 * Products are based on permutations of these options.
 * A product may have a maximum of 3 options.
 * 255 characters limit each.
 */
export type ProductOption = Node &
  HasPublishedTranslations & {
    /** Globally unique identifier. */
    id: Scalars['ID'];
    /** The product option’s name. */
    name: Scalars['String'];
    /** The product option's position. */
    position: Scalars['Int'];
    /** The translations associated with the resource. */
    translations: Array<PublishedTranslation>;
    /** The corresponding value to the product option name. */
    values: Array<Scalars['String']>;
  };

/**
 * Custom product property names like "Size", "Color", and "Material".
 * Products are based on permutations of these options.
 * A product may have a maximum of 3 options.
 * 255 characters limit each.
 */
export type ProductOptionTranslationsArgs = {
  locale: Scalars['String'];
};

/** The price range of the product. */
export type ProductPriceRange = {
  /** The highest variant's price. */
  maxVariantPrice: MoneyV2;
  /** The lowest variant's price. */
  minVariantPrice: MoneyV2;
};

/** Represents the channels where a product is published. */
export type ProductPublication = {
  /** The channel where the product was or is published. */
  channel: Channel;
  /** Whether the publication is published or not. */
  isPublished: Scalars['Boolean'];
  /** The product that was or is going to be published on the channel. */
  product: Product;
  /** The date that the product was or is going to be published on the channel. */
  publishDate?: Maybe<Scalars['DateTime']>;
};

export type ProductPublicationConnection = {
  /** A list of edges. */
  edges: Array<ProductPublicationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProductPublicationEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of ProductPublicationEdge. */
  node: ProductPublication;
};

/** Specifies a publication to which a product will be published. */
export type ProductPublicationInput = {
  /** ID of the publication. */
  publicationId?: Maybe<Scalars['ID']>;
  /** ID of the channel. This argument is deprecated: Use publicationId instead. */
  channelId?: Maybe<Scalars['ID']>;
  /** This argument is deprecated: Use publicationId instead. */
  channelHandle?: Maybe<Scalars['String']>;
  /** The date and time that the product was (or will be) published. */
  publishDate?: Maybe<Scalars['DateTime']>;
};

/** Specifies a product to publish and the channels to publish it to. */
export type ProductPublishInput = {
  /** The product to create or update publications for. */
  id: Scalars['ID'];
  /** The publication that the product is published to. */
  productPublications: Array<ProductPublicationInput>;
};

/** Return type for `productPublish` mutation. */
export type ProductPublishPayload = {
  /** The product that has been published. */
  product?: Maybe<Product>;
  /**
   * The channels where the product is published.
   * @deprecated Use Product.publications instead.
   */
  productPublications?: Maybe<Array<ProductPublication>>;
  /** The user's shop. */
  shop: Shop;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `productReorderImages` mutation. */
export type ProductReorderImagesPayload = {
  /** The asynchronous job reordering the images. */
  job?: Maybe<Job>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `productReorderMedia` mutation. */
export type ProductReorderMediaPayload = {
  /** The asynchronous job reordering the media. */
  job?: Maybe<Job>;
  /** List of errors that occurred executing the mutation. */
  mediaUserErrors: Array<MediaUserError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `mediaUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** The set of valid sort keys for the Product query. */
export enum ProductSortKeys {
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `product_type` value. */
  ProductType = 'PRODUCT_TYPE',
  /** Sort by the `vendor` value. */
  Vendor = 'VENDOR',
  /** Sort by the `inventory_total` value. */
  InventoryTotal = 'INVENTORY_TOTAL',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `published_at` value. */
  PublishedAt = 'PUBLISHED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
}

/** Specifies a product to unpublish from a channel and the sales channels to unpublish it from. */
export type ProductUnpublishInput = {
  /** The ID of the product to create or update publications for. */
  id: Scalars['ID'];
  /** The channels to unpublish the product from. */
  productPublications: Array<ProductPublicationInput>;
};

/** Return type for `productUnpublish` mutation. */
export type ProductUnpublishPayload = {
  /** The product that has been unpublished. */
  product?: Maybe<Product>;
  /** The user's shop. */
  shop: Shop;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `productUpdateMedia` mutation. */
export type ProductUpdateMediaPayload = {
  /** The updated media. */
  media?: Maybe<Array<Media>>;
  /** List of errors that occurred executing the mutation. */
  mediaUserErrors: Array<MediaUserError>;
  /** The product which media was updated on. */
  product?: Maybe<Product>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `mediaUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** Return type for `productUpdate` mutation. */
export type ProductUpdatePayload = {
  /** The updated product. */
  product?: Maybe<Product>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Represents a product variant. */
export type ProductVariant = Node &
  HasMetafields &
  HasPublishedTranslations &
  Navigable &
  LegacyInteroperability & {
    /** Whether the product variant is available for sale. */
    availableForSale: Scalars['Boolean'];
    /** The value of the barcode associated with the product. */
    barcode?: Maybe<Scalars['String']>;
    /** The compare-at price of the variant in the default shop currency. */
    compareAtPrice?: Maybe<Scalars['Money']>;
    /** The date and time when the variant was created. */
    createdAt: Scalars['DateTime'];
    /** A default cursor for use in pagination. */
    defaultCursor: Scalars['String'];
    /** The delivery profile for the variant. */
    deliveryProfile?: Maybe<DeliveryProfile>;
    /** Display name of the variant, based on product's title + variant's title. */
    displayName: Scalars['String'];
    /** The fulfillment service associated with the product. */
    fulfillmentService?: Maybe<FulfillmentService>;
    /** Whether changes to the fulfillment service for the product variant are allowed. */
    fulfillmentServiceEditable: EditableProperty;
    /**
     * The Harmonized System Code (or HS Tariff Code) for the variant.
     * @deprecated Use `InventoryItem.harmonizedSystemCode` instead.
     */
    harmonizedSystemCode?: Maybe<Scalars['String']>;
    /** Globally unique identifier. */
    id: Scalars['ID'];
    /** The featured image for the variant. */
    image?: Maybe<Image>;
    /**
     * The featured image for the variant.
     * @deprecated Use the singular `image` field instead. There may never be more than one variant image.
     */
    images: Array<Image>;
    /** The ID for the inventory item, which is used to query for inventory information. */
    inventoryItem: InventoryItem;
    /**
     * The fulfillment service that tracks the number of items in stock for the product variant.
     * @deprecated Use tracked attribute on `inventoryItem` instead.
     */
    inventoryManagement: ProductVariantInventoryManagement;
    /** Whether customers are allowed to place an order for the product variant when it's out of stock. */
    inventoryPolicy: ProductVariantInventoryPolicy;
    /** The total sellable quantity of the variant. */
    inventoryQuantity?: Maybe<Scalars['Int']>;
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars['UnsignedInt64'];
    /** The metafield associated with the resource. */
    metafield?: Maybe<Metafield>;
    /** A paginated list of metafields associated with the resource. */
    metafields: MetafieldConnection;
    /** The order of the product variant in the list of product variants. The first position in the list is 1. */
    position: Scalars['Int'];
    /** List of prices and compare-at prices in the presentment currencies for this shop. */
    presentmentPrices: ProductVariantPricePairConnection;
    /** The price of the product variant in the default shop currency. */
    price: Scalars['Money'];
    /** Returns a private metafield found by namespace and key. */
    privateMetafield?: Maybe<PrivateMetafield>;
    /** List of private metafields. */
    privateMetafields: PrivateMetafieldConnection;
    /** The product that this variant belongs to. */
    product: Product;
    /**
     * Whether a customer needs to provide a shipping address when placing an order for the product variant.
     * @deprecated Use `InventoryItem.requiresShipping` instead.
     */
    requiresShipping: Scalars['Boolean'];
    /** List of product options applied to the variant. */
    selectedOptions: Array<SelectedOption>;
    /** An identifier for the product variant in the shop. Required in order to connect to a fulfillment service. */
    sku?: Maybe<Scalars['String']>;
    /** The storefront ID of the product variant. */
    storefrontId: Scalars['StorefrontID'];
    /** The tax code for the product variant. */
    taxCode?: Maybe<Scalars['String']>;
    /** Whether a tax is charged when the product variant is sold. */
    taxable: Scalars['Boolean'];
    /** The title of the product variant. */
    title: Scalars['String'];
    /** The translations associated with the resource. */
    translations: Array<PublishedTranslation>;
    /** The date and time (ISO 8601 format) when the product variant was last modified. */
    updatedAt: Scalars['DateTime'];
    /** The weight of the product variant in the unit system specified with weight_unit. */
    weight?: Maybe<Scalars['Float']>;
    /**
     * The unit of measurement that applies to the product variant's weight. If you
     * don't specify a value for weight_unit, then the shop's default unit of
     * measurement is applied. Valid values: `g`, `kg`, `oz`, `lb`.
     */
    weightUnit: WeightUnit;
  };

/** Represents a product variant. */
export type ProductVariantImageArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  crop?: Maybe<CropRegion>;
  scale?: Maybe<Scalars['Int']>;
};

/** Represents a product variant. */
export type ProductVariantImagesArgs = {
  first?: Maybe<Scalars['Int']>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  crop?: Maybe<CropRegion>;
  scale?: Maybe<Scalars['Int']>;
};

/** Represents a product variant. */
export type ProductVariantMetafieldArgs = {
  namespace: Scalars['String'];
  key: Scalars['String'];
};

/** Represents a product variant. */
export type ProductVariantMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Represents a product variant. */
export type ProductVariantPresentmentPricesArgs = {
  presentmentCurrencies?: Maybe<Array<CurrencyCode>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Represents a product variant. */
export type ProductVariantPrivateMetafieldArgs = {
  namespace: Scalars['String'];
  key: Scalars['String'];
};

/** Represents a product variant. */
export type ProductVariantPrivateMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Represents a product variant. */
export type ProductVariantTranslationsArgs = {
  locale: Scalars['String'];
};

export type ProductVariantConnection = {
  /** A list of edges. */
  edges: Array<ProductVariantEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Return type for `productVariantCreate` mutation. */
export type ProductVariantCreatePayload = {
  /** The product associated with the variant. */
  product?: Maybe<Product>;
  /** The successfully created variant. */
  productVariant?: Maybe<ProductVariant>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `productVariantDelete` mutation. */
export type ProductVariantDeletePayload = {
  /** ID of the deleted product variant. */
  deletedProductVariantId?: Maybe<Scalars['ID']>;
  /** Product of the deleted product variant. */
  product?: Maybe<Product>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

export type ProductVariantEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of ProductVariantEdge. */
  node: ProductVariant;
};

/** Specifies a product variant to create or update. */
export type ProductVariantInput = {
  /** The value of the barcode associated with the product. */
  barcode?: Maybe<Scalars['String']>;
  /** The compare-at price of the variant. */
  compareAtPrice?: Maybe<Scalars['Money']>;
  /** The ID of the fulfillment service associated with the variant. */
  fulfillmentServiceId?: Maybe<Scalars['ID']>;
  /** The Harmonized System Code (or HS Tariff Code) for the variant. */
  harmonizedSystemCode?: Maybe<Scalars['String']>;
  /** Specifies the product variant to update or create a new variant if absent. */
  id?: Maybe<Scalars['ID']>;
  /** The ID of the image that's associated with the variant. */
  imageId?: Maybe<Scalars['ID']>;
  /**
   * The URL of an image to associate with the variant.  This field can only be
   * used through mutations that create product images and must match one of the
   * URLs being created on the product.
   */
  imageSrc?: Maybe<Scalars['String']>;
  /**
   * The fulfillment service that tracks the number of items in stock for the
   * product variant. If you track the inventory yourself using the admin, then set
   * the value to `shopify`. Valid values: `shopify` or the handle of a fulfillment
   * service that has inventory management enabled.
   *  This argument is deprecated: Use tracked attribute on `inventoryItem` instead.
   */
  inventoryManagement?: Maybe<ProductVariantInventoryManagement>;
  /** Whether customers are allowed to place an order for the product variant when it's out of stock. */
  inventoryPolicy?: Maybe<ProductVariantInventoryPolicy>;
  /** Create only field. The inventory quantities at each location where the variant is stocked. */
  inventoryQuantities?: Maybe<Array<InventoryLevelInput>>;
  /** Inventory Item associated with the variant, used for unit cost. */
  inventoryItem?: Maybe<InventoryItemInput>;
  /** Additional customizable information about the product variant. */
  metafields?: Maybe<Array<MetafieldInput>>;
  /** The private metafields to associated with this product. */
  privateMetafields?: Maybe<Array<PrivateMetafieldInput>>;
  /** The custom properties that a shop owner uses to define product variants. */
  options?: Maybe<Array<Scalars['String']>>;
  /** The order of the product variant in the list of product variants. The first position in the list is 1. */
  position?: Maybe<Scalars['Int']>;
  /** The price of the variant. */
  price?: Maybe<Scalars['Money']>;
  /** Create only required field. Specifies the product on which to create the variant. */
  productId?: Maybe<Scalars['ID']>;
  /** Whether the variant requires shipping. */
  requiresShipping?: Maybe<Scalars['Boolean']>;
  /** The SKU for the variant. */
  sku?: Maybe<Scalars['String']>;
  /** Whether the variant is taxable. */
  taxable?: Maybe<Scalars['Boolean']>;
  /** This argument is deprecated: Variant title is not a writable field; it is generated from the selected variant options. */
  title?: Maybe<Scalars['String']>;
  /** The tax code associated with the variant. */
  taxCode?: Maybe<Scalars['String']>;
  /** The weight of the variant. */
  weight?: Maybe<Scalars['Float']>;
  /** The unit of weight that's used to measure the variant. */
  weightUnit?: Maybe<WeightUnit>;
};

/** The method of inventory tracking for a product variant. */
export enum ProductVariantInventoryManagement {
  /** Shopify tracks this product variant's inventory. */
  Shopify = 'SHOPIFY',
  /** This product variant's inventory is not tracked. */
  NotManaged = 'NOT_MANAGED',
  /** A third-party fulfillment service tracks this product variant's inventory. */
  FulfillmentService = 'FULFILLMENT_SERVICE',
}

/**
 * The inventory policy for a product variant controls whether customers can continue to buy the variant when it
 * is out of stock. When the value is <code>continue</code>, customers are able to buy the variant when it's out of stock.
 * When the value is <code>deny</code>, customers can't buy the variant when it's out of stock.
 */
export enum ProductVariantInventoryPolicy {
  /** Stop selling a product variant when it is out of stock. */
  Deny = 'DENY',
  /** Continue selling a product variant when it is out of stock. */
  Continue = 'CONTINUE',
}

/** The compare-at price and price of a variant sharing a currency. */
export type ProductVariantPricePair = {
  /** The compare-at price of the variant with associated currency. */
  compareAtPrice?: Maybe<MoneyV2>;
  /** The price of the variant with associated currency. */
  price: MoneyV2;
};

export type ProductVariantPricePairConnection = {
  /** A list of edges. */
  edges: Array<ProductVariantPricePairEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProductVariantPricePairEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of ProductVariantPricePairEdge. */
  node: ProductVariantPricePair;
};

/** The set of valid sort keys for the ProductVariant query. */
export enum ProductVariantSortKeys {
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `name` value. */
  Name = 'NAME',
  /** Sort by the `sku` value. */
  Sku = 'SKU',
  /** Sort by the `inventory_quantity` value. */
  InventoryQuantity = 'INVENTORY_QUANTITY',
  /** Sort by the `inventory_management` value. */
  InventoryManagement = 'INVENTORY_MANAGEMENT',
  /** Sort by the `inventory_levels.available` value. */
  InventoryLevelsAvailable = 'INVENTORY_LEVELS_AVAILABLE',
  /** Sort by the `inventory_policy` value. */
  InventoryPolicy = 'INVENTORY_POLICY',
  /** Sort by the `full_title` value. */
  FullTitle = 'FULL_TITLE',
  /** Sort by the `popular` value. */
  Popular = 'POPULAR',
  /** Sort by the `position` value. */
  Position = 'POSITION',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
}

/** Return type for `productVariantUpdate` mutation. */
export type ProductVariantUpdatePayload = {
  /** The product associated with the variant. */
  product?: Maybe<Product>;
  /** The updated variant. */
  productVariant?: Maybe<ProductVariant>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** The set of valid sort keys for the ProfileItem query. */
export enum ProfileItemSortKeys {
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `product_type` value. */
  ProductType = 'PRODUCT_TYPE',
  /** Sort by the `vendor` value. */
  Vendor = 'VENDOR',
  /** Sort by the `inventory_total` value. */
  InventoryTotal = 'INVENTORY_TOTAL',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `published_at` value. */
  PublishedAt = 'PUBLISHED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
}

/**
 * A publication is a group of products and collections that is published to an
 * app. A publication can be a platform or marketplace such
 * as Facebook or Pinterest, an online store, or POS.
 */
export type Publication = Node & {
  /** The app associated with the publication. */
  app: App;
  /** The collection publications for the list of collections published to the publication. */
  collectionPublicationsV3: ResourcePublicationConnection;
  /** The list of collections published to the publication. */
  collections: CollectionConnection;
  /** Whether the collection is available to the publication. */
  hasCollection: Scalars['Boolean'];
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** Name of the publication. */
  name: Scalars['String'];
  /** The product publications for the list of products published to the publication. */
  productPublicationsV3: ResourcePublicationConnection;
  /** The list of products published to the publication. */
  products: ProductConnection;
  /** Whether or not this publication supports future publishing. */
  supportsFuturePublishing: Scalars['Boolean'];
};

/**
 * A publication is a group of products and collections that is published to an
 * app. A publication can be a platform or marketplace such
 * as Facebook or Pinterest, an online store, or POS.
 */
export type PublicationCollectionPublicationsV3Args = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/**
 * A publication is a group of products and collections that is published to an
 * app. A publication can be a platform or marketplace such
 * as Facebook or Pinterest, an online store, or POS.
 */
export type PublicationCollectionsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/**
 * A publication is a group of products and collections that is published to an
 * app. A publication can be a platform or marketplace such
 * as Facebook or Pinterest, an online store, or POS.
 */
export type PublicationHasCollectionArgs = {
  id: Scalars['ID'];
};

/**
 * A publication is a group of products and collections that is published to an
 * app. A publication can be a platform or marketplace such
 * as Facebook or Pinterest, an online store, or POS.
 */
export type PublicationProductPublicationsV3Args = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/**
 * A publication is a group of products and collections that is published to an
 * app. A publication can be a platform or marketplace such
 * as Facebook or Pinterest, an online store, or POS.
 */
export type PublicationProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

export type PublicationConnection = {
  /** A list of edges. */
  edges: Array<PublicationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PublicationEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of PublicationEdge. */
  node: Publication;
};

/** Specifies the input fields required to publish a resource. */
export type PublicationInput = {
  /** ID of the channel. This argument is deprecated: Use publicationId instead. */
  channelId?: Maybe<Scalars['ID']>;
  /** ID of the publication. */
  publicationId?: Maybe<Scalars['ID']>;
  /** The date and time that the product was (or will be) published. */
  publishDate?: Maybe<Scalars['DateTime']>;
};

/**
 * Represents a resource that can be published to a channel.
 * A publishable resource can be either a Product or Collection.
 */
export type Publishable = {
  /** The number of publications a resource is published to without feedback errors. */
  availablePublicationCount: Scalars['Int'];
  /** The number of publications a resource is published on. */
  publicationCount: Scalars['Int'];
  /**
   * Check to see whether the resource is published to a given channel.
   * @deprecated Use `publishedOnPublication` instead
   */
  publishedOnChannel: Scalars['Boolean'];
  /**
   * Check to see whether the resource is published to the calling app's channel.
   * @deprecated Use `publishedOnCurrentPublication` instead
   */
  publishedOnCurrentChannel: Scalars['Boolean'];
  /** Check to see whether the resource is published to the calling app's publication. */
  publishedOnCurrentPublication: Scalars['Boolean'];
  /** Check to see whether the resource is published to a given publication. */
  publishedOnPublication: Scalars['Boolean'];
  /** The list of resources that are published to a publication. */
  resourcePublications: ResourcePublicationConnection;
  /**
   * The list of channels that the resource is not published to.
   * @deprecated Use `unpublishedPublications` instead
   */
  unpublishedChannels: ChannelConnection;
  /** The list of publications that the resource is not published to. */
  unpublishedPublications: PublicationConnection;
};

/**
 * Represents a resource that can be published to a channel.
 * A publishable resource can be either a Product or Collection.
 */
export type PublishablePublicationCountArgs = {
  onlyPublished?: Maybe<Scalars['Boolean']>;
};

/**
 * Represents a resource that can be published to a channel.
 * A publishable resource can be either a Product or Collection.
 */
export type PublishablePublishedOnChannelArgs = {
  channelId: Scalars['ID'];
};

/**
 * Represents a resource that can be published to a channel.
 * A publishable resource can be either a Product or Collection.
 */
export type PublishablePublishedOnPublicationArgs = {
  publicationId: Scalars['ID'];
};

/**
 * Represents a resource that can be published to a channel.
 * A publishable resource can be either a Product or Collection.
 */
export type PublishableResourcePublicationsArgs = {
  onlyPublished?: Maybe<Scalars['Boolean']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/**
 * Represents a resource that can be published to a channel.
 * A publishable resource can be either a Product or Collection.
 */
export type PublishableUnpublishedChannelsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/**
 * Represents a resource that can be published to a channel.
 * A publishable resource can be either a Product or Collection.
 */
export type PublishableUnpublishedPublicationsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Return type for `publishablePublish` mutation. */
export type PublishablePublishPayload = {
  /** Resource that has been published. */
  publishable?: Maybe<Publishable>;
  /** The user's shop. */
  shop: Shop;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `publishablePublishToCurrentChannel` mutation. */
export type PublishablePublishToCurrentChannelPayload = {
  /** Resource that has been published. */
  publishable?: Maybe<Publishable>;
  /** The user's shop. */
  shop: Shop;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `publishableUnpublish` mutation. */
export type PublishableUnpublishPayload = {
  /** Resource that has been unpublished. */
  publishable?: Maybe<Publishable>;
  /** The user's shop. */
  shop: Shop;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `publishableUnpublishToCurrentChannel` mutation. */
export type PublishableUnpublishToCurrentChannelPayload = {
  /** Resource that has been published. */
  publishable?: Maybe<Publishable>;
  /** The user's shop. */
  shop: Shop;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Published translation of a field of a resource. */
export type PublishedTranslation = {
  /** Translation key. */
  key: Scalars['String'];
  /** Translation locale. */
  locale: Scalars['String'];
  /** Translation value. */
  value?: Maybe<Scalars['String']>;
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRoot = {
  /** Lookup an App by ID or return the currently authenticated App. */
  app?: Maybe<App>;
  /**
   * Fetches app by handle.
   * Returns null if the app doesn't exist.
   */
  appByHandle?: Maybe<App>;
  /**
   * Fetches app by apiKey.
   * Returns null if the app doesn't exist.
   */
  appByKey?: Maybe<App>;
  /** Lookup an AppInstallation by ID or return the AppInstallation for the currently authenticated App. */
  appInstallation?: Maybe<AppInstallation>;
  /** List of app installations. */
  appInstallations: AppInstallationConnection;
  /**
   * Returns an automatic discount resource by ID.
   * @deprecated Use `automaticDiscountNode` instead
   */
  automaticDiscount?: Maybe<DiscountAutomatic>;
  /** Returns an automatic discount resource by ID. */
  automaticDiscountNode?: Maybe<DiscountAutomaticNode>;
  /** List of automatic discounts. */
  automaticDiscountNodes: DiscountAutomaticNodeConnection;
  /** List of the shop's automatic discount saved searches. */
  automaticDiscountSavedSearches: SavedSearchConnection;
  /**
   * List of automatic discounts.
   * @deprecated Use `automaticDiscountNodes` instead
   */
  automaticDiscounts: DiscountAutomaticConnection;
  /** List of activated carrier services and which shop locations support them. */
  availableCarrierServices: Array<DeliveryCarrierServiceAndLocations>;
  /** List of available locales. */
  availableLocales: Array<Locale>;
  /** Lookup a carrier service by ID. */
  carrierService?: Maybe<DeliveryCarrierService>;
  /**
   * Lookup a channel by ID.
   * @deprecated Use `publication` instead
   */
  channel?: Maybe<Channel>;
  /**
   * List of the active sales channels.
   * @deprecated Use `publications` instead
   */
  channels: ChannelConnection;
  /** Returns a code discount resource by ID. */
  codeDiscountNode?: Maybe<DiscountCodeNode>;
  /** Returns a code discount identified by its code. */
  codeDiscountNodeByCode?: Maybe<DiscountCodeNode>;
  /**
   * List of code discounts. Special fields for query params:
   *  * status: active, expired, scheduled
   *  * type: bxgy, fixed_amount, free_shipping, percentage.
   */
  codeDiscountNodes: DiscountCodeNodeConnection;
  /** List of the shop's code discount saved searches. */
  codeDiscountSavedSearches: SavedSearchConnection;
  /** Returns a Collection resource by ID. */
  collection?: Maybe<Collection>;
  /** Return a collection by its handle. */
  collectionByHandle?: Maybe<Collection>;
  /** A list of rule conditions to define how collections with rules can be created. */
  collectionRulesConditions: Array<CollectionRuleConditions>;
  /** List of the shop's collection saved searches. */
  collectionSavedSearches: SavedSearchConnection;
  /** List of collections. */
  collections: CollectionConnection;
  /** Return the AppInstallation for the currently authenticated App. */
  currentAppInstallation: AppInstallation;
  /** Returns the current app's most recent BulkOperation. */
  currentBulkOperation?: Maybe<BulkOperation>;
  /** Returns a Customer resource by ID. */
  customer?: Maybe<Customer>;
  /** List of the shop's customer saved searches. */
  customerSavedSearches: SavedSearchConnection;
  /** List of customers. */
  customers: CustomerConnection;
  /** The paginated list of deletion events. */
  deletionEvents: DeletionEventConnection;
  /** Lookup a Delivery Profile by ID. */
  deliveryProfile?: Maybe<DeliveryProfile>;
  /** List of saved delivery profiles. */
  deliveryProfiles: DeliveryProfileConnection;
  /** The shop-wide shipping settings. */
  deliverySettings?: Maybe<DeliverySetting>;
  /** Lookup a Domain by ID. */
  domain?: Maybe<Domain>;
  /** Returns a DraftOrder resource by ID. */
  draftOrder?: Maybe<DraftOrder>;
  /** List of the shop's draft order saved searches. */
  draftOrderSavedSearches: SavedSearchConnection;
  /** List of saved draft orders. */
  draftOrders: DraftOrderConnection;
  /** Returns a Fulfillment resource by ID. */
  fulfillment?: Maybe<Fulfillment>;
  /** Returns a Fulfillment order resource by ID. */
  fulfillmentOrder?: Maybe<FulfillmentOrder>;
  /** Returns a FulfillmentService resource by ID. */
  fulfillmentService?: Maybe<FulfillmentService>;
  /** Returns an InventoryItem resource by ID. */
  inventoryItem?: Maybe<InventoryItem>;
  /** List of inventory items. */
  inventoryItems: InventoryItemConnection;
  /** Returns an InventoryLevel resource by ID. */
  inventoryLevel?: Maybe<InventoryLevel>;
  /** Returns a Job resource by ID. Used to check the status of internal jobs and any applicable changes. */
  job?: Maybe<Job>;
  /** Returns an inventory Location resource by ID. */
  location?: Maybe<Location>;
  /** List of active locations. */
  locations: LocationConnection;
  /**
   * Returns a list of all origin locations available for a delivery profile.
   * @deprecated Use `locationsAvailableForDeliveryProfilesConnection` instead
   */
  locationsAvailableForDeliveryProfiles?: Maybe<Array<Location>>;
  /** Returns a list of all origin locations available for a delivery profile. */
  locationsAvailableForDeliveryProfilesConnection: LocationConnection;
  /** List of a campaign's marketing activities. */
  marketingActivities: MarketingActivityConnection;
  /** Returns a MarketingActivity resource by ID. */
  marketingActivity?: Maybe<MarketingActivity>;
  /** Returns a MarketingEvent resource by ID. */
  marketingEvent?: Maybe<MarketingEvent>;
  /** List of marketing events. */
  marketingEvents: MarketingEventConnection;
  /** List of metafield namespaces and keys visible to the Storefront API. */
  metafieldStorefrontVisibilities: MetafieldStorefrontVisibilityConnection;
  /** Returns metafield storefront visibility by ID. */
  metafieldStorefrontVisibility?: Maybe<MetafieldStorefrontVisibility>;
  /** Returns a specific node by ID. */
  node?: Maybe<Node>;
  /** Returns the list of nodes with the given IDs. */
  nodes: Array<Maybe<Node>>;
  /** Returns an Order resource by ID. */
  order?: Maybe<Order>;
  /** List of the shop's order saved searches. */
  orderSavedSearches: SavedSearchConnection;
  /** List of orders placed. */
  orders: OrderConnection;
  /** Lookup a price rule by ID. */
  priceRule?: Maybe<PriceRule>;
  /** List of the shop's price rule saved searches. */
  priceRuleSavedSearches: SavedSearchConnection;
  /** List of price rules. */
  priceRules: PriceRuleConnection;
  /** Returns a private metafield by ID. */
  privateMetafield?: Maybe<PrivateMetafield>;
  /** List of private metafields. */
  privateMetafields: PrivateMetafieldConnection;
  /** Returns a Product resource by ID. */
  product?: Maybe<Product>;
  /** Return a product by its handle. */
  productByHandle?: Maybe<Product>;
  /** List of the shop's product saved searches. */
  productSavedSearches: SavedSearchConnection;
  /** Returns a ProductVariant resource by ID. */
  productVariant?: Maybe<ProductVariant>;
  /** List of the product variants. */
  productVariants: ProductVariantConnection;
  /** List of products. */
  products: ProductConnection;
  /** The list of public Admin API versions, including supported, release candidate and unstable versions. */
  publicApiVersions: Array<ApiVersion>;
  /** Lookup a publication by ID. */
  publication?: Maybe<Publication>;
  /** List of the active publications. */
  publications: PublicationConnection;
  /** Returns a Refund resource by ID. */
  refund?: Maybe<Refund>;
  /** Lookup a script tag resource by ID. */
  scriptTag?: Maybe<ScriptTag>;
  /** List of script tags. */
  scriptTags: ScriptTagConnection;
  /** Returns a Shop resource corresponding to access token used in request. */
  shop: Shop;
  /** List of locales available on a shop. */
  shopLocales: Array<ShopLocale>;
  /** Shopify Payments account information, including balances and payouts. */
  shopifyPaymentsAccount?: Maybe<ShopifyPaymentsAccount>;
  /** List of TenderTransactions associated with the Shop. */
  tenderTransactions: TenderTransactionConnection;
  /** Translatable resource. */
  translatableResource?: Maybe<TranslatableResource>;
  /** List of translatable resources. */
  translatableResources: TranslatableResourceConnection;
  /** Returns a webhook subscription by ID. */
  webhookSubscription?: Maybe<WebhookSubscription>;
  /** List of webhook subscriptions. */
  webhookSubscriptions: WebhookSubscriptionConnection;
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootAppArgs = {
  id?: Maybe<Scalars['ID']>;
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootAppByHandleArgs = {
  handle: Scalars['String'];
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootAppByKeyArgs = {
  apiKey: Scalars['String'];
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootAppInstallationArgs = {
  id?: Maybe<Scalars['ID']>;
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootAppInstallationsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<AppInstallationSortKeys>;
  category?: Maybe<AppInstallationCategory>;
  privacy?: Maybe<AppInstallationPrivacy>;
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootAutomaticDiscountArgs = {
  id: Scalars['ID'];
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootAutomaticDiscountNodeArgs = {
  id: Scalars['ID'];
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootAutomaticDiscountNodesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<AutomaticDiscountSortKeys>;
  query?: Maybe<Scalars['String']>;
  savedSearchId?: Maybe<Scalars['ID']>;
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootAutomaticDiscountSavedSearchesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootAutomaticDiscountsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<AutomaticDiscountSortKeys>;
  query?: Maybe<Scalars['String']>;
  savedSearchId?: Maybe<Scalars['ID']>;
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootCarrierServiceArgs = {
  id: Scalars['ID'];
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootChannelArgs = {
  id: Scalars['ID'];
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootChannelsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootCodeDiscountNodeArgs = {
  id: Scalars['ID'];
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootCodeDiscountNodeByCodeArgs = {
  code: Scalars['String'];
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootCodeDiscountNodesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<CodeDiscountSortKeys>;
  query?: Maybe<Scalars['String']>;
  savedSearchId?: Maybe<Scalars['ID']>;
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootCodeDiscountSavedSearchesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootCollectionArgs = {
  id: Scalars['ID'];
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootCollectionByHandleArgs = {
  handle: Scalars['String'];
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootCollectionSavedSearchesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootCollectionsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<CollectionSortKeys>;
  query?: Maybe<Scalars['String']>;
  savedSearchId?: Maybe<Scalars['ID']>;
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootCustomerArgs = {
  id: Scalars['ID'];
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootCustomerSavedSearchesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<CustomerSavedSearchSortKeys>;
  query?: Maybe<Scalars['String']>;
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootCustomersArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<CustomerSortKeys>;
  query?: Maybe<Scalars['String']>;
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootDeletionEventsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<DeletionEventSortKeys>;
  query?: Maybe<Scalars['String']>;
  subjectTypes?: Maybe<Array<DeletionEventSubjectType>>;
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootDeliveryProfileArgs = {
  id: Scalars['ID'];
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootDeliveryProfilesArgs = {
  merchantOwnedOnly?: Maybe<Scalars['Boolean']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootDomainArgs = {
  id: Scalars['ID'];
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootDraftOrderArgs = {
  id: Scalars['ID'];
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootDraftOrderSavedSearchesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootDraftOrdersArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<DraftOrderSortKeys>;
  query?: Maybe<Scalars['String']>;
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootFulfillmentArgs = {
  id: Scalars['ID'];
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootFulfillmentOrderArgs = {
  id: Scalars['ID'];
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootFulfillmentServiceArgs = {
  id: Scalars['ID'];
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootInventoryItemArgs = {
  id: Scalars['ID'];
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootInventoryItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  query?: Maybe<Scalars['String']>;
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootInventoryLevelArgs = {
  id: Scalars['ID'];
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootJobArgs = {
  id: Scalars['ID'];
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootLocationArgs = {
  id?: Maybe<Scalars['ID']>;
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootLocationsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<LocationSortKeys>;
  query?: Maybe<Scalars['String']>;
  includeLegacy?: Maybe<Scalars['Boolean']>;
  includeInactive?: Maybe<Scalars['Boolean']>;
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootLocationsAvailableForDeliveryProfilesConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootMarketingActivitiesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<MarketingActivitySortKeys>;
  query?: Maybe<Scalars['String']>;
  savedSearchId?: Maybe<Scalars['ID']>;
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootMarketingActivityArgs = {
  id: Scalars['ID'];
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootMarketingEventArgs = {
  id: Scalars['ID'];
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootMarketingEventsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<MarketingEventSortKeys>;
  query?: Maybe<Scalars['String']>;
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootMetafieldStorefrontVisibilitiesArgs = {
  namespace?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootMetafieldStorefrontVisibilityArgs = {
  id: Scalars['ID'];
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootNodeArgs = {
  id: Scalars['ID'];
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootNodesArgs = {
  ids: Array<Scalars['ID']>;
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootOrderArgs = {
  id: Scalars['ID'];
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootOrderSavedSearchesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootOrdersArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<OrderSortKeys>;
  query?: Maybe<Scalars['String']>;
  savedSearchId?: Maybe<Scalars['ID']>;
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootPriceRuleArgs = {
  id: Scalars['ID'];
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootPriceRuleSavedSearchesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootPriceRulesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<PriceRuleSortKeys>;
  query?: Maybe<Scalars['String']>;
  savedSearchId?: Maybe<Scalars['ID']>;
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootPrivateMetafieldArgs = {
  id: Scalars['ID'];
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootPrivateMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>;
  owner: Scalars['ID'];
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootProductArgs = {
  id: Scalars['ID'];
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootProductByHandleArgs = {
  handle: Scalars['String'];
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootProductSavedSearchesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootProductVariantArgs = {
  id: Scalars['ID'];
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootProductVariantsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<ProductVariantSortKeys>;
  query?: Maybe<Scalars['String']>;
  savedSearchId?: Maybe<Scalars['ID']>;
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<ProductSortKeys>;
  query?: Maybe<Scalars['String']>;
  savedSearchId?: Maybe<Scalars['ID']>;
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootPublicationArgs = {
  id: Scalars['ID'];
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootPublicationsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootRefundArgs = {
  id: Scalars['ID'];
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootScriptTagArgs = {
  id: Scalars['ID'];
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootScriptTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  src?: Maybe<Scalars['URL']>;
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootShopLocalesArgs = {
  published?: Maybe<Scalars['Boolean']>;
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootTenderTransactionsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  query?: Maybe<Scalars['String']>;
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootTranslatableResourceArgs = {
  resourceId: Scalars['ID'];
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootTranslatableResourcesArgs = {
  resourceType: TranslatableResourceType;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootWebhookSubscriptionArgs = {
  id: Scalars['ID'];
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootWebhookSubscriptionsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<WebhookSubscriptionSortKeys>;
  query?: Maybe<Scalars['String']>;
  callbackUrl?: Maybe<Scalars['URL']>;
  format?: Maybe<WebhookSubscriptionFormat>;
  topics?: Maybe<Array<WebhookSubscriptionTopic>>;
};

/** Represents a refund of items or transactions in an order. */
export type Refund = Node &
  LegacyInteroperability & {
    /** When the refund was created. */
    createdAt?: Maybe<Scalars['DateTime']>;
    /** List of the order's refunded duties. */
    duties?: Maybe<Array<RefundDuty>>;
    /** Globally unique identifier. */
    id: Scalars['ID'];
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars['UnsignedInt64'];
    /** Note associated with the refund. */
    note?: Maybe<Scalars['String']>;
    /** The RefundLineItem resources attached to the refund. */
    refundLineItems: RefundLineItemConnection;
    /**
     * Whether the RefundLineItem resources were restocked when the refund was created.
     * @deprecated Use `RefundLineItem.restockType` instead.
     */
    restocked: Scalars['Boolean'];
    /**
     * Total amount refunded across all the transactions for this refund.
     * @deprecated Use `totalRefundedSet` instead
     */
    totalRefunded: MoneyV2;
    /** Total amount refunded across all the transactions for this refund in shop and presentment currencies. */
    totalRefundedSet: MoneyBag;
    /** Transactions associated with the refund. */
    transactions: OrderTransactionConnection;
    /** When the refund was last updated. */
    updatedAt: Scalars['DateTime'];
  };

/** Represents a refund of items or transactions in an order. */
export type RefundRefundLineItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Represents a refund of items or transactions in an order. */
export type RefundTransactionsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Return type for `refundCreate` mutation. */
export type RefundCreatePayload = {
  /** The order associated with the created refund. */
  order?: Maybe<Order>;
  /** The created refund. */
  refund?: Maybe<Refund>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Represents a refunded duty. */
export type RefundDuty = {
  /** Returns the amount of a refunded duty in shop and presentment currencies. */
  amountSet: MoneyBag;
  /** Returns a Duty resource. This represents the Duty in the non-refund context. */
  originalDuty?: Maybe<Duty>;
};

/** Specifies the fields required to return duties on a refund. */
export type RefundDutyInput = {
  /** The ID of the duty in the refund. */
  dutyId: Scalars['ID'];
  /** The type of refund for this duty. */
  refundType?: Maybe<RefundDutyRefundType>;
};

/** The type of refund to perform for a particular refund duty. */
export enum RefundDutyRefundType {
  /** The duty is proportionally refunded based on the quantity of the refunded line item. */
  Proportional = 'PROPORTIONAL',
  /** The duty is fully refunded. */
  Full = 'FULL',
}

/** Specifies the fields to create a refund. */
export type RefundInput = {
  /**
   * The currency (in ISO format) that is used to refund the order. This must be
   * the presentment currency (the currency used by the customer) and is a required
   * field for orders where the currency and presentment currency differ.
   */
  currency?: Maybe<CurrencyCode>;
  /** Order ID for which the refund is created. */
  orderId: Scalars['ID'];
  /** An optional note attached to a refund. */
  note?: Maybe<Scalars['String']>;
  /** Whether to send a refund notification to the customer. */
  notify?: Maybe<Scalars['Boolean']>;
  /** Specifies how much of the shipping cost to refund. */
  shipping?: Maybe<ShippingRefundInput>;
  /** A list of line items to refund. */
  refundLineItems?: Maybe<Array<RefundLineItemInput>>;
  /** A list of duties to refund. */
  refundDuties?: Maybe<Array<RefundDutyInput>>;
  /** A list of transactions involved in the refund. */
  transactions?: Maybe<Array<OrderTransactionInput>>;
};

/** Represents the details about a refunded line item. */
export type RefundLineItem = {
  /** Returns a LineItem resource. This represents the LineItem in the non-refund context. */
  lineItem: LineItem;
  /** The inventory restock location. */
  location?: Maybe<Location>;
  /**
   * Returns the price of a refunded line item.
   * @deprecated Use `priceSet` instead
   */
  price: Scalars['Money'];
  /** Returns the price of a refunded line item in shop and presentment currencies. */
  priceSet: MoneyBag;
  /** Returns the quantity of a refunded line item. */
  quantity: Scalars['Int'];
  /**
   * Represents the type of restock for the refunded line item.
   * @deprecated Use `restockType` instead
   */
  refundType: RefundLineItemRefundType;
  /** Represents the type of restock for the refunded line item. */
  restockType: RefundLineItemRestockType;
  /** Whether the refunded line item was restocked. Not applicable in the context of a SuggestedRefund. */
  restocked: Scalars['Boolean'];
  /**
   * Returns the subtotal price of a refunded line item.
   * @deprecated Use `subtotalSet` instead
   */
  subtotal: Scalars['Money'];
  /** Returns the subtotal price of a refunded line item in shop and presentment currencies. */
  subtotalSet: MoneyBag;
  /**
   * Returns the total tax charged on a refunded line item.
   * @deprecated Use `totalTaxSet` instead
   */
  totalTax: Scalars['Money'];
  /** Returns the total tax charged on a refunded line item in shop and presentment currencies. */
  totalTaxSet: MoneyBag;
};

export type RefundLineItemConnection = {
  /** A list of edges. */
  edges: Array<RefundLineItemEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type RefundLineItemEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of RefundLineItemEdge. */
  node: RefundLineItem;
};

/** Specifies the fields required to return line items on a refund. */
export type RefundLineItemInput = {
  /** The ID of the line item in the refund. */
  lineItemId: Scalars['ID'];
  /** The quantity of the associated line item that was returned. */
  quantity: Scalars['Int'];
  /** The type of restock for this line item. */
  restockType?: Maybe<RefundLineItemRestockType>;
  /** The intended location for restocking if `refundType` is not `NO_RESTOCK` */
  locationId?: Maybe<Scalars['ID']>;
};

/** The type of restock performed for a particular refund line item. */
export enum RefundLineItemRefundType {
  /** Refund line item was returned. */
  Return = 'RETURN',
  /** Refund line item was canceled. */
  Cancel = 'CANCEL',
  /** Refund line item was restocked, without specifically being identified as a return or cancelation. */
  LegacyRestock = 'LEGACY_RESTOCK',
  /** Refund line item was not restocked. */
  NoRestock = 'NO_RESTOCK',
}

/** The type of restock performed for a particular refund line item. */
export enum RefundLineItemRestockType {
  /** Refund line item was returned. */
  Return = 'RETURN',
  /** Refund line item was canceled. */
  Cancel = 'CANCEL',
  /** Refund line item was restocked, without specifically being identified as a return or cancelation. */
  LegacyRestock = 'LEGACY_RESTOCK',
  /** Refund line item was not restocked. */
  NoRestock = 'NO_RESTOCK',
}

/**
 * Presents information or problems to merchants, with 1 or more actions that they can take.
 * They can optionally have a specific icon and be dismissed by merchants.
 */
export type ResourceAlert = {
  /**
   * Buttons in the alert that link to related information.
   * For example, _View risk assessment_.
   */
  actions: Array<ResourceAlertAction>;
  /** Details about the alert. */
  content: Scalars['HTML'];
  /**
   * Unique identifier that appears when an alert is manually closed by the merchant.
   * Most alerts cannot be manually closed.
   */
  dismissibleHandle?: Maybe<Scalars['String']>;
  /** Icon that displays with the alert. */
  icon?: Maybe<ResourceAlertIcon>;
  /** Indication of how important the alert is. */
  severity: ResourceAlertSeverity;
  /** The name of the alert. */
  title: Scalars['String'];
};

/** An action associated to a resource alert. */
export type ResourceAlertAction = {
  /** Whether the action is primary or not. */
  primary: Scalars['Boolean'];
  /** Resource for the action to show. */
  show?: Maybe<Scalars['String']>;
  /** Action title. */
  title: Scalars['String'];
  /** Action target URL. */
  url: Scalars['URL'];
};

/** The available icons for resource alerts. */
export enum ResourceAlertIcon {
  /** A checkmark inside a circle. */
  CheckmarkCircle = 'CHECKMARK_CIRCLE',
  /** A lowercase `i` inside a circle. */
  InformationCircle = 'INFORMATION_CIRCLE',
}

/** The possible severity levels for a resource alert. */
export enum ResourceAlertSeverity {
  /** Indicates a neutral alert. */
  Default = 'DEFAULT',
  /** Indicates an informative alert. */
  Info = 'INFO',
  /** Indicates a warning alert. */
  Warning = 'WARNING',
  /** Indicates a success alert. */
  Success = 'SUCCESS',
  /** Indicates a critical alert. */
  Critical = 'CRITICAL',
  Error = 'ERROR',
}

/** Represents feedback from apps about a resource, and the steps required to set up the apps on the shop. */
export type ResourceFeedback = {
  /**
   * Feedback from an app about the steps a merchant needs to take to set up the app on their store.
   * @deprecated Use `details` instead
   */
  appFeedback: Array<AppFeedback>;
  /** List of AppFeedback detailing issues regarding a resource. */
  details: Array<AppFeedback>;
  /** Summary of resource feedback pertaining to the resource. */
  summary: Scalars['String'];
};

/** A resource limit represents the limits that the resource has. */
export type ResourceLimit = {
  /** Whether or not the resource is available. */
  available: Scalars['Boolean'];
  /** Quantity available. If null the quantity available is unlimited. */
  quantityAvailable?: Maybe<Scalars['Int']>;
  /** Quantity limit of the resource. If null the quantity is unlimited. */
  quantityLimit?: Maybe<Scalars['Int']>;
  /** Quantity used of the resource. If null the quantity used cannot be retrieved. */
  quantityUsed?: Maybe<Scalars['Int']>;
};

/** A resource publication represents that a resource has been published to a publication. */
export type ResourcePublication = {
  /**
   * The channel the resource publication is published to.
   * @deprecated Use `publication` instead
   */
  channel: Channel;
  /**
   * Whether the resource publication is published. Also returns true if the resource publication is scheduled to be published.
   * If false, then the resource publication is neither published nor scheduled to be published.
   */
  isPublished: Scalars['Boolean'];
  /** The publication the resource publication is published to. */
  publication: Publication;
  /** The date that the resource publication was or is going to be published to the publication. */
  publishDate: Scalars['DateTime'];
  /** The resource published to the publication. */
  publishable: Publishable;
};

export type ResourcePublicationConnection = {
  /** A list of edges. */
  edges: Array<ResourcePublicationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ResourcePublicationEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of ResourcePublicationEdge. */
  node: ResourcePublication;
};

/** A saved search is a representation of a search query saved in the admin. */
export type SavedSearch = Node &
  LegacyInteroperability & {
    /** The filters of a saved search. */
    filters: Array<SearchFilter>;
    /** Globally unique identifier. */
    id: Scalars['ID'];
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars['UnsignedInt64'];
    /** The name of a saved search. */
    name: Scalars['String'];
    /** The query string of a saved search. This includes search terms and filters. */
    query: Scalars['String'];
    /** The type of resource this saved search is searching in. */
    resourceType: SearchResultType;
    /** The search terms of a saved search. */
    searchTerms: Scalars['String'];
  };

export type SavedSearchConnection = {
  /** A list of edges. */
  edges: Array<SavedSearchEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Specifies the fields required to create a saved search. */
export type SavedSearchCreateInput = {
  /** The type of resouce this saved search is searching in. */
  resourceType: SearchResultType;
  /** A descriptive name of the saved search. */
  name: Scalars['String'];
  /** The query string of a saved search. This includes search terms and filters. */
  query: Scalars['String'];
};

/** Return type for `savedSearchCreate` mutation. */
export type SavedSearchCreatePayload = {
  /** The saved search that was created. */
  savedSearch?: Maybe<SavedSearch>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Specifies the fields to delete a saved search. */
export type SavedSearchDeleteInput = {
  /** ID of the saved search to delete. */
  id: Scalars['ID'];
};

/** Return type for `savedSearchDelete` mutation. */
export type SavedSearchDeletePayload = {
  /** The id of the saved search that was deleted. */
  deletedSavedSearchId?: Maybe<Scalars['ID']>;
  /** The shop of the saved search that was deleted. */
  shop: Shop;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

export type SavedSearchEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of SavedSearchEdge. */
  node: SavedSearch;
};

/** Specifies the fields required to update a saved search. */
export type SavedSearchUpdateInput = {
  /** ID of the saved search to update. */
  id: Scalars['ID'];
  /** A descriptive name of the saved search. */
  name?: Maybe<Scalars['String']>;
  /** The query string of a saved search. This included search terms and filters. */
  query?: Maybe<Scalars['String']>;
};

/** Return type for `savedSearchUpdate` mutation. */
export type SavedSearchUpdatePayload = {
  /** The saved search that was updated. */
  savedSearch?: Maybe<SavedSearch>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/**
 * Script discount applications capture the intentions of a discount that
 * was created by a Shopify Script for an order's line item or shipping line.
 */
export type ScriptDiscountApplication = DiscountApplication & {
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethod;
  /**
   * The description of the application as defined by the Script.
   * @deprecated Use `title` instead
   */
  description: Scalars['String'];
  /**
   * An ordered index that can be used to identify the discount application and indicate the precedence
   * of the discount application for calculations.
   */
  index: Scalars['Int'];
  /** How the discount amount is distributed on the discounted lines. */
  targetSelection: DiscountApplicationTargetSelection;
  /** Whether the discount is applied on line items or shipping lines. */
  targetType: DiscountApplicationTargetType;
  /** The title of the application as defined by the Script. */
  title: Scalars['String'];
  /** The value of the discount application. */
  value: PricingValue;
};

/**
 * A script tag represents remote JavaScript code that is loaded into the pages of
 * a shop's storefront or the order status page of checkout.
 */
export type ScriptTag = Node &
  LegacyInteroperability & {
    /** The date and time when the script tag was created. */
    createdAt: Scalars['DateTime'];
    /** The page or pages on the online store that the script should be included. */
    displayScope: ScriptTagDisplayScope;
    /** Globally unique identifier. */
    id: Scalars['ID'];
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars['UnsignedInt64'];
    /** The URL to the remote script. */
    src: Scalars['URL'];
    /** The date and time when the script tag was last updated. */
    updatedAt: Scalars['DateTime'];
  };

export type ScriptTagConnection = {
  /** A list of edges. */
  edges: Array<ScriptTagEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Return type for `scriptTagCreate` mutation. */
export type ScriptTagCreatePayload = {
  /** The script tag that was created. */
  scriptTag?: Maybe<ScriptTag>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `scriptTagDelete` mutation. */
export type ScriptTagDeletePayload = {
  /** The ID of the deleted script tag. */
  deletedScriptTagId?: Maybe<Scalars['ID']>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** The page or pages on the online store where the script should be included. */
export enum ScriptTagDisplayScope {
  /** Include the script on both the web storefront and the order status page. */
  All = 'ALL',
  /** Include the script only on the order status page. */
  OrderStatus = 'ORDER_STATUS',
  /** Include the script only on the web storefront. */
  OnlineStore = 'ONLINE_STORE',
}

export type ScriptTagEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of ScriptTagEdge. */
  node: ScriptTag;
};

/** Specifies the input fields for a script tag. */
export type ScriptTagInput = {
  /** The URL of the remote script. */
  src?: Maybe<Scalars['URL']>;
  /** The page or pages on the online store where the script should be included. */
  displayScope?: Maybe<ScriptTagDisplayScope>;
};

/** Return type for `scriptTagUpdate` mutation. */
export type ScriptTagUpdatePayload = {
  /** The script tag that was updated. */
  scriptTag?: Maybe<ScriptTag>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** A filter in a search query represented by a key value pair. */
export type SearchFilter = {
  /** The key of the search filter. */
  key: Scalars['String'];
  /** The value of the search filter. */
  value: Scalars['String'];
};

/** A list of search filters along with their specific options in value and label pair for filtering. */
export type SearchFilterOptions = {
  /** A list of options that can be use to filter product availability. */
  productAvailability: Array<FilterOption>;
};

/** Represents an individual result returned from a search. */
export type SearchResult = {
  /** Returns the search result description text. */
  description?: Maybe<Scalars['String']>;
  /** Returns the Image resource presented to accompany a search result. */
  image?: Maybe<Image>;
  /** Returns the ID of the resource returned in the search result. */
  reference: Node;
  /** Returns the resource title. */
  title: Scalars['String'];
  /** Returns the absolute URL to the resource in the search result. */
  url: Scalars['URL'];
};

/** The connection type for SearchResult. */
export type SearchResultConnection = {
  /** A list of edges. */
  edges: Array<SearchResultEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * Information to aid in pagination.
   * @deprecated The provided information is not accurate.
   */
  resultsAfterCount: Scalars['Int'];
};

export type SearchResultEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of SearchResultEdge. */
  node: SearchResult;
};

/** Specifies the type of resources to be returned from a search. */
export enum SearchResultType {
  Order = 'ORDER',
  Customer = 'CUSTOMER',
  Product = 'PRODUCT',
  OnlineStorePage = 'ONLINE_STORE_PAGE',
  OnlineStoreBlog = 'ONLINE_STORE_BLOG',
  OnlineStoreArticle = 'ONLINE_STORE_ARTICLE',
  Collection = 'COLLECTION',
  DraftOrder = 'DRAFT_ORDER',
  PriceRule = 'PRICE_RULE',
}

/**
 * Custom properties that a shop owner can use to define product variants.
 * Multiple options can exist. Options are represented as: option1, option2, option3, etc.
 */
export type SelectedOption = {
  /** The product option’s name. */
  name: Scalars['String'];
  /** The product option’s value. */
  value: Scalars['String'];
};

/** SEO information. */
export type Seo = {
  /** SEO Description. */
  description?: Maybe<Scalars['String']>;
  /** SEO Title. */
  title?: Maybe<Scalars['String']>;
};

/** SEO information. */
export type SeoInput = {
  /** SEO title of the product. */
  title?: Maybe<Scalars['String']>;
  /** SEO description of the product. */
  description?: Maybe<Scalars['String']>;
};

/** Represents the shipping details that the customer chose for their order. */
export type ShippingLine = {
  /**
   * A reference to the carrier service that provided the rate.
   * Present when the rate was computed by a third-party carrier service.
   */
  carrierIdentifier?: Maybe<Scalars['String']>;
  /** A reference to the shipping method. */
  code?: Maybe<Scalars['String']>;
  /** Whether the shipping line is custom or not. */
  custom: Scalars['Boolean'];
  /** The general classification of the delivery method. */
  deliveryCategory?: Maybe<Scalars['String']>;
  /** The discounts that have been allocated to the shipping line. */
  discountAllocations: Array<DiscountAllocation>;
  /**
   * The pre-tax shipping price with discounts applied.
   * @deprecated Use `discountedPriceSet` instead
   */
  discountedPrice: MoneyV2;
  /** The pre-tax shipping price with discounts applied. */
  discountedPriceSet: MoneyBag;
  /** Globally unique identifier. */
  id?: Maybe<Scalars['ID']>;
  /**
   * The pre-tax shipping price without any discounts applied.
   * @deprecated Use `originalPriceSet` instead
   */
  originalPrice: MoneyV2;
  /** The pre-tax shipping price without any discounts applied. */
  originalPriceSet: MoneyBag;
  /** The phone number at the shipping address. */
  phone?: Maybe<Scalars['String']>;
  /**
   * Returns the price of the shipping line.
   * @deprecated Use `originalPriceSet` instead
   */
  price: Scalars['Money'];
  /**
   * The fulfillment service requested for the shipping method.
   * Present if the shipping method requires processing by a third party fulfillment service.
   */
  requestedFulfillmentService?: Maybe<FulfillmentService>;
  /** A unique identifier for the shipping rate. The format can change without notice and is not meant to be shown to users. */
  shippingRateHandle?: Maybe<Scalars['String']>;
  /** Returns the rate source for the shipping line. */
  source?: Maybe<Scalars['String']>;
  /** The TaxLine objects connected to this shipping line. */
  taxLines: Array<TaxLine>;
  /** Returns the title of the shipping line. */
  title: Scalars['String'];
};

/** Specifies the shipping details for the order. */
export type ShippingLineInput = {
  /** Price of the shipping rate. */
  price?: Maybe<Scalars['Money']>;
  /** A unique identifier for the shipping rate. */
  shippingRateHandle?: Maybe<Scalars['String']>;
  /** Title of the shipping rate. */
  title?: Maybe<Scalars['String']>;
};

/** The shipping method for the delivery. */
export type ShippingMethod = {
  /** A unique code associated with the rate. For example: `expedited_mail` */
  code: Scalars['String'];
  /**
   * A description of the rate, which customers will see at checkout.
   * For example: `Includes tracking and insurance`.
   */
  label: Scalars['String'];
};

/** Return type for `shippingPackageDelete` mutation. */
export type ShippingPackageDeletePayload = {
  /** The ID of the deleted shipping package. */
  deletedId?: Maybe<Scalars['ID']>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `shippingPackageMakeDefault` mutation. */
export type ShippingPackageMakeDefaultPayload = {
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `shippingPackageUpdate` mutation. */
export type ShippingPackageUpdatePayload = {
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** A shipping rate to be applied to an order. */
export type ShippingRate = {
  /** Human-readable unique identifier for this shipping rate. */
  handle: Scalars['String'];
  /** Price of this shipping rate. */
  price: MoneyV2;
  /** Title of this shipping rate. */
  title: Scalars['String'];
};

/** Represents the shipping costs refunded on the Refund. */
export type ShippingRefund = {
  /**
   * The monetary value of the shipping fees to be returned.
   * @deprecated Use `amountSet` instead
   */
  amount: Scalars['Money'];
  /** The monetary value of the shipping fees to be returned in shop and presentment currencies. */
  amountSet: MoneyBag;
  /**
   * The maximum amount of shipping fees currently refundable.
   * @deprecated Use `maximumRefundableSet` instead
   */
  maximumRefundable: Scalars['Money'];
  /** The maximum amount of shipping fees currently refundable in shop and presentment currencies. */
  maximumRefundableSet: MoneyBag;
  /**
   * The monetary value of the tax allocated to shipping fees to be returned.
   * @deprecated Use `taxSet` instead
   */
  tax: Scalars['Money'];
  /** The monetary value of the tax allocated to shipping fees to be returned in shop and presentment currencies. */
  taxSet: MoneyBag;
};

/** Specifies the fields required to return shipping costs on a Refund. */
export type ShippingRefundInput = {
  /** The monetary value of the shipping fees to be returned. */
  amount?: Maybe<Scalars['Money']>;
  /** Whether a full refund is provided. */
  fullRefund?: Maybe<Scalars['Boolean']>;
};

/** Represents the shop object. */
export type Shop = Node &
  HasPublishedTranslations &
  HasMetafields & {
    /** Alert message that appears in the Shopify admin. */
    alerts: Array<ShopAlert>;
    /** The token required to query the shop's reports or dashboards. */
    analyticsToken: Scalars['String'];
    /**
     * List of app installations on the shop.
     * @deprecated Use `QueryRoot.appInstallations` instead.
     */
    appInstallations: AppInstallationConnection;
    /** Paginated list of fulfillment orders assigned to fulfillment services. */
    assignedFulfillmentOrders: FulfillmentOrderConnection;
    /** List of sales channels not currently installed on the shop. */
    availableChannelApps: AppConnection;
    /** The shop's billing address information. */
    billingAddress: MailingAddress;
    /**
     * List of channel app installations on the shop.
     * @deprecated Use `appInstallations` instead
     */
    channelAppInstallations: AppInstallationConnection;
    /**
     * Exposes the number of channels.
     * @deprecated Use `publicationCount` instead
     */
    channelCount: Scalars['Int'];
    /**
     * List of the shop's active sales channels.
     * @deprecated Use `QueryRoot.channels` instead.
     */
    channels: ChannelConnection;
    /** Specifies whether the shop supports checkouts via Checkout API. */
    checkoutApiSupported: Scalars['Boolean'];
    /**
     * Return a collection by its handle.
     * @deprecated Use `QueryRoot.collectionByHandle` instead.
     */
    collectionByHandle?: Maybe<Collection>;
    /**
     * List of the shop's collection saved searches.
     * @deprecated Use `QueryRoot.priceRuleSavedSearches` instead.
     */
    collectionSavedSearches: SavedSearchConnection;
    /**
     * List of the shop's collections.
     * @deprecated Use `QueryRoot.collections` instead.
     */
    collections: CollectionConnection;
    /**
     * The public-facing contact email address for the shop.
     * Customers will use this email to communicate with the shop owner.
     */
    contactEmail: Scalars['String'];
    /** Countries that have been defined in shipping zones for the shop. */
    countriesInShippingZones: CountriesInShippingZones;
    /** The three letter code for the shop's currency. */
    currencyCode: CurrencyCode;
    /** How currencies are displayed on your store. */
    currencyFormats: CurrencyFormats;
    /** The currency settings for the shop. */
    currencySettings: CurrencySettingConnection;
    /** The shop's customer account requirement preference. */
    customerAccounts: ShopCustomerAccountsSetting;
    /**
     * List of the shop's customer saved searches.
     * @deprecated Use `QueryRoot.customerSavedSearches` instead.
     */
    customerSavedSearches: SavedSearchConnection;
    /** Tags added to customer accounts. */
    customerTags: StringConnection;
    /**
     * Customer accounts associated to the shop.
     * @deprecated Use `QueryRoot.customers` instead.
     */
    customers: CustomerConnection;
    /** The shop's meta description used in search engine results. */
    description?: Maybe<Scalars['String']>;
    /**
     * List of the shop's draft order saved searches.
     * @deprecated Use `QueryRoot.draftOrderSavedSearches` instead.
     */
    draftOrderSavedSearches: SavedSearchConnection;
    /** Tags added to draft orders. */
    draftOrderTags: StringConnection;
    /**
     * List of saved draft orders on the shop.
     * @deprecated Use `QueryRoot.draftOrders` instead.
     */
    draftOrders: DraftOrderConnection;
    /**
     * The shop owner's email address.
     * Shopify will use this email address to communicate with the shop owner.
     */
    email: Scalars['String'];
    /** The presentment currencies enabled for the shop. */
    enabledPresentmentCurrencies: Array<CurrencyCode>;
    /** The shop's features. */
    features: ShopFeatures;
    /** Paginated list of merchant-managed and third-party fulfillment orders. */
    fulfillmentOrders: FulfillmentOrderConnection;
    /** List of the shop's installed fulfillment services. */
    fulfillmentServices: Array<FulfillmentService>;
    /** The shop's time zone as defined by the IANA. */
    ianaTimezone: Scalars['String'];
    /** Globally unique identifier. */
    id: Scalars['ID'];
    /**
     * List of apps that are installed on the shop.
     * @deprecated Use `appInstallations` instead
     */
    installedApps: AppConnection;
    /**
     * List of the shop's inventory items.
     * @deprecated Use `QueryRoot.inventoryItems` instead.
     */
    inventoryItems: InventoryItemConnection;
    /**
     * The number of pendings orders on the shop.
     * Limited to a maximum of 10000.
     */
    limitedPendingOrderCount: LimitedPendingOrderCount;
    /**
     * List of active locations of the shop.
     * @deprecated Use `QueryRoot.locations` instead.
     */
    locations: LocationConnection;
    /**
     * List of a shop's marketing events.
     * @deprecated Use `QueryRoot.marketingEvents` instead.
     */
    marketingEvents: MarketingEventConnection;
    /** The metafield associated with the resource. */
    metafield?: Maybe<Metafield>;
    /** A paginated list of metafields associated with the resource. */
    metafields: MetafieldConnection;
    /** The shop's .myshopify.com domain name. */
    myshopifyDomain: Scalars['String'];
    /** The shop's name. */
    name: Scalars['String'];
    /** The navigation settings of the shop. */
    navigationSettings: Array<NavigationItem>;
    /** The prefix that appears before order numbers. */
    orderNumberFormatPrefix: Scalars['String'];
    /** The suffix that appears after order numbers. */
    orderNumberFormatSuffix: Scalars['String'];
    /**
     * List of the shop's order saved searches.
     * @deprecated Use `QueryRoot.orderSavedSearches` instead.
     */
    orderSavedSearches: SavedSearchConnection;
    /** Tags added to orders. */
    orderTags: StringConnection;
    /**
     * List of orders placed on the shop.
     * @deprecated Use `QueryRoot.orders` instead.
     */
    orders: OrderConnection;
    /** Settings related to payments. */
    paymentSettings: PaymentSettings;
    /**
     * Number of pending orders on the shop.
     * @deprecated Use `limitedPendingOrderCount` instead
     */
    pendingOrderCount: Scalars['Int'];
    /** The shop's plan. */
    plan: ShopPlan;
    /**
     * List of the shop's price rule saved searches.
     * @deprecated Use `QueryRoot.priceRuleSavedSearches` instead.
     */
    priceRuleSavedSearches: SavedSearchConnection;
    /**
     * List of the shop’s price rules.
     * @deprecated Use `QueryRoot.priceRules` instead.
     */
    priceRules: PriceRuleConnection;
    /** The shop's primary domain name. */
    primaryDomain: Domain;
    /** Returns a private metafield found by namespace and key. */
    privateMetafield?: Maybe<PrivateMetafield>;
    /** List of private metafields. */
    privateMetafields: PrivateMetafieldConnection;
    /**
     * Return a product by its handle.
     * @deprecated Use `QueryRoot.productByHandle` instead.
     */
    productByHandle?: Maybe<Product>;
    /** All images of all products of the shop. */
    productImages: ImageConnection;
    /**
     * List of the shop's product saved searches.
     * @deprecated Use `QueryRoot.productSavedSearches` instead.
     */
    productSavedSearches: SavedSearchConnection;
    /** Tags added to products. */
    productTags: StringConnection;
    /** Types added to products. */
    productTypes: StringConnection;
    /**
     * List of the shop's product variants.
     * @deprecated Use `QueryRoot.productVariants` instead.
     */
    productVariants: ProductVariantConnection;
    /** Vendors added to products. */
    productVendors: StringConnection;
    /**
     * List of the shop's products.
     * @deprecated Use `QueryRoot.products`.
     */
    products: ProductConnection;
    /** Exposes the number of publications. */
    publicationCount: Scalars['Int'];
    /** Resource limits of a shop. */
    resourceLimits: ShopResourceLimits;
    /** The URL of the rich text editor. */
    richTextEditorUrl: Scalars['URL'];
    /** Return admin search results. */
    search: SearchResultConnection;
    /** List of search filter options. */
    searchFilters: SearchFilterOptions;
    /** Whether the shop has outstanding setup steps. */
    setupRequired: Scalars['Boolean'];
    /** Countries that the shop ships to. */
    shipsToCountries: Array<CountryCode>;
    /**
     * Shopify Payments account information, including balances and payouts.
     * @deprecated Use `QueryRoot.shopifyPaymentsAccount` instead.
     */
    shopifyPaymentsAccount?: Maybe<ShopifyPaymentsAccount>;
    /** Storefront access token of a private application. Scoped per-application. */
    storefrontAccessTokens: StorefrontAccessTokenConnection;
    /**
     * The URL of the shop's storefront.
     * @deprecated Use `url` instead
     */
    storefrontUrl: Scalars['URL'];
    /** Specifies whether or not taxes are charged for shipping. */
    taxShipping: Scalars['Boolean'];
    /** The setting for whether applicable taxes are included in product prices. */
    taxesIncluded: Scalars['Boolean'];
    /** The shop's time zone abbreviation. */
    timezoneAbbreviation: Scalars['String'];
    /** The shop's time zone offset. */
    timezoneOffset: Scalars['String'];
    /** The shop's time zone offset expressed in number of minutes. */
    timezoneOffsetMinutes: Scalars['Int'];
    /** The translations associated with the resource. */
    translations: Array<PublishedTranslation>;
    /** The shop's unit system. */
    unitSystem: UnitSystem;
    /** All images uploaded to the shop. */
    uploadedImages: ImageConnection;
    /** Fetch list of images uploaded to shop by ids. */
    uploadedImagesByIds: Array<Image>;
    /** The URL of the shop's storefront. */
    url: Scalars['URL'];
    /** The shop's primary unit of weight for products and shipping. */
    weightUnit: WeightUnit;
  };

/** Represents the shop object. */
export type ShopAppInstallationsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<AppInstallationSortKeys>;
  category?: Maybe<AppInstallationCategory>;
  privacy?: Maybe<AppInstallationPrivacy>;
};

/** Represents the shop object. */
export type ShopAssignedFulfillmentOrdersArgs = {
  assignmentStatus?: Maybe<FulfillmentOrderAssignmentStatus>;
  locationIds?: Maybe<Array<Scalars['ID']>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<FulfillmentOrderSortKeys>;
};

/** Represents the shop object. */
export type ShopAvailableChannelAppsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Represents the shop object. */
export type ShopChannelAppInstallationsArgs = {
  excludePrivateApps?: Maybe<Scalars['Boolean']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<AppInstallationSortKeys>;
};

/** Represents the shop object. */
export type ShopChannelsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Represents the shop object. */
export type ShopCollectionByHandleArgs = {
  handle: Scalars['String'];
};

/** Represents the shop object. */
export type ShopCollectionSavedSearchesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Represents the shop object. */
export type ShopCollectionsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<CollectionSortKeys>;
  query?: Maybe<Scalars['String']>;
  savedSearchId?: Maybe<Scalars['ID']>;
};

/** Represents the shop object. */
export type ShopCurrencySettingsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Represents the shop object. */
export type ShopCustomerSavedSearchesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<CustomerSavedSearchSortKeys>;
  query?: Maybe<Scalars['String']>;
};

/** Represents the shop object. */
export type ShopCustomerTagsArgs = {
  first: Scalars['Int'];
};

/** Represents the shop object. */
export type ShopCustomersArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<CustomerSortKeys>;
  query?: Maybe<Scalars['String']>;
};

/** Represents the shop object. */
export type ShopDraftOrderSavedSearchesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Represents the shop object. */
export type ShopDraftOrderTagsArgs = {
  first: Scalars['Int'];
};

/** Represents the shop object. */
export type ShopDraftOrdersArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<DraftOrderSortKeys>;
  query?: Maybe<Scalars['String']>;
};

/** Represents the shop object. */
export type ShopFulfillmentOrdersArgs = {
  includeClosed?: Maybe<Scalars['Boolean']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<FulfillmentOrderSortKeys>;
  query?: Maybe<Scalars['String']>;
};

/** Represents the shop object. */
export type ShopInstalledAppsArgs = {
  visibleOnly?: Maybe<Scalars['Boolean']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<AppsSortKeys>;
};

/** Represents the shop object. */
export type ShopInventoryItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  query?: Maybe<Scalars['String']>;
};

/** Represents the shop object. */
export type ShopLocationsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<LocationSortKeys>;
  query?: Maybe<Scalars['String']>;
  includeLegacy?: Maybe<Scalars['Boolean']>;
  includeInactive?: Maybe<Scalars['Boolean']>;
};

/** Represents the shop object. */
export type ShopMarketingEventsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<MarketingEventSortKeys>;
  query?: Maybe<Scalars['String']>;
};

/** Represents the shop object. */
export type ShopMetafieldArgs = {
  namespace: Scalars['String'];
  key: Scalars['String'];
};

/** Represents the shop object. */
export type ShopMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Represents the shop object. */
export type ShopOrderSavedSearchesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Represents the shop object. */
export type ShopOrderTagsArgs = {
  first: Scalars['Int'];
  sort?: Maybe<ShopTagSort>;
};

/** Represents the shop object. */
export type ShopOrdersArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<OrderSortKeys>;
  query?: Maybe<Scalars['String']>;
};

/** Represents the shop object. */
export type ShopPriceRuleSavedSearchesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Represents the shop object. */
export type ShopPriceRulesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<PriceRuleSortKeys>;
  query?: Maybe<Scalars['String']>;
  savedSearchId?: Maybe<Scalars['ID']>;
};

/** Represents the shop object. */
export type ShopPrivateMetafieldArgs = {
  namespace: Scalars['String'];
  key: Scalars['String'];
};

/** Represents the shop object. */
export type ShopPrivateMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Represents the shop object. */
export type ShopProductByHandleArgs = {
  handle: Scalars['String'];
};

/** Represents the shop object. */
export type ShopProductImagesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<ProductImageSortKeys>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  crop?: Maybe<CropRegion>;
  scale?: Maybe<Scalars['Int']>;
};

/** Represents the shop object. */
export type ShopProductSavedSearchesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Represents the shop object. */
export type ShopProductTagsArgs = {
  first: Scalars['Int'];
};

/** Represents the shop object. */
export type ShopProductTypesArgs = {
  first: Scalars['Int'];
};

/** Represents the shop object. */
export type ShopProductVariantsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<ProductVariantSortKeys>;
  query?: Maybe<Scalars['String']>;
};

/** Represents the shop object. */
export type ShopProductVendorsArgs = {
  first: Scalars['Int'];
};

/** Represents the shop object. */
export type ShopProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<ProductSortKeys>;
  query?: Maybe<Scalars['String']>;
  savedSearchId?: Maybe<Scalars['ID']>;
};

/** Represents the shop object. */
export type ShopSearchArgs = {
  query: Scalars['String'];
  types?: Maybe<Array<SearchResultType>>;
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
};

/** Represents the shop object. */
export type ShopStorefrontAccessTokensArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Represents the shop object. */
export type ShopTranslationsArgs = {
  locale: Scalars['String'];
};

/** Represents the shop object. */
export type ShopUploadedImagesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<ShopImageSortKeys>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  crop?: Maybe<CropRegion>;
  scale?: Maybe<Scalars['Int']>;
};

/** Represents the shop object. */
export type ShopUploadedImagesByIdsArgs = {
  imageIds: Array<Scalars['ID']>;
};

/** Alert message that appears in the Shopify admin. */
export type ShopAlert = {
  /** Button in the alert that links to related information. */
  action: ShopAlertAction;
  /** Description of the alert. */
  description: Scalars['String'];
};

/** An action associated to a shop alert. */
export type ShopAlertAction = {
  /** Action title. */
  title: Scalars['String'];
  /** Action target URL. */
  url: Scalars['URL'];
};

/**
 * Possible branding of a shop.
 * Branding can be used to define the look of a shop including its styling and logo in the Shopify Admin.
 */
export enum ShopBranding {
  /** Shop has Shopify Gold branding. */
  ShopifyGold = 'SHOPIFY_GOLD',
  /** Shop has Shopify Plus branding. */
  ShopifyPlus = 'SHOPIFY_PLUS',
  /** Shop has Rogers branding. */
  Rogers = 'ROGERS',
  /** Shop has Shopify branding. */
  Shopify = 'SHOPIFY',
}

/** Represents the shop's customer account requirement preference. */
export enum ShopCustomerAccountsSetting {
  Required = 'REQUIRED',
  Optional = 'OPTIONAL',
  Disabled = 'DISABLED',
}

/** Represents the feature set available to the shop. */
export type ShopFeatures = {
  /** Whether a shop has access to avalara avatax. */
  avalaraAvatax: Scalars['Boolean'];
  /** Branding of the shop. */
  branding: ShopBranding;
  /** Whether a shop's storefront can have CAPTCHA protection. */
  captcha: Scalars['Boolean'];
  /** Whether a shop's storefront can have CAPTCHA protection for domains not managed by Shopify. */
  captchaExternalDomains: Scalars['Boolean'];
  /** Whether the delivery profiles functionality is enabled for this shop. */
  deliveryProfiles: Scalars['Boolean'];
  /** Whether a shop has access to the dynamic remarketing feature. */
  dynamicRemarketing: Scalars['Boolean'];
  /** Whether a shop can create gift cards. */
  giftCards: Scalars['Boolean'];
  /** Display Harmonized System codes on products.  Used for customs when shipping cross-border. */
  harmonizedSystemCode: Scalars['Boolean'];
  /** Whether to show the live view. Live view is hidden from merchants that are on a trial or don't have a storefront. */
  liveView: Scalars['Boolean'];
  /** Whether the multi-location functionality is enabled for this shop. */
  multiLocation: Scalars['Boolean'];
  /** Whether a shop has access to the onboarding visual. */
  onboardingVisual: Scalars['Boolean'];
  /** Whether a shop has access to all reporting features. */
  reports: Scalars['Boolean'];
  /**
   * Whether the shop has a Shopify Plus subscription.
   * @deprecated Use Shop.plan.shopifyPlus instead.
   */
  shopifyPlus: Scalars['Boolean'];
  /** Whether to show metrics. Metrics are hidden for new merchants until they become meaningful. */
  showMetrics: Scalars['Boolean'];
  /** Whether the shop has an online storefront. */
  storefront: Scalars['Boolean'];
};

/**
 * Balance and payout information for a
 * [Shopify Payments](https://help.shopify.com/manual/payments/shopify-payments/getting-paid-with-shopify-payments)
 * account. Balance includes all balances for the currencies supported by the shop.
 * You can also query for a list of payouts, where each payout includes the corresponding currencyCode field.
 */
export type ShopifyPaymentsAccount = Node & {
  /** Whether the Shopify Payments setup is completed. */
  activated: Scalars['Boolean'];
  /** Current balances in all currencies for the account. */
  balance: Array<MoneyV2>;
  /** All bank accounts configured for the Shopify Payments account. */
  bankAccounts: ShopifyPaymentsBankAccountConnection;
  /**
   * Statement descriptor used for charges.
   *
   * This is what buyers will see on their credit card or bank statements when making a purchase.
   * @deprecated Use `chargeStatementDescriptors` instead
   */
  chargeStatementDescriptor?: Maybe<Scalars['String']>;
  /**
   * Statement descriptors used for charges.
   *
   * This is what buyers will see on their credit card or bank statements when making a purchase.
   */
  chargeStatementDescriptors?: Maybe<ShopifyPaymentsChargeStatementDescriptor>;
  /** The Shopify Payments account country. */
  country: Scalars['String'];
  /** The default payout currency for the Shopify Payments account. */
  defaultCurrency: CurrencyCode;
  /** All disputes related to the Shopify Payments account. */
  disputes: ShopifyPaymentsDisputeConnection;
  /** The fraud settings of the Shopify Payments account. */
  fraudSettings: ShopifyPaymentsFraudSettings;
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** The notifications settings for the account. */
  notificationSettings: ShopifyPaymentsNotificationSettings;
  /** Whether the Shopify Payments account can be onboarded. */
  onboardable: Scalars['Boolean'];
  /** Payout schedule for the account. */
  payoutSchedule: ShopifyPaymentsPayoutSchedule;
  /**
   * Descriptor used for payouts.
   *
   * This is what merchants will see on their bank statement when receiving a payout.
   */
  payoutStatementDescriptor?: Maybe<Scalars['String']>;
  /** All current and previous payouts made between the account and the bank account. */
  payouts: ShopifyPaymentsPayoutConnection;
  /** The permitted documents for identity verification. */
  permittedVerificationDocuments: Array<ShopifyPaymentsVerificationDocument>;
  /** The verifications necessary for this account. */
  verifications: Array<ShopifyPaymentsVerification>;
};

/**
 * Balance and payout information for a
 * [Shopify Payments](https://help.shopify.com/manual/payments/shopify-payments/getting-paid-with-shopify-payments)
 * account. Balance includes all balances for the currencies supported by the shop.
 * You can also query for a list of payouts, where each payout includes the corresponding currencyCode field.
 */
export type ShopifyPaymentsAccountBankAccountsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/**
 * Balance and payout information for a
 * [Shopify Payments](https://help.shopify.com/manual/payments/shopify-payments/getting-paid-with-shopify-payments)
 * account. Balance includes all balances for the currencies supported by the shop.
 * You can also query for a list of payouts, where each payout includes the corresponding currencyCode field.
 */
export type ShopifyPaymentsAccountDisputesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  query?: Maybe<Scalars['String']>;
};

/**
 * Balance and payout information for a
 * [Shopify Payments](https://help.shopify.com/manual/payments/shopify-payments/getting-paid-with-shopify-payments)
 * account. Balance includes all balances for the currencies supported by the shop.
 * You can also query for a list of payouts, where each payout includes the corresponding currencyCode field.
 */
export type ShopifyPaymentsAccountPayoutsArgs = {
  transactionType?: Maybe<ShopifyPaymentsPayoutTransactionType>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** A bank account that can receive payouts. */
export type ShopifyPaymentsBankAccount = Node & {
  /** The account number of the bank account. */
  accountNumber: Scalars['String'];
  /** The last digits of the account number (the rest is redacted). */
  accountNumberLastDigits: Scalars['String'];
  /** The name of the bank. */
  bankName?: Maybe<Scalars['String']>;
  /** The country of the bank. */
  country: CountryCode;
  /** The date that the bank account was created. */
  createdAt: Scalars['DateTime'];
  /** The currency of the bank account. */
  currency: CurrencyCode;
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** All current and previous payouts made between the account and the bank account. */
  payouts: ShopifyPaymentsPayoutConnection;
  /** The routing number of the bank account. */
  routingNumber: Scalars['String'];
  /** The status of the bank account. */
  status: ShopifyPaymentsBankAccountStatus;
};

/** A bank account that can receive payouts. */
export type ShopifyPaymentsBankAccountPayoutsArgs = {
  transactionType?: Maybe<ShopifyPaymentsPayoutTransactionType>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

export type ShopifyPaymentsBankAccountConnection = {
  /** A list of edges. */
  edges: Array<ShopifyPaymentsBankAccountEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ShopifyPaymentsBankAccountEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of ShopifyPaymentsBankAccountEdge. */
  node: ShopifyPaymentsBankAccount;
};

/** The bank account status. */
export enum ShopifyPaymentsBankAccountStatus {
  /** A bank account that hasn't had any activity and that's not validated. */
  New = 'NEW',
  /** It was determined that the bank account exists. */
  Validated = 'VALIDATED',
  /** Bank account validation was successful. */
  Verified = 'VERIFIED',
  /** A payout to the bank account failed. */
  Errored = 'ERRORED',
}

/** The charge descriptors for a payments account. */
export type ShopifyPaymentsChargeStatementDescriptor = {
  /** The default charge statement descriptor. */
  default?: Maybe<Scalars['String']>;
  /** The prefix of the statement descriptor. */
  prefix: Scalars['String'];
};

/** The charge descriptors for a payments account. */
export type ShopifyPaymentsDefaultChargeStatementDescriptor = ShopifyPaymentsChargeStatementDescriptor & {
  /** The default charge statement descriptor. */
  default?: Maybe<Scalars['String']>;
  /** The prefix of the statement descriptor. */
  prefix: Scalars['String'];
};

/** A dispute occurs when a buyer questions the legitimacy of a charge with their financial institution. */
export type ShopifyPaymentsDispute = LegacyInteroperability &
  Node & {
    /** The total amount disputed by the cardholder. */
    amount: MoneyV2;
    /** The deadline for evidence submission. */
    evidenceDueBy?: Maybe<Scalars['Date']>;
    /** The date when evidence was sent. Returns null if evidence has not yet been sent. */
    evidenceSentOn?: Maybe<Scalars['Date']>;
    /** The date when this dispute was resolved. Returns null if the dispute is not yet resolved. */
    finalizedOn?: Maybe<Scalars['Date']>;
    /** Globally unique identifier. */
    id: Scalars['ID'];
    /** The date when this dispute was initiated. */
    initiatedAt: Scalars['DateTime'];
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars['UnsignedInt64'];
    /** The order that contains the charge that is under dispute. */
    order?: Maybe<Order>;
    /** The reason of the dispute. */
    reasonDetails: ShopifyPaymentsDisputeReasonDetails;
    /** The current state of the dispute. */
    status: DisputeStatus;
    /** Indicates if this dispute is still in the inquiry phase or has turned into a chargeback. */
    type: DisputeType;
  };

export type ShopifyPaymentsDisputeConnection = {
  /** A list of edges. */
  edges: Array<ShopifyPaymentsDisputeEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ShopifyPaymentsDisputeEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of ShopifyPaymentsDisputeEdge. */
  node: ShopifyPaymentsDispute;
};

/** The reason for the dispute provided by the cardholder's bank. */
export enum ShopifyPaymentsDisputeReason {
  /** The cardholder claims that they didn’t authorize the payment. */
  Fraudulent = 'FRAUDULENT',
  /**
   * The dispute is uncategorized, so you should contact the customer for
   * additional details to find out why the payment was disputed.
   */
  General = 'GENERAL',
  /** The customer doesn’t recognize the payment appearing on their card statement. */
  Unrecognized = 'UNRECOGNIZED',
  /** The customer claims they were charged multiple times for the same product or service. */
  Duplicate = 'DUPLICATE',
  /** The customer claims that you continued to charge them after a subscription was canceled. */
  SubscriptionCancelled = 'SUBSCRIPTION_CANCELLED',
  /** The product or service was received but was defective, damaged, or not as described. */
  ProductUnacceptable = 'PRODUCT_UNACCEPTABLE',
  /** The customer claims they did not receive the products or services purchased. */
  ProductNotReceived = 'PRODUCT_NOT_RECEIVED',
  /**
   * The customer claims that the purchased product was returned or the transaction
   * was otherwise canceled, but you have not yet provided a refund or credit.
   */
  CreditNotProcessed = 'CREDIT_NOT_PROCESSED',
  /** The customer account associated with the purchase is incorrect. */
  IncorrectAccountDetails = 'INCORRECT_ACCOUNT_DETAILS',
  /** The customer's bank account has insufficient funds. */
  InsufficientFunds = 'INSUFFICIENT_FUNDS',
  /** The customer's bank cannot process the charge. */
  BankCannotProcess = 'BANK_CANNOT_PROCESS',
  /** The customer's bank cannot proceed with the debit since it has not been authorized. */
  DebitNotAuthorized = 'DEBIT_NOT_AUTHORIZED',
  /**
   * The customer initiated the dispute, so you should contact the customer for
   * additional details to find out why the payment was disputed.
   */
  CustomerInitiated = 'CUSTOMER_INITIATED',
}

/** Details regarding a dispute reason. */
export type ShopifyPaymentsDisputeReasonDetails = {
  /** The raw code provided by the payment network. */
  networkReasonCode?: Maybe<Scalars['String']>;
  /** The reason for the dispute provided by the cardholder's banks. */
  reason: ShopifyPaymentsDisputeReason;
};

/** The fraud settings of a payments account. */
export type ShopifyPaymentsFraudSettings = {
  /** Decline a charge if there is an AVS failure. */
  declineChargeOnAvsFailure: Scalars['Boolean'];
  /** Decline a charge if there is an CVC failure. */
  declineChargeOnCvcFailure: Scalars['Boolean'];
};

/** The charge descriptors for a Japanese payments account. */
export type ShopifyPaymentsJpChargeStatementDescriptor = ShopifyPaymentsChargeStatementDescriptor & {
  /** The default charge statement descriptor. */
  default?: Maybe<Scalars['String']>;
  /** The charge statement descriptor in kana. */
  kana?: Maybe<Scalars['String']>;
  /** The charge statement descriptor in kanji. */
  kanji?: Maybe<Scalars['String']>;
  /** The prefix of the statement descriptor. */
  prefix: Scalars['String'];
};

/** The notification settings for the account. */
export type ShopifyPaymentsNotificationSettings = {
  /** Receive email notifications when new payouts are sent or payouts fail. */
  payouts: Scalars['Boolean'];
};

/**
 * Payouts represent the movement of money between a merchant's Shopify
 * Payments balance and their bank account.
 */
export type ShopifyPaymentsPayout = LegacyInteroperability &
  Node & {
    /** The bank account for the payout. */
    bankAccount: ShopifyPaymentsBankAccount;
    /**
     * The total amount and currency of the payout.
     * @deprecated Use `net` instead
     */
    gross: MoneyV2;
    /** Globally unique identifier. */
    id: Scalars['ID'];
    /**
     * The exact time when the payout was issued. The payout only contains
     * balance transactions that were available at this time.
     */
    issuedAt: Scalars['DateTime'];
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars['UnsignedInt64'];
    /** The total amount and currency of the payout. */
    net: MoneyV2;
    /** The transfer status of the payout. */
    status: ShopifyPaymentsPayoutStatus;
    /** The summary of the payout. */
    summary: ShopifyPaymentsPayoutSummary;
    /** The direction of the payout. */
    transactionType: ShopifyPaymentsPayoutTransactionType;
  };

export type ShopifyPaymentsPayoutConnection = {
  /** A list of edges. */
  edges: Array<ShopifyPaymentsPayoutEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ShopifyPaymentsPayoutEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of ShopifyPaymentsPayoutEdge. */
  node: ShopifyPaymentsPayout;
};

/** The interval at which payouts are sent to the connected bank account. */
export enum ShopifyPaymentsPayoutInterval {
  /** Each business day. */
  Daily = 'DAILY',
  /** Each week, on the day of week specified by weeklyAnchor. */
  Weekly = 'WEEKLY',
  /** Each month, on the day of month specified by monthlyAnchor. */
  Monthly = 'MONTHLY',
  /** Payouts will not be automatically made. */
  Manual = 'MANUAL',
}

/** The payment schedule for a payments account. */
export type ShopifyPaymentsPayoutSchedule = {
  /** The interval at which payouts are sent to the connected bank account. */
  interval: ShopifyPaymentsPayoutInterval;
  /**
   * The day of the month funds will be paid out.
   *
   * The value can be any day of the month from the 1st to the 31st.
   * If the payment interval is set to monthly, this value will be used.
   * Payouts scheduled between 29-31st of the month are sent on the last day of shorter months.
   */
  monthlyAnchor?: Maybe<Scalars['Int']>;
  /**
   * The day of the week funds will be paid out.
   *
   * The value can be any weekday from Monday to Friday.
   * If the payment interval is set to weekly, this value will be used.
   */
  weeklyAnchor?: Maybe<DayOfTheWeek>;
};

/** The transfer status of the payout. */
export enum ShopifyPaymentsPayoutStatus {
  /**
   * The payout has been created and had transactions assigned to it, but
   * it has not yet been submitted to the bank.
   */
  Scheduled = 'SCHEDULED',
  /** The payout has been submitted to the bank. */
  InTransit = 'IN_TRANSIT',
  /** The payout has been successfully deposited into the bank. */
  Paid = 'PAID',
  /** The payout has been declined by the bank. */
  Failed = 'FAILED',
  /** The payout has been canceled by Shopify. */
  Canceled = 'CANCELED',
}

/**
 * Breakdown of the total fees and gross of each of the different types of transactions associated
 * with the payout.
 */
export type ShopifyPaymentsPayoutSummary = {
  /** Total fees for all adjustments including disputes. */
  adjustmentsFee: MoneyV2;
  /** Total gross amount for all adjustments including disputes. */
  adjustmentsGross: MoneyV2;
  /** Total fees for all charges. */
  chargesFee: MoneyV2;
  /** Total gross amount for all charges. */
  chargesGross: MoneyV2;
  /** Total fees for all refunds. */
  refundsFee: MoneyV2;
  /** Total gross amount for all refunds. */
  refundsFeeGross: MoneyV2;
  /** Total fees for all reserved funds. */
  reservedFundsFee: MoneyV2;
  /** Total gross amount for all reserved funds. */
  reservedFundsGross: MoneyV2;
  /** Total fees for all retried payouts. */
  retriedPayoutsFee: MoneyV2;
  /** Total gross amount for all retried payouts. */
  retriedPayoutsGross: MoneyV2;
};

/** The possible transaction types for a payout. */
export enum ShopifyPaymentsPayoutTransactionType {
  /** The payout is a deposit. */
  Deposit = 'DEPOSIT',
  /** The payout is a withdrawal. */
  Withdrawal = 'WITHDRAWAL',
}

/**
 * Each subject (individual) of an account has a verification object giving
 *  information about the verification state.
 */
export type ShopifyPaymentsVerification = Node & {
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** The status of the verification. */
  status: ShopifyPaymentsVerificationStatus;
  /** The subject/individual who has to be verified. */
  subject: ShopifyPaymentsVerificationSubject;
};

/** A document which can be used to verify an individual. */
export type ShopifyPaymentsVerificationDocument = {
  /** True if the back side of the document is required. */
  backRequired: Scalars['Boolean'];
  /** True if the front side of the document is required. */
  frontRequired: Scalars['Boolean'];
  /** The type of the document which can be used for verification. */
  type: ShopifyPaymentsVerificationDocumentType;
};

/** The types of possible verification documents. */
export enum ShopifyPaymentsVerificationDocumentType {
  /** The subject's driver's license. */
  DriversLicense = 'DRIVERS_LICENSE',
  /** A government's identification document of the subject. */
  GovernmentIdentification = 'GOVERNMENT_IDENTIFICATION',
  /** The subject's passport. */
  Passport = 'PASSPORT',
}

/** The status of a verification. */
export enum ShopifyPaymentsVerificationStatus {
  /** The verification has been verified. */
  Verified = 'VERIFIED',
  /** The verification has not yet been verified. */
  Unverified = 'UNVERIFIED',
  /** The verification request has been submitted but a response has not yet been given. */
  Pending = 'PENDING',
}

/** The verification subject represents an individual that has to be verified. */
export type ShopifyPaymentsVerificationSubject = {
  /** The family name of the individual to verify. */
  familyName: Scalars['String'];
  /** The given name of the individual to verify. */
  givenName: Scalars['String'];
};

/** The set of valid sort keys for the ShopImage query. */
export enum ShopImageSortKeys {
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
}

/** Available locale for a shop. */
export type ShopLocale = {
  /** Locale identifier. */
  locale: Scalars['String'];
  /** Locale name. */
  name: Scalars['String'];
  /** Whether or not this is the default locale for the shop. */
  primary: Scalars['Boolean'];
  /** Whether or not the locale is published. */
  published: Scalars['Boolean'];
};

/** Return type for `shopLocaleDisable` mutation. */
export type ShopLocaleDisablePayload = {
  /** The locale identifier that was disabled. */
  locale?: Maybe<Scalars['String']>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `shopLocaleEnable` mutation. */
export type ShopLocaleEnablePayload = {
  /** The locale that was enabled. */
  shopLocale?: Maybe<ShopLocale>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Specifies the input fields for a shop locale. */
export type ShopLocaleInput = {
  /** Specifies the publication state of the locale. */
  published?: Maybe<Scalars['Boolean']>;
};

/** Return type for `shopLocaleUpdate` mutation. */
export type ShopLocaleUpdatePayload = {
  /** The locale that was updated. */
  shopLocale?: Maybe<ShopLocale>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Represents the billing plan of the shop. */
export type ShopPlan = {
  /** The name of the shop's billing plan. */
  displayName: Scalars['String'];
  /** Whether the shop is a partner development shop for testing purposes. */
  partnerDevelopment: Scalars['Boolean'];
  /** Whether the shop has a Shopify Plus subscription. */
  shopifyPlus: Scalars['Boolean'];
};

/** Resource limits of a shop. */
export type ShopResourceLimits = {
  /** Maximum number of locations allowed. */
  locationLimit: Scalars['Int'];
  /** Maximum number of product options allowed. */
  maxProductOptions: Scalars['Int'];
  /** Maximum number of variants allowed. */
  maxProductVariants: Scalars['Int'];
  /** Whether the shop has reached the limit of the number of URL redirects it can make for resources. */
  redirectLimitReached: Scalars['Boolean'];
  /** SKU limits. If the shop has unlimited skus the quantity used cannot be retrieved. */
  skuResourceLimits: ResourceLimit;
};

/** Possible sort of tags. */
export enum ShopTagSort {
  /** Alphabetical sort. */
  Alphabetical = 'ALPHABETICAL',
  /** Popularity sort. */
  Popular = 'POPULAR',
}

/** Staged media target information. */
export type StagedMediaUploadTarget = {
  /** Parameters of the media to be uploaded. */
  parameters: Array<StagedUploadParameter>;
  /** The url to be passed as the original_source for the product create media mutation input. */
  resourceUrl?: Maybe<Scalars['URL']>;
  /** Media URL. */
  url?: Maybe<Scalars['URL']>;
};

/** Possible HTTP method of a staged upload target. */
export enum StagedUploadHttpMethodType {
  /** The POST HTTP method. */
  Post = 'POST',
  /** The PUT HTTP method. */
  Put = 'PUT',
}

/** Media to be uploaded. */
export type StagedUploadInput = {
  /** Media resource. */
  resource: StagedUploadTargetGenerateUploadResource;
  /** Media filename. */
  filename: Scalars['String'];
  /** Media MIME type. */
  mimeType: Scalars['String'];
  /** HTTP method to be used by the Staged Upload. */
  httpMethod?: Maybe<StagedUploadHttpMethodType>;
  /** Size of the file to upload, in bytes. This is required for VIDEO and MODEL_3D resources. */
  fileSize?: Maybe<Scalars['UnsignedInt64']>;
};

/** Upload parameter of a Media. */
export type StagedUploadParameter = {
  /** Parameter name. */
  name: Scalars['String'];
  /** Parameter value. */
  value: Scalars['String'];
};

/** Return type for `stagedUploadsCreate` mutation. */
export type StagedUploadsCreatePayload = {
  /** The staged upload targets that were generated. */
  stagedTargets?: Maybe<Array<StagedMediaUploadTarget>>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Staged target information. */
export type StagedUploadTarget = {
  /** Parameters of an image to be uploaded. */
  parameters: Array<ImageUploadParameter>;
  /** Image URL. */
  url: Scalars['String'];
};

/** Specifies the fields required to generate the URL and parameters needed to upload an asset to Shopify. */
export type StagedUploadTargetGenerateInput = {
  /** The resource type being uploaded. */
  resource: StagedUploadTargetGenerateUploadResource;
  /** The filename of the asset being uploaded. */
  filename: Scalars['String'];
  /** The MIME type of the asset being uploaded. */
  mimeType: Scalars['String'];
  /** The HTTP method to be used by the staged upload. */
  httpMethod?: Maybe<StagedUploadHttpMethodType>;
  /** The size of the file to upload, in bytes. */
  fileSize?: Maybe<Scalars['UnsignedInt64']>;
};

/** Return type for `stagedUploadTargetGenerate` mutation. */
export type StagedUploadTargetGeneratePayload = {
  /** The signed parameters that can be used to upload the asset. */
  parameters: Array<MutationsStagedUploadTargetGenerateUploadParameter>;
  /** The signed URL where the asset can be uploaded. */
  url: Scalars['String'];
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Specifies the resource type to receive. */
export enum StagedUploadTargetGenerateUploadResource {
  /** A timeline event. */
  Timeline = 'TIMELINE',
  /** A product image. */
  ProductImage = 'PRODUCT_IMAGE',
  /** A collection image. */
  CollectionImage = 'COLLECTION_IMAGE',
  /** A shop image. */
  ShopImage = 'SHOP_IMAGE',
  /** Merchandising::Video resource representation. */
  Video = 'VIDEO',
  /** Merchandising::Model3d resource representation. */
  Model_3D = 'MODEL_3D',
  /** Merchandising::Image resource representation. */
  Image = 'IMAGE',
}

/** Return type for `stagedUploadTargetsGenerate` mutation. */
export type StagedUploadTargetsGeneratePayload = {
  /** The staged upload targets that were generated. */
  urls?: Maybe<Array<StagedUploadTarget>>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Image to be uploaded. */
export type StageImageInput = {
  /** Image resource. */
  resource: StagedUploadTargetGenerateUploadResource;
  /** Image filename. */
  filename: Scalars['String'];
  /** Image MIME type. */
  mimeType: Scalars['String'];
  /** HTTP method to be used by the Staged Upload. */
  httpMethod?: Maybe<StagedUploadHttpMethodType>;
};

/** Token used to delegate unauthenticated access scopes to clients that need to access the unautheticated Storefront API. */
export type StorefrontAccessToken = Node & {
  /** List of permissions associated with the token. */
  accessScopes: Array<AccessScope>;
  /** The issued public access token. */
  accessToken: Scalars['String'];
  /** The date and time when the public access token was created. */
  createdAt: Scalars['DateTime'];
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** An arbitrary title for each token determined by the developer, used for reference         purposes. */
  title: Scalars['String'];
  /** The date and time when the storefront access token was updated. */
  updatedAt: Scalars['DateTime'];
};

export type StorefrontAccessTokenConnection = {
  /** A list of edges. */
  edges: Array<StorefrontAccessTokenEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Return type for `storefrontAccessTokenCreate` mutation. */
export type StorefrontAccessTokenCreatePayload = {
  /** The user's shop. */
  shop: Shop;
  /** The storefront access token. */
  storefrontAccessToken?: Maybe<StorefrontAccessToken>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Specifies the input fields to delete a storefront access token. */
export type StorefrontAccessTokenDeleteInput = {
  /** The ID of the storefront access token to delete. */
  id: Scalars['ID'];
};

/** Return type for `storefrontAccessTokenDelete` mutation. */
export type StorefrontAccessTokenDeletePayload = {
  /** The ID of the deleted storefront access token. */
  deletedStorefrontAccessTokenId?: Maybe<Scalars['ID']>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

export type StorefrontAccessTokenEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of StorefrontAccessTokenEdge. */
  node: StorefrontAccessToken;
};

/** Specifies the input fields for a storefront access token. */
export type StorefrontAccessTokenInput = {
  /** A title for the storefront access token. */
  title: Scalars['String'];
};

export type StringConnection = {
  /** A list of edges. */
  edges: Array<StringEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type StringEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of StringEdge. */
  node: Scalars['String'];
};

/** Represents a suggested transaction. */
export type SuggestedOrderTransaction = {
  /** The masked account number associated with the payment method. */
  accountNumber?: Maybe<Scalars['String']>;
  /**
   * The amount of the transaction.
   * @deprecated Use `amountSet` instead
   */
  amount: Scalars['Money'];
  /** The amount on the order transaction in applicable currencies. */
  amountSet: MoneyBag;
  /** The human-readable payment gateway name used to process the transaction. */
  formattedGateway?: Maybe<Scalars['String']>;
  /** The payment gateway used to process the transaction. */
  gateway?: Maybe<Scalars['String']>;
  /** Specifies the kind of the suggested order transaction. */
  kind: SuggestedOrderTransactionKind;
  /**
   * Specifies the available amount to refund on the gateway. Only available within SuggestedRefund.
   * @deprecated Use `maximumRefundableSet` instead
   */
  maximumRefundable?: Maybe<Scalars['Money']>;
  /**
   * Specifies the available amount to refund on the gateway in shop and
   * presentment currencies. Only available within SuggestedRefund.
   */
  maximumRefundableSet?: Maybe<MoneyBag>;
  /** The associated parent transaction, for example the authorization of a capture. */
  parentTransaction?: Maybe<OrderTransaction>;
};

/** Specifies the kind of the suggested order transaction. */
export enum SuggestedOrderTransactionKind {
  /** A suggested refund transaction for an order. */
  SuggestedRefund = 'SUGGESTED_REFUND',
}

/** Represents the suggested refund to be submitted based on the items being returned. */
export type SuggestedRefund = {
  /**
   * The total monetary value to be refunded.
   * @deprecated Use `amountSet` instead
   */
  amount: Scalars['Money'];
  /** The total monetary value to be refunded in shop and presentment currencies. */
  amountSet: MoneyBag;
  /** The sum of all the discounted prices of the line items being refunded. */
  discountedSubtotalSet: MoneyBag;
  /**
   * The total monetary value available to refund.
   * @deprecated Use `maximumRefundableSet` instead
   */
  maximumRefundable: Scalars['Money'];
  /** The total monetary value available to refund in shop and presentment currencies. */
  maximumRefundableSet: MoneyBag;
  /** An array of duties that will be refunded to the customer. */
  refundDuties: Array<RefundDuty>;
  /** An array of line items that will be returned to the customer. */
  refundLineItems: Array<RefundLineItem>;
  /** Refund details for shipping costs paid by customer. */
  shipping: ShippingRefund;
  /**
   * The sum of all the prices of the line items being refunded.
   * @deprecated Use `subtotalSet` instead
   */
  subtotal: Scalars['Money'];
  /** The sum of all the prices of the line items being refunded in shop and presentment currencies. */
  subtotalSet: MoneyBag;
  /** Array of SuggestedOrderTransaction items. */
  suggestedTransactions: Array<SuggestedOrderTransaction>;
  /** The total cart discount amount that was applied to all line items in this refund. */
  totalCartDiscountAmountSet: MoneyBag;
  /** The sum of all the duties being refunded from the order (must be positive) in shop and presentment currencies. */
  totalDutiesSet: MoneyBag;
  /** The sum of all the taxes being refunded from the order (must be positive) in shop and presentment currencies. */
  totalTaxSet: MoneyBag;
  /**
   * The sum of all the taxes being refunded from the order (must be positive).
   * @deprecated Use `totalTaxSet` instead
   */
  totalTaxes: Scalars['Money'];
};

/** Return type for `tagsAdd` mutation. */
export type TagsAddPayload = {
  /** The object that was updated. */
  node?: Maybe<Node>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `tagsRemove` mutation. */
export type TagsRemovePayload = {
  /** The object that was updated. */
  node?: Maybe<Node>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

/** Available customer tax exemptions. */
export enum TaxExemption {
  /** This customer is exempt from specific taxes for holding a valid STATUS_CARD_EXEMPTION in Canada. */
  CaStatusCardExemption = 'CA_STATUS_CARD_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in British Columbia. */
  CaBcResellerExemption = 'CA_BC_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Manitoba. */
  CaMbResellerExemption = 'CA_MB_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Saskatchewan. */
  CaSkResellerExemption = 'CA_SK_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid DIPLOMAT_EXEMPTION in Canada. */
  CaDiplomatExemption = 'CA_DIPLOMAT_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in British Columbia. */
  CaBcCommercialFisheryExemption = 'CA_BC_COMMERCIAL_FISHERY_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Manitoba. */
  CaMbCommercialFisheryExemption = 'CA_MB_COMMERCIAL_FISHERY_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Nova Scotia. */
  CaNsCommercialFisheryExemption = 'CA_NS_COMMERCIAL_FISHERY_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Prince Edward Island. */
  CaPeCommercialFisheryExemption = 'CA_PE_COMMERCIAL_FISHERY_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Saskatchewan. */
  CaSkCommercialFisheryExemption = 'CA_SK_COMMERCIAL_FISHERY_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid PRODUCTION_AND_MACHINERY_EXEMPTION in British Columbia. */
  CaBcProductionAndMachineryExemption = 'CA_BC_PRODUCTION_AND_MACHINERY_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid PRODUCTION_AND_MACHINERY_EXEMPTION in Saskatchewan. */
  CaSkProductionAndMachineryExemption = 'CA_SK_PRODUCTION_AND_MACHINERY_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid SUB_CONTRACTOR_EXEMPTION in British Columbia. */
  CaBcSubContractorExemption = 'CA_BC_SUB_CONTRACTOR_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid SUB_CONTRACTOR_EXEMPTION in Saskatchewan. */
  CaSkSubContractorExemption = 'CA_SK_SUB_CONTRACTOR_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid CONTRACTOR_EXEMPTION in British Columbia. */
  CaBcContractorExemption = 'CA_BC_CONTRACTOR_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid CONTRACTOR_EXEMPTION in Saskatchewan. */
  CaSkContractorExemption = 'CA_SK_CONTRACTOR_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid PURCHASE_EXEMPTION in Ontario. */
  CaOnPurchaseExemption = 'CA_ON_PURCHASE_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid FARMER_EXEMPTION in Manitoba. */
  CaMbFarmerExemption = 'CA_MB_FARMER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid FARMER_EXEMPTION in Nova Scotia. */
  CaNsFarmerExemption = 'CA_NS_FARMER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid FARMER_EXEMPTION in Saskatchewan. */
  CaSkFarmerExemption = 'CA_SK_FARMER_EXEMPTION',
}

/** Represents the information about the tax charged on the associated line item. */
export type TaxLine = {
  /**
   * The amount of tax to be charged.
   * @deprecated Use `priceSet` instead
   */
  price: Scalars['Money'];
  /** The amount of tax to be charged in shop and presentment currencies. */
  priceSet: MoneyBag;
  /** The tax rate to be applied. */
  rate?: Maybe<Scalars['Float']>;
  /** The percentage of the price that the tax rate represents. */
  ratePercentage?: Maybe<Scalars['Float']>;
  /** The name of the tax. */
  title: Scalars['String'];
};

/** A tender transaction represents a transaction which modifies the shop's balance. */
export type TenderTransaction = Node & {
  /** The amount and currency of the tender transaction. */
  amount: MoneyV2;
  /** Globally unique identifier. */
  id: Scalars['ID'];
  /** Information about the payment method used for this transaction. */
  paymentMethod?: Maybe<Scalars['String']>;
  /** Date and time when the transaction was processed. */
  processedAt?: Maybe<Scalars['DateTime']>;
  /** The remote gateway reference associated with the tender transaction. */
  remoteReference?: Maybe<Scalars['String']>;
  /** Whether the transaction is a test transaction. */
  test: Scalars['Boolean'];
  /** Information about the payment instrument used for this transaction. */
  transactionDetails?: Maybe<TenderTransactionDetails>;
};

export type TenderTransactionConnection = {
  /** A list of edges. */
  edges: Array<TenderTransactionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Information about the credit card used for this transaction. */
export type TenderTransactionCreditCardDetails = {
  /** The name of the company that issued the customer's credit card. */
  creditCardCompany?: Maybe<Scalars['String']>;
  /** The customer's credit card number, with most of the leading digits redacted. */
  creditCardNumber?: Maybe<Scalars['String']>;
};

/** Information about the payment instrument used for this transaction. */
export type TenderTransactionDetails = TenderTransactionCreditCardDetails;

export type TenderTransactionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of TenderTransactionEdge. */
  node: TenderTransaction;
};

/** Specifies the fields for tracking information. */
export type TrackingInfoInput = {
  /** The tracking number of the fulfillment. */
  number?: Maybe<Scalars['String']>;
  /** The URL to track the fulfillment. */
  url?: Maybe<Scalars['String']>;
};

/** Specifies all possible fields for updating tracking information. */
export type TrackingInfoUpdateInput = {
  /** Tracking information consisting of one or more tracking URLs and numbers associated with the fulfillment. */
  trackingDetails?: Maybe<Array<TrackingInfoInput>>;
  /** The name of the tracking company. */
  trackingCompany?: Maybe<Scalars['String']>;
  /** Indicates whether the customer will be notified of this update and future updates for this fulfillment. */
  notifyCustomer?: Maybe<Scalars['Boolean']>;
};

/** Translatable content of a resource's field. */
export type TranslatableContent = {
  /** Digest (hash) of the content. */
  digest?: Maybe<Scalars['String']>;
  /** Content key. */
  key: Scalars['String'];
  /** Content locale. */
  locale: Scalars['String'];
  /** Content value. */
  value?: Maybe<Scalars['String']>;
};

/** A resource that has translatable fields. */
export type TranslatableResource = {
  /** GID of the resource. */
  resourceId: Scalars['ID'];
  /** Translatable content. */
  translatableContent: Array<TranslatableContent>;
  /** Translatable content translations. */
  translations: Array<Translation>;
};

/** A resource that has translatable fields. */
export type TranslatableResourceTranslationsArgs = {
  locale: Scalars['String'];
  outdated?: Maybe<Scalars['Boolean']>;
};

export type TranslatableResourceConnection = {
  /** A list of edges. */
  edges: Array<TranslatableResourceEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TranslatableResourceEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of TranslatableResourceEdge. */
  node: TranslatableResource;
};

/** Specifies the type of resources that are translatable. */
export enum TranslatableResourceType {
  /** Represents a product. */
  Product = 'PRODUCT',
  /** Represents a product variant. */
  ProductVariant = 'PRODUCT_VARIANT',
  /** Represents an email template. */
  EmailTemplate = 'EMAIL_TEMPLATE',
  /** Represents an online store theme. */
  OnlineStoreTheme = 'ONLINE_STORE_THEME',
  /** Represents an article. */
  OnlineStoreArticle = 'ONLINE_STORE_ARTICLE',
  /** Represents an online store blog. */
  OnlineStoreBlog = 'ONLINE_STORE_BLOG',
  /** Represents an online store page. */
  OnlineStorePage = 'ONLINE_STORE_PAGE',
  /** Represents a collection of products. */
  Collection = 'COLLECTION',
  /** Represents a link to direct users to. */
  Link = 'LINK',
  /** Represents a metafield. */
  Metafield = 'METAFIELD',
  /** Represents an SMS template. */
  SmsTemplate = 'SMS_TEMPLATE',
  /** Represents a shop. */
  Shop = 'SHOP',
  /** Represents a shop policy. */
  ShopPolicy = 'SHOP_POLICY',
  /** Represents a payment gateway. */
  PaymentGateway = 'PAYMENT_GATEWAY',
  /** Represents a custom product property name like "Size", "Color", and "Material". */
  ProductOption = 'PRODUCT_OPTION',
  /** Represents a delivery method definition. For example, "Standard", or "Expedited". */
  DeliveryMethodDefinition = 'DELIVERY_METHOD_DEFINITION',
}

/** Translation of a field of a resource. */
export type Translation = {
  /** Translation key. */
  key: Scalars['String'];
  /** Translation locale. */
  locale: Scalars['String'];
  /** Marked as outdated. */
  outdated: Scalars['Boolean'];
  /** Translation value. */
  value?: Maybe<Scalars['String']>;
};

/** Possible error codes that could be returned by a translation mutation. */
export enum TranslationErrorCode {
  /** Input value is blank. */
  Blank = 'BLANK',
  /** Input value is invalid. */
  Invalid = 'INVALID',
  /** Resource does not exist. */
  ResourceNotFound = 'RESOURCE_NOT_FOUND',
  /** Too many translation keys for resource. */
  TooManyKeysForResource = 'TOO_MANY_KEYS_FOR_RESOURCE',
  /** Translation key is invalid. */
  InvalidKeyForModel = 'INVALID_KEY_FOR_MODEL',
  /** Translation value is invalid. */
  FailsResourceValidation = 'FAILS_RESOURCE_VALIDATION',
  /** Translatable content is invalid. */
  InvalidTranslatableContent = 'INVALID_TRANSLATABLE_CONTENT',
  /** Locale is invalid for the shop. */
  InvalidLocaleForShop = 'INVALID_LOCALE_FOR_SHOP',
  /** Locale language code is invalid. */
  InvalidCode = 'INVALID_CODE',
  /** Locale code format is invalid. */
  InvalidFormat = 'INVALID_FORMAT',
}

/** Provides the fields and values to use when creating or updating a translation. */
export type TranslationInput = {
  /** The locale of the translation. */
  locale: Scalars['String'];
  /** The key of the translation. */
  key: Scalars['String'];
  /** The value of the translation. */
  value: Scalars['String'];
  /** The digest (hash) of the content being translated. */
  translatableContentDigest: Scalars['String'];
};

/** Return type for `translationsRegister` mutation. */
export type TranslationsRegisterPayload = {
  /** The translations that were created or updated. */
  translations?: Maybe<Array<Translation>>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<TranslationUserError>;
};

/** Return type for `translationsRemove` mutation. */
export type TranslationsRemovePayload = {
  /** The translations that were deleted. */
  translations?: Maybe<Array<Translation>>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<TranslationUserError>;
};

/** Represents an error that happens during the execution of a translation mutation. */
export type TranslationUserError = DisplayableError & {
  /** Error code to uniquely identify the error. */
  code?: Maybe<TranslationErrorCode>;
  /** Path to the input field which caused the error. */
  field?: Maybe<Array<Scalars['String']>>;
  /** The error message. */
  message: Scalars['String'];
};

/** Systems of weights and measures. */
export enum UnitSystem {
  /** Imperial system of weights and measures. */
  ImperialSystem = 'IMPERIAL_SYSTEM',
  /** Metric system of weights and measures. */
  MetricSystem = 'METRIC_SYSTEM',
}

/** Specifies the input fields required to update a media object. */
export type UpdateMediaInput = {
  /** Specifies the media to update. */
  id: Scalars['ID'];
  /** The source from which to update the media preview image. May be an external URL or signed upload URL. */
  previewImageSource?: Maybe<Scalars['String']>;
  /** The alt text associated to the media. */
  alt?: Maybe<Scalars['String']>;
};

/** Represents an error in the input of a mutation. */
export type UserError = DisplayableError & {
  /** Path to the input field which caused the error. */
  field?: Maybe<Array<Scalars['String']>>;
  /** The error message. */
  message: Scalars['String'];
};

/**
 * Specifies the
 * [Urchin Traffic Module (UTM) parameters](https://en.wikipedia.org/wiki/UTM_parameters)
 * that are associated with a related marketing campaign.
 */
export type UtmInput = {
  /** The name of the UTM campaign. */
  campaign: Scalars['String'];
  /** The name of the website or application where the referral link exists. */
  source: Scalars['String'];
  /** The UTM campaign medium. */
  medium: Scalars['String'];
};

/** Represents a set of UTM parameters. */
export type UtmParameters = {
  /** The name of a marketing campaign. */
  campaign?: Maybe<Scalars['String']>;
  /**
   * Identifies specific content in a marketing campaign. Used to differentiate
   * between similar content or links in a marketing campaign to determine which is
   * the most effective.
   */
  content?: Maybe<Scalars['String']>;
  /** The medium of a marketing campaign, such as a banner or email newsletter. */
  medium?: Maybe<Scalars['String']>;
  /** The source of traffic to the merchant's store, such as Google or an email newsletter. */
  source?: Maybe<Scalars['String']>;
  /** Paid search terms used by a marketing campaign. */
  term?: Maybe<Scalars['String']>;
};

/** Represents a Shopify hosted video. */
export type Video = Node &
  Media & {
    /** A word or phrase to share the nature or contents of a media. */
    alt?: Maybe<Scalars['String']>;
    /** The filename of the video. */
    filename: Scalars['String'];
    /** Globally unique identifier. */
    id: Scalars['ID'];
    /** The media content type. */
    mediaContentType: MediaContentType;
    /** Any errors which have occurred on the media. */
    mediaErrors: Array<MediaError>;
    /** The original source for a video. */
    originalSource: VideoSource;
    /** The preview image for the media. */
    preview?: Maybe<MediaPreviewImage>;
    /** The sources for a video. */
    sources: Array<VideoSource>;
    /** Current status of the media. */
    status: MediaStatus;
  };

/** Represents a source for a Shopify hosted video. */
export type VideoSource = {
  /** The format of the video source. */
  format: Scalars['String'];
  /** The height of the video. */
  height: Scalars['Int'];
  /** The video MIME type. */
  mimeType: Scalars['String'];
  /** The URL of the video. */
  url: Scalars['String'];
  /** The width of the video. */
  width: Scalars['Int'];
};

/** Represents a subscription to a webhook. */
export type WebhookSubscription = Node &
  LegacyInteroperability & {
    /** URL where the webhook subscription should send the POST request when the event occurs. */
    callbackUrl: Scalars['URL'];
    /** The date and time when the webhook subscription was created. */
    createdAt: Scalars['DateTime'];
    /** The format in which the webhook subscription should send the data. */
    format: WebhookSubscriptionFormat;
    /** Globally unique identifier. */
    id: Scalars['ID'];
    /** The list of fields to be included in the webhook subscription. */
    includeFields: Array<Scalars['String']>;
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars['UnsignedInt64'];
    /** The list of namespaces for any metafields that should be included in the webhook subscription. */
    metafieldNamespaces: Array<Scalars['String']>;
    /** The type of event that triggers the webhook. */
    topic: WebhookSubscriptionTopic;
    /** The date and time when the webhook subscription was updated. */
    updatedAt: Scalars['DateTime'];
  };

export type WebhookSubscriptionConnection = {
  /** A list of edges. */
  edges: Array<WebhookSubscriptionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Return type for `webhookSubscriptionCreate` mutation. */
export type WebhookSubscriptionCreatePayload = {
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
  /** The webhook subscription that was created. */
  webhookSubscription?: Maybe<WebhookSubscription>;
};

/** Return type for `webhookSubscriptionDelete` mutation. */
export type WebhookSubscriptionDeletePayload = {
  /** The ID of the deleted webhook subscription. */
  deletedWebhookSubscriptionId?: Maybe<Scalars['ID']>;
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
};

export type WebhookSubscriptionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of WebhookSubscriptionEdge. */
  node: WebhookSubscription;
};

/** The supported formats for webhook subscriptions. */
export enum WebhookSubscriptionFormat {
  Json = 'JSON',
  Xml = 'XML',
}

/** Specifies the input fields for a webhook subscription. */
export type WebhookSubscriptionInput = {
  /** URL where the webhook subscription should send the POST request when the event occurs. */
  callbackUrl?: Maybe<Scalars['URL']>;
  /** The format in which the webhook subscription should send the data. */
  format?: Maybe<WebhookSubscriptionFormat>;
  /** The list of fields to be included in the webhook subscription. */
  includeFields?: Maybe<Array<Scalars['String']>>;
  /** The list of namespaces for any metafields that should be included in the webhook subscription. */
  metafieldNamespaces?: Maybe<Array<Scalars['String']>>;
};

/** The set of valid sort keys for the WebhookSubscription query. */
export enum WebhookSubscriptionSortKeys {
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
}

/** The supported topics for webhook subscriptions. */
export enum WebhookSubscriptionTopic {
  /** The webhook topic for `app/uninstalled` events. */
  AppUninstalled = 'APP_UNINSTALLED',
  /** The webhook topic for `carts/create` events. */
  CartsCreate = 'CARTS_CREATE',
  /** The webhook topic for `carts/update` events. */
  CartsUpdate = 'CARTS_UPDATE',
  /** The webhook topic for `channels/delete` events. */
  ChannelsDelete = 'CHANNELS_DELETE',
  /** The webhook topic for `checkouts/create` events. */
  CheckoutsCreate = 'CHECKOUTS_CREATE',
  /** The webhook topic for `checkouts/delete` events. */
  CheckoutsDelete = 'CHECKOUTS_DELETE',
  /** The webhook topic for `checkouts/update` events. */
  CheckoutsUpdate = 'CHECKOUTS_UPDATE',
  /** The webhook topic for `collection_listings/add` events. */
  CollectionListingsAdd = 'COLLECTION_LISTINGS_ADD',
  /** The webhook topic for `collection_listings/remove` events. */
  CollectionListingsRemove = 'COLLECTION_LISTINGS_REMOVE',
  /** The webhook topic for `collection_listings/update` events. */
  CollectionListingsUpdate = 'COLLECTION_LISTINGS_UPDATE',
  /** The webhook topic for `collection_publications/create` events. */
  CollectionPublicationsCreate = 'COLLECTION_PUBLICATIONS_CREATE',
  /** The webhook topic for `collection_publications/delete` events. */
  CollectionPublicationsDelete = 'COLLECTION_PUBLICATIONS_DELETE',
  /** The webhook topic for `collection_publications/update` events. */
  CollectionPublicationsUpdate = 'COLLECTION_PUBLICATIONS_UPDATE',
  /** The webhook topic for `collections/create` events. */
  CollectionsCreate = 'COLLECTIONS_CREATE',
  /** The webhook topic for `collections/delete` events. */
  CollectionsDelete = 'COLLECTIONS_DELETE',
  /** The webhook topic for `collections/update` events. */
  CollectionsUpdate = 'COLLECTIONS_UPDATE',
  /** The webhook topic for `customer_groups/create` events. */
  CustomerGroupsCreate = 'CUSTOMER_GROUPS_CREATE',
  /** The webhook topic for `customer_groups/delete` events. */
  CustomerGroupsDelete = 'CUSTOMER_GROUPS_DELETE',
  /** The webhook topic for `customer_groups/update` events. */
  CustomerGroupsUpdate = 'CUSTOMER_GROUPS_UPDATE',
  /** The webhook topic for `customers/create` events. */
  CustomersCreate = 'CUSTOMERS_CREATE',
  /** The webhook topic for `customers/delete` events. */
  CustomersDelete = 'CUSTOMERS_DELETE',
  /** The webhook topic for `customers/disable` events. */
  CustomersDisable = 'CUSTOMERS_DISABLE',
  /** The webhook topic for `customers/enable` events. */
  CustomersEnable = 'CUSTOMERS_ENABLE',
  /** The webhook topic for `customers/update` events. */
  CustomersUpdate = 'CUSTOMERS_UPDATE',
  /** The webhook topic for `disputes/create` events. */
  DisputesCreate = 'DISPUTES_CREATE',
  /** The webhook topic for `disputes/update` events. */
  DisputesUpdate = 'DISPUTES_UPDATE',
  /** The webhook topic for `draft_orders/create` events. */
  DraftOrdersCreate = 'DRAFT_ORDERS_CREATE',
  /** The webhook topic for `draft_orders/delete` events. */
  DraftOrdersDelete = 'DRAFT_ORDERS_DELETE',
  /** The webhook topic for `draft_orders/update` events. */
  DraftOrdersUpdate = 'DRAFT_ORDERS_UPDATE',
  /** The webhook topic for `fulfillment_events/create` events. */
  FulfillmentEventsCreate = 'FULFILLMENT_EVENTS_CREATE',
  /** The webhook topic for `fulfillment_events/delete` events. */
  FulfillmentEventsDelete = 'FULFILLMENT_EVENTS_DELETE',
  /** The webhook topic for `fulfillments/create` events. */
  FulfillmentsCreate = 'FULFILLMENTS_CREATE',
  /** The webhook topic for `fulfillments/update` events. */
  FulfillmentsUpdate = 'FULFILLMENTS_UPDATE',
  /** The webhook topic for `attributed_sessions/first` events. */
  AttributedSessionsFirst = 'ATTRIBUTED_SESSIONS_FIRST',
  /** The webhook topic for `attributed_sessions/last` events. */
  AttributedSessionsLast = 'ATTRIBUTED_SESSIONS_LAST',
  /** The webhook topic for `order_transactions/create` events. */
  OrderTransactionsCreate = 'ORDER_TRANSACTIONS_CREATE',
  /** The webhook topic for `orders/cancelled` events. */
  OrdersCancelled = 'ORDERS_CANCELLED',
  /** The webhook topic for `orders/create` events. */
  OrdersCreate = 'ORDERS_CREATE',
  /** The webhook topic for `orders/delete` events. */
  OrdersDelete = 'ORDERS_DELETE',
  /** The webhook topic for `orders/edited` events. */
  OrdersEdited = 'ORDERS_EDITED',
  /** The webhook topic for `orders/fulfilled` events. */
  OrdersFulfilled = 'ORDERS_FULFILLED',
  /** The webhook topic for `orders/paid` events. */
  OrdersPaid = 'ORDERS_PAID',
  /** The webhook topic for `orders/partially_fulfilled` events. */
  OrdersPartiallyFulfilled = 'ORDERS_PARTIALLY_FULFILLED',
  /** The webhook topic for `orders/updated` events. */
  OrdersUpdated = 'ORDERS_UPDATED',
  /** The webhook topic for `product_listings/add` events. */
  ProductListingsAdd = 'PRODUCT_LISTINGS_ADD',
  /** The webhook topic for `product_listings/remove` events. */
  ProductListingsRemove = 'PRODUCT_LISTINGS_REMOVE',
  /** The webhook topic for `product_listings/update` events. */
  ProductListingsUpdate = 'PRODUCT_LISTINGS_UPDATE',
  /** The webhook topic for `product_publications/create` events. */
  ProductPublicationsCreate = 'PRODUCT_PUBLICATIONS_CREATE',
  /** The webhook topic for `product_publications/delete` events. */
  ProductPublicationsDelete = 'PRODUCT_PUBLICATIONS_DELETE',
  /** The webhook topic for `product_publications/update` events. */
  ProductPublicationsUpdate = 'PRODUCT_PUBLICATIONS_UPDATE',
  /** The webhook topic for `products/create` events. */
  ProductsCreate = 'PRODUCTS_CREATE',
  /** The webhook topic for `products/delete` events. */
  ProductsDelete = 'PRODUCTS_DELETE',
  /** The webhook topic for `products/update` events. */
  ProductsUpdate = 'PRODUCTS_UPDATE',
  /** The webhook topic for `refunds/create` events. */
  RefundsCreate = 'REFUNDS_CREATE',
  /** The webhook topic for `shipping_addresses/create` events. */
  ShippingAddressesCreate = 'SHIPPING_ADDRESSES_CREATE',
  /** The webhook topic for `shipping_addresses/update` events. */
  ShippingAddressesUpdate = 'SHIPPING_ADDRESSES_UPDATE',
  /** The webhook topic for `shop/update` events. */
  ShopUpdate = 'SHOP_UPDATE',
  /** The webhook topic for `tax_services/create` events. */
  TaxServicesCreate = 'TAX_SERVICES_CREATE',
  /** The webhook topic for `tax_services/update` events. */
  TaxServicesUpdate = 'TAX_SERVICES_UPDATE',
  /** The webhook topic for `themes/create` events. */
  ThemesCreate = 'THEMES_CREATE',
  /** The webhook topic for `themes/delete` events. */
  ThemesDelete = 'THEMES_DELETE',
  /** The webhook topic for `themes/publish` events. */
  ThemesPublish = 'THEMES_PUBLISH',
  /** The webhook topic for `themes/update` events. */
  ThemesUpdate = 'THEMES_UPDATE',
  /** The webhook topic for `variants/in_stock` events. */
  VariantsInStock = 'VARIANTS_IN_STOCK',
  /** The webhook topic for `variants/out_of_stock` events. */
  VariantsOutOfStock = 'VARIANTS_OUT_OF_STOCK',
  /** The webhook topic for `inventory_levels/connect` events. */
  InventoryLevelsConnect = 'INVENTORY_LEVELS_CONNECT',
  /** The webhook topic for `inventory_levels/update` events. */
  InventoryLevelsUpdate = 'INVENTORY_LEVELS_UPDATE',
  /** The webhook topic for `inventory_levels/disconnect` events. */
  InventoryLevelsDisconnect = 'INVENTORY_LEVELS_DISCONNECT',
  /** The webhook topic for `attribution/risk` events. */
  AttributionRisk = 'ATTRIBUTION_RISK',
  /** The webhook topic for `inventory_items/create` events. */
  InventoryItemsCreate = 'INVENTORY_ITEMS_CREATE',
  /** The webhook topic for `inventory_items/update` events. */
  InventoryItemsUpdate = 'INVENTORY_ITEMS_UPDATE',
  /** The webhook topic for `inventory_items/delete` events. */
  InventoryItemsDelete = 'INVENTORY_ITEMS_DELETE',
  /** The webhook topic for `locations/create` events. */
  LocationsCreate = 'LOCATIONS_CREATE',
  /** The webhook topic for `locations/update` events. */
  LocationsUpdate = 'LOCATIONS_UPDATE',
  /** The webhook topic for `locations/delete` events. */
  LocationsDelete = 'LOCATIONS_DELETE',
  /** The webhook topic for `tender_transactions/create` events. */
  TenderTransactionsCreate = 'TENDER_TRANSACTIONS_CREATE',
  /** The webhook topic for `app_purchases_one_time/update` events. */
  AppPurchasesOneTimeUpdate = 'APP_PURCHASES_ONE_TIME_UPDATE',
  /** The webhook topic for `app_subscriptions/update` events. */
  AppSubscriptionsUpdate = 'APP_SUBSCRIPTIONS_UPDATE',
  /** The webhook topic for `locales/create` events. */
  LocalesCreate = 'LOCALES_CREATE',
  /** The webhook topic for `locales/update` events. */
  LocalesUpdate = 'LOCALES_UPDATE',
}

/** Return type for `webhookSubscriptionUpdate` mutation. */
export type WebhookSubscriptionUpdatePayload = {
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>;
  /** The webhook subscription that was updated. */
  webhookSubscription?: Maybe<WebhookSubscription>;
};

/** Represents weight unit and value. */
export type Weight = {
  /** Unit of measurement for `value`. */
  unit: WeightUnit;
  /** The weight using the unit system specified with `unit`. */
  value: Scalars['Float'];
};

/** Specifies the weight unit and value inputs. */
export type WeightInput = {
  /** The weight value using the unit system specified with `weight_unit`. */
  value: Scalars['Float'];
  /** Unit of measurement for `value`. */
  unit: WeightUnit;
};

/** Units of measurement for weight. */
export enum WeightUnit {
  /** 1 kilogram equals 1000 grams. */
  Kilograms = 'KILOGRAMS',
  /** Metric system unit of mass. */
  Grams = 'GRAMS',
  /** 1 pound equals 16 ounces. */
  Pounds = 'POUNDS',
  /** Imperial system unit of mass. */
  Ounces = 'OUNCES',
}

export type ProductDeletesQueryVariables = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
};

export type ProductDeletesQuery = {
  deletionEvents: {
    edges: Array<
      Pick<DeletionEventEdge, 'cursor'> & {
        node: Pick<DeletionEvent, 'occurredAt' | 'subjectId'>;
      }
    >;
    pageInfo: Pick<PageInfo, 'hasNextPage'>;
  };
};

export type ProductUpdatesQueryVariables = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
};

export type ProductUpdatesQuery = {
  products: {
    edges: Array<
      Pick<ProductEdge, 'cursor'> & {
        node: Pick<Product, 'id' | 'storefrontId' | 'updatedAt'> & {
          published: Product['publishedOnCurrentPublication'];
        };
      }
    >;
    pageInfo: Pick<PageInfo, 'hasNextPage'>;
  };
};
