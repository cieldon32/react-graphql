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

export type Mutation = {
  __typename?: 'Mutation';
  addPropertyName?: Maybe<MutationResponse>;
  deletePropertyName?: Maybe<MutationResponse>;
  addPropertyValue?: Maybe<MutationResponse>;
  deletePropertyValue?: Maybe<MutationResponse>;
};


export type MutationAddPropertyNameArgs = {
  propertyName?: Maybe<Scalars['String']>;
};


export type MutationDeletePropertyNameArgs = {
  propertyId?: Maybe<Scalars['ID']>;
};


export type MutationAddPropertyValueArgs = {
  propertyId?: Maybe<Scalars['ID']>;
  propertyValue?: Maybe<Scalars['String']>;
};


export type MutationDeletePropertyValueArgs = {
  propertyId?: Maybe<Scalars['ID']>;
  propertyValueId?: Maybe<Scalars['ID']>;
};

export type MutationResponse = {
  __typename?: 'MutationResponse';
  success?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
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


export type PropertyNamesQueryVariables = {};


export type PropertyNamesQuery = (
  { __typename?: 'Query' }
  & { propertyNames?: Maybe<Array<(
    { __typename?: 'PropertyName' }
    & Pick<PropertyName, 'propertyId' | 'propertyName'>
  )>> }
);

export type AddNameMutationVariables = {
  propertyName: Scalars['String'];
};


export type AddNameMutation = (
  { __typename?: 'Mutation' }
  & { addPropertyName?: Maybe<(
    { __typename?: 'MutationResponse' }
    & Pick<MutationResponse, 'success' | 'message'>
  )> }
);

export type DeleteNameMutationVariables = {
  propertyId: Scalars['ID'];
};


export type DeleteNameMutation = (
  { __typename?: 'Mutation' }
  & { deletePropertyName?: Maybe<(
    { __typename?: 'MutationResponse' }
    & Pick<MutationResponse, 'success' | 'message'>
  )> }
);

export type PropertyValuesQueryVariables = {
  propertyId: Scalars['ID'];
};


export type PropertyValuesQuery = (
  { __typename?: 'Query' }
  & { propertyValues?: Maybe<Array<(
    { __typename?: 'PropertyValue' }
    & Pick<PropertyValue, 'propertyId' | 'propertyValue' | 'propertyValueId'>
  )>> }
);

export type AddValueMutationVariables = {
  propertyId: Scalars['ID'];
  propertyValue: Scalars['String'];
};


export type AddValueMutation = (
  { __typename?: 'Mutation' }
  & { addPropertyValue?: Maybe<(
    { __typename?: 'MutationResponse' }
    & Pick<MutationResponse, 'success' | 'message'>
  )> }
);

export type DeleteValueMutationVariables = {
  propertyId: Scalars['ID'];
  propertyValueId: Scalars['ID'];
};


export type DeleteValueMutation = (
  { __typename?: 'Mutation' }
  & { deletePropertyValue?: Maybe<(
    { __typename?: 'MutationResponse' }
    & Pick<MutationResponse, 'success' | 'message'>
  )> }
);


export const PropertyNamesDocument = gql`
    query propertyNames {
  propertyNames {
    propertyId
    propertyName
  }
}
    `;

/**
 * __usePropertyNamesQuery__
 *
 * To run a query within a React component, call `usePropertyNamesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePropertyNamesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePropertyNamesQuery({
 *   variables: {
 *   },
 * });
 */
export function usePropertyNamesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PropertyNamesQuery, PropertyNamesQueryVariables>) {
        return ApolloReactHooks.useQuery<PropertyNamesQuery, PropertyNamesQueryVariables>(PropertyNamesDocument, baseOptions);
      }
export function usePropertyNamesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PropertyNamesQuery, PropertyNamesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PropertyNamesQuery, PropertyNamesQueryVariables>(PropertyNamesDocument, baseOptions);
        }
export type PropertyNamesQueryHookResult = ReturnType<typeof usePropertyNamesQuery>;
export type PropertyNamesLazyQueryHookResult = ReturnType<typeof usePropertyNamesLazyQuery>;
export type PropertyNamesQueryResult = ApolloReactCommon.QueryResult<PropertyNamesQuery, PropertyNamesQueryVariables>;
export const AddNameDocument = gql`
    mutation addName($propertyName: String!) {
  addPropertyName(propertyName: $propertyName) {
    success
    message
  }
}
    `;
export type AddNameMutationFn = ApolloReactCommon.MutationFunction<AddNameMutation, AddNameMutationVariables>;

/**
 * __useAddNameMutation__
 *
 * To run a mutation, you first call `useAddNameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddNameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addNameMutation, { data, loading, error }] = useAddNameMutation({
 *   variables: {
 *      propertyName: // value for 'propertyName'
 *   },
 * });
 */
export function useAddNameMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddNameMutation, AddNameMutationVariables>) {
        return ApolloReactHooks.useMutation<AddNameMutation, AddNameMutationVariables>(AddNameDocument, baseOptions);
      }
export type AddNameMutationHookResult = ReturnType<typeof useAddNameMutation>;
export type AddNameMutationResult = ApolloReactCommon.MutationResult<AddNameMutation>;
export type AddNameMutationOptions = ApolloReactCommon.BaseMutationOptions<AddNameMutation, AddNameMutationVariables>;
export const DeleteNameDocument = gql`
    mutation deleteName($propertyId: ID!) {
  deletePropertyName(propertyId: $propertyId) {
    success
    message
  }
}
    `;
export type DeleteNameMutationFn = ApolloReactCommon.MutationFunction<DeleteNameMutation, DeleteNameMutationVariables>;

/**
 * __useDeleteNameMutation__
 *
 * To run a mutation, you first call `useDeleteNameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteNameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteNameMutation, { data, loading, error }] = useDeleteNameMutation({
 *   variables: {
 *      propertyId: // value for 'propertyId'
 *   },
 * });
 */
export function useDeleteNameMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteNameMutation, DeleteNameMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteNameMutation, DeleteNameMutationVariables>(DeleteNameDocument, baseOptions);
      }
export type DeleteNameMutationHookResult = ReturnType<typeof useDeleteNameMutation>;
export type DeleteNameMutationResult = ApolloReactCommon.MutationResult<DeleteNameMutation>;
export type DeleteNameMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteNameMutation, DeleteNameMutationVariables>;
export const PropertyValuesDocument = gql`
    query propertyValues($propertyId: ID!) {
  propertyValues(propertyId: $propertyId) {
    propertyId
    propertyValue
    propertyValueId
  }
}
    `;

/**
 * __usePropertyValuesQuery__
 *
 * To run a query within a React component, call `usePropertyValuesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePropertyValuesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePropertyValuesQuery({
 *   variables: {
 *      propertyId: // value for 'propertyId'
 *   },
 * });
 */
export function usePropertyValuesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PropertyValuesQuery, PropertyValuesQueryVariables>) {
        return ApolloReactHooks.useQuery<PropertyValuesQuery, PropertyValuesQueryVariables>(PropertyValuesDocument, baseOptions);
      }
export function usePropertyValuesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PropertyValuesQuery, PropertyValuesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PropertyValuesQuery, PropertyValuesQueryVariables>(PropertyValuesDocument, baseOptions);
        }
export type PropertyValuesQueryHookResult = ReturnType<typeof usePropertyValuesQuery>;
export type PropertyValuesLazyQueryHookResult = ReturnType<typeof usePropertyValuesLazyQuery>;
export type PropertyValuesQueryResult = ApolloReactCommon.QueryResult<PropertyValuesQuery, PropertyValuesQueryVariables>;
export const AddValueDocument = gql`
    mutation addValue($propertyId: ID!, $propertyValue: String!) {
  addPropertyValue(propertyId: $propertyId, propertyValue: $propertyValue) {
    success
    message
  }
}
    `;
export type AddValueMutationFn = ApolloReactCommon.MutationFunction<AddValueMutation, AddValueMutationVariables>;

/**
 * __useAddValueMutation__
 *
 * To run a mutation, you first call `useAddValueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddValueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addValueMutation, { data, loading, error }] = useAddValueMutation({
 *   variables: {
 *      propertyId: // value for 'propertyId'
 *      propertyValue: // value for 'propertyValue'
 *   },
 * });
 */
export function useAddValueMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddValueMutation, AddValueMutationVariables>) {
        return ApolloReactHooks.useMutation<AddValueMutation, AddValueMutationVariables>(AddValueDocument, baseOptions);
      }
export type AddValueMutationHookResult = ReturnType<typeof useAddValueMutation>;
export type AddValueMutationResult = ApolloReactCommon.MutationResult<AddValueMutation>;
export type AddValueMutationOptions = ApolloReactCommon.BaseMutationOptions<AddValueMutation, AddValueMutationVariables>;
export const DeleteValueDocument = gql`
    mutation deleteValue($propertyId: ID!, $propertyValueId: ID!) {
  deletePropertyValue(propertyId: $propertyId, propertyValueId: $propertyValueId) {
    success
    message
  }
}
    `;
export type DeleteValueMutationFn = ApolloReactCommon.MutationFunction<DeleteValueMutation, DeleteValueMutationVariables>;

/**
 * __useDeleteValueMutation__
 *
 * To run a mutation, you first call `useDeleteValueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteValueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteValueMutation, { data, loading, error }] = useDeleteValueMutation({
 *   variables: {
 *      propertyId: // value for 'propertyId'
 *      propertyValueId: // value for 'propertyValueId'
 *   },
 * });
 */
export function useDeleteValueMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteValueMutation, DeleteValueMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteValueMutation, DeleteValueMutationVariables>(DeleteValueDocument, baseOptions);
      }
export type DeleteValueMutationHookResult = ReturnType<typeof useDeleteValueMutation>;
export type DeleteValueMutationResult = ApolloReactCommon.MutationResult<DeleteValueMutation>;
export type DeleteValueMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteValueMutation, DeleteValueMutationVariables>;