import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  examples__JSON: any;
};

export type Query = {
  __typename?: 'Query';
  propertyNames?: Maybe<Array<PropertyName>>;
  propertyValues?: Maybe<Array<PropertyValue>>;
};


export type QueryPropertyValuesArgs = {
  propertyId?: Maybe<Scalars['ID']>;
};

export type PropertyName = {
  __typename?: 'PropertyName';
  propertyId?: Maybe<Scalars['ID']>;
  propertyName?: Maybe<Scalars['String']>;
};

export type PropertyValue = {
  __typename?: 'PropertyValue';
  propertyId?: Maybe<Scalars['ID']>;
  propertyValue?: Maybe<Scalars['String']>;
  propertyValueId?: Maybe<Scalars['ID']>;
};

export enum Fake__Locale {
  Az = 'az',
  Cz = 'cz',
  De = 'de',
  DeAt = 'de_AT',
  DeCh = 'de_CH',
  En = 'en',
  EnAu = 'en_AU',
  EnBork = 'en_BORK',
  EnCa = 'en_CA',
  EnGb = 'en_GB',
  EnIe = 'en_IE',
  EnInd = 'en_IND',
  EnUs = 'en_US',
  EnAuOcker = 'en_au_ocker',
  Es = 'es',
  EsMx = 'es_MX',
  Fa = 'fa',
  Fr = 'fr',
  FrCa = 'fr_CA',
  Ge = 'ge',
  IdId = 'id_ID',
  It = 'it',
  Ja = 'ja',
  Ko = 'ko',
  NbNo = 'nb_NO',
  Nep = 'nep',
  Nl = 'nl',
  Pl = 'pl',
  PtBr = 'pt_BR',
  Ru = 'ru',
  Sk = 'sk',
  Sv = 'sv',
  Tr = 'tr',
  Uk = 'uk',
  Vi = 'vi',
  ZhCn = 'zh_CN',
  ZhTw = 'zh_TW'
}

export enum Fake__Types {
  ZipCode = 'zipCode',
  City = 'city',
  StreetName = 'streetName',
  /** Configure address with option `useFullAddress` */
  StreetAddress = 'streetAddress',
  SecondaryAddress = 'secondaryAddress',
  County = 'county',
  Country = 'country',
  CountryCode = 'countryCode',
  State = 'state',
  StateAbbr = 'stateAbbr',
  Latitude = 'latitude',
  Longitude = 'longitude',
  ColorName = 'colorName',
  ProductCategory = 'productCategory',
  ProductName = 'productName',
  /** Sum of money. Configure with options `minMoney`/`maxMoney` and 'decimalPlaces'. */
  Money = 'money',
  ProductMaterial = 'productMaterial',
  Product = 'product',
  CompanyName = 'companyName',
  CompanyCatchPhrase = 'companyCatchPhrase',
  CompanyBs = 'companyBS',
  DbColumn = 'dbColumn',
  DbType = 'dbType',
  DbCollation = 'dbCollation',
  DbEngine = 'dbEngine',
  /**
   * By default returns dates beetween 2000-01-01 and 2030-01-01.
   * Configure date format with options `dateFormat` `dateFrom` `dateTo`.
   */
  Date = 'date',
  /** Configure date format with option `dateFormat` */
  PastDate = 'pastDate',
  /** Configure date format with option `dateFormat` */
  FutureDate = 'futureDate',
  /** Configure date format with option `dateFormat` */
  RecentDate = 'recentDate',
  FinanceAccountName = 'financeAccountName',
  FinanceTransactionType = 'financeTransactionType',
  CurrencyCode = 'currencyCode',
  CurrencyName = 'currencyName',
  CurrencySymbol = 'currencySymbol',
  BitcoinAddress = 'bitcoinAddress',
  InternationalBankAccountNumber = 'internationalBankAccountNumber',
  BankIdentifierCode = 'bankIdentifierCode',
  HackerAbbreviation = 'hackerAbbreviation',
  HackerPhrase = 'hackerPhrase',
  /** An image url. Configure image with options: `imageCategory`, `imageWidth`, `imageHeight` and `randomizeImageUrl` */
  ImageUrl = 'imageUrl',
  /** An URL for an avatar */
  AvatarUrl = 'avatarUrl',
  /** Configure email provider with option: `emailProvider` */
  Email = 'email',
  Url = 'url',
  DomainName = 'domainName',
  Ipv4Address = 'ipv4Address',
  Ipv6Address = 'ipv6Address',
  UserAgent = 'userAgent',
  /** Configure color with option: `baseColor` */
  ColorHex = 'colorHex',
  MacAddress = 'macAddress',
  /** Configure password with option `passwordLength` */
  Password = 'password',
  /** Lorem Ipsum text. Configure size with option `loremSize` */
  Lorem = 'lorem',
  FirstName = 'firstName',
  LastName = 'lastName',
  FullName = 'fullName',
  JobTitle = 'jobTitle',
  PhoneNumber = 'phoneNumber',
  Number = 'number',
  Uuid = 'uuid',
  Word = 'word',
  Words = 'words',
  Locale = 'locale',
  Filename = 'filename',
  MimeType = 'mimeType',
  FileExtension = 'fileExtension',
  Semver = 'semver'
}

export type Fake__ImageSize = {
  width: Scalars['Int'];
  height: Scalars['Int'];
};

export enum Fake__LoremSize {
  Word = 'word',
  Words = 'words',
  Sentence = 'sentence',
  Sentences = 'sentences',
  Paragraph = 'paragraph',
  Paragraphs = 'paragraphs'
}

export type Fake__Color = {
  red255?: Maybe<Scalars['Int']>;
  green255?: Maybe<Scalars['Int']>;
  blue255?: Maybe<Scalars['Int']>;
};

export type Fake__Options = {
  /** Only for type `streetAddress` */
  useFullAddress?: Maybe<Scalars['Boolean']>;
  /** Only for type `money` */
  minMoney?: Maybe<Scalars['Float']>;
  /** Only for type `money` */
  maxMoney?: Maybe<Scalars['Float']>;
  /** Only for type `money` */
  decimalPlaces?: Maybe<Scalars['Int']>;
  /** Only for type `imageUrl` */
  imageSize?: Maybe<Fake__ImageSize>;
  /** Only for type `imageUrl`. Example value: `["nature", "water"]`. */
  imageKeywords?: Maybe<Array<Scalars['String']>>;
  /** Only for type `imageUrl` */
  randomizeImageUrl?: Maybe<Scalars['Boolean']>;
  /** Only for type `email` */
  emailProvider?: Maybe<Scalars['String']>;
  /** Only for type `password` */
  passwordLength?: Maybe<Scalars['Int']>;
  /** Only for type `lorem` */
  loremSize?: Maybe<Fake__LoremSize>;
  /** Only for types `*Date`. Example value: `YYYY MM DD`. [Full Specification](http://momentjs.com/docs/#/displaying/format/) */
  dateFormat?: Maybe<Scalars['String']>;
  /** Only for types `betweenDate`. Example value: `1986-11-02`. */
  dateFrom?: Maybe<Scalars['String']>;
  /** Only for types `betweenDate`. Example value: `2038-01-19`. */
  dateTo?: Maybe<Scalars['String']>;
  /** Only for type `colorHex`. [Details here](https://stackoverflow.com/a/43235/4989887) */
  baseColor?: Maybe<Fake__Color>;
  /** Only for type `number` */
  minNumber?: Maybe<Scalars['Float']>;
  /** Only for type `number` */
  maxNumber?: Maybe<Scalars['Float']>;
  /** Only for type `number` */
  precisionNumber?: Maybe<Scalars['Float']>;
};


export type PropertyNameQueryVariables = {};


export type PropertyNameQuery = (
  { __typename?: 'Query' }
  & { propertyNames?: Maybe<Array<(
    { __typename?: 'PropertyName' }
    & Pick<PropertyName, 'propertyId' | 'propertyName'>
  )>> }
);

export type PropertyValueQueryVariables = {};


export type PropertyValueQuery = (
  { __typename?: 'Query' }
  & { propertyValues?: Maybe<Array<(
    { __typename?: 'PropertyValue' }
    & Pick<PropertyValue, 'propertyId' | 'propertyValue' | 'propertyValueId'>
  )>> }
);


export const PropertyNameDocument = gql`
    query propertyName {
  propertyNames {
    propertyId
    propertyName
  }
}
    `;

/**
 * __usePropertyNameQuery__
 *
 * To run a query within a React component, call `usePropertyNameQuery` and pass it any options that fit your needs.
 * When your component renders, `usePropertyNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePropertyNameQuery({
 *   variables: {
 *   },
 * });
 */
export function usePropertyNameQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PropertyNameQuery, PropertyNameQueryVariables>) {
        return ApolloReactHooks.useQuery<PropertyNameQuery, PropertyNameQueryVariables>(PropertyNameDocument, baseOptions);
      }
export function usePropertyNameLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PropertyNameQuery, PropertyNameQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PropertyNameQuery, PropertyNameQueryVariables>(PropertyNameDocument, baseOptions);
        }
export type PropertyNameQueryHookResult = ReturnType<typeof usePropertyNameQuery>;
export type PropertyNameLazyQueryHookResult = ReturnType<typeof usePropertyNameLazyQuery>;
export type PropertyNameQueryResult = ApolloReactCommon.QueryResult<PropertyNameQuery, PropertyNameQueryVariables>;
export const PropertyValueDocument = gql`
    query propertyValue {
  propertyValues(propertyId: 1) {
    propertyId
    propertyValue
    propertyValueId
  }
}
    `;

/**
 * __usePropertyValueQuery__
 *
 * To run a query within a React component, call `usePropertyValueQuery` and pass it any options that fit your needs.
 * When your component renders, `usePropertyValueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePropertyValueQuery({
 *   variables: {
 *   },
 * });
 */
export function usePropertyValueQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PropertyValueQuery, PropertyValueQueryVariables>) {
        return ApolloReactHooks.useQuery<PropertyValueQuery, PropertyValueQueryVariables>(PropertyValueDocument, baseOptions);
      }
export function usePropertyValueLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PropertyValueQuery, PropertyValueQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PropertyValueQuery, PropertyValueQueryVariables>(PropertyValueDocument, baseOptions);
        }
export type PropertyValueQueryHookResult = ReturnType<typeof usePropertyValueQuery>;
export type PropertyValueLazyQueryHookResult = ReturnType<typeof usePropertyValueLazyQuery>;
export type PropertyValueQueryResult = ApolloReactCommon.QueryResult<PropertyValueQuery, PropertyValueQueryVariables>;