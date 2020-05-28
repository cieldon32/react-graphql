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
  addPropertyName?: Maybe<Array<PropertyName>>;
  deletePropertyName?: Maybe<Array<PropertyName>>;
  addPropertyValue?: Maybe<Array<PropertyValue>>;
  deletePropertyValue?: Maybe<Array<PropertyValue>>;
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

export type AddPropertyNameMutationVariables = {
  input?: Maybe<Scalars['String']>;
};


export type AddPropertyNameMutation = (
  { __typename?: 'Mutation' }
  & { addPropertyName?: Maybe<Array<(
    { __typename?: 'PropertyName' }
    & Pick<PropertyName, 'propertyId' | 'propertyName'>
  )>> }
);

export type DeletePropertyNameMutationVariables = {
  input?: Maybe<Scalars['ID']>;
};


export type DeletePropertyNameMutation = (
  { __typename?: 'Mutation' }
  & { deletePropertyName?: Maybe<Array<(
    { __typename?: 'PropertyName' }
    & Pick<PropertyName, 'propertyId' | 'propertyName'>
  )>> }
);

export type PropertyValuesQueryVariables = {};


export type PropertyValuesQuery = (
  { __typename?: 'Query' }
  & { propertyValues?: Maybe<Array<(
    { __typename?: 'PropertyValue' }
    & Pick<PropertyValue, 'propertyId' | 'propertyValue' | 'propertyValueId'>
  )>> }
);

export type AddPropertyValueMutationVariables = {
  input1?: Maybe<Scalars['ID']>;
  input2?: Maybe<Scalars['String']>;
};


export type AddPropertyValueMutation = (
  { __typename?: 'Mutation' }
  & { addPropertyValue?: Maybe<Array<(
    { __typename?: 'PropertyValue' }
    & Pick<PropertyValue, 'propertyId' | 'propertyValue' | 'propertyValueId'>
  )>> }
);

export type DeletePropertyValueMutationVariables = {
  input1?: Maybe<Scalars['ID']>;
  input2?: Maybe<Scalars['ID']>;
};


export type DeletePropertyValueMutation = (
  { __typename?: 'Mutation' }
  & { deletePropertyValue?: Maybe<Array<(
    { __typename?: 'PropertyValue' }
    & Pick<PropertyValue, 'propertyId' | 'propertyValue' | 'propertyValueId'>
  )>> }
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
export const AddPropertyNameDocument = gql`
    mutation addPropertyName($input: String) {
  addPropertyName(propertyName: $input) {
    propertyId
    propertyName
  }
}
    `;
export type AddPropertyNameMutationFn = ApolloReactCommon.MutationFunction<AddPropertyNameMutation, AddPropertyNameMutationVariables>;

/**
 * __useAddPropertyNameMutation__
 *
 * To run a mutation, you first call `useAddPropertyNameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPropertyNameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPropertyNameMutation, { data, loading, error }] = useAddPropertyNameMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddPropertyNameMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddPropertyNameMutation, AddPropertyNameMutationVariables>) {
        return ApolloReactHooks.useMutation<AddPropertyNameMutation, AddPropertyNameMutationVariables>(AddPropertyNameDocument, baseOptions);
      }
export type AddPropertyNameMutationHookResult = ReturnType<typeof useAddPropertyNameMutation>;
export type AddPropertyNameMutationResult = ApolloReactCommon.MutationResult<AddPropertyNameMutation>;
export type AddPropertyNameMutationOptions = ApolloReactCommon.BaseMutationOptions<AddPropertyNameMutation, AddPropertyNameMutationVariables>;
export const DeletePropertyNameDocument = gql`
    mutation deletePropertyName($input: ID) {
  deletePropertyName(propertyId: $input) {
    propertyId
    propertyName
  }
}
    `;
export type DeletePropertyNameMutationFn = ApolloReactCommon.MutationFunction<DeletePropertyNameMutation, DeletePropertyNameMutationVariables>;

/**
 * __useDeletePropertyNameMutation__
 *
 * To run a mutation, you first call `useDeletePropertyNameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePropertyNameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePropertyNameMutation, { data, loading, error }] = useDeletePropertyNameMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeletePropertyNameMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeletePropertyNameMutation, DeletePropertyNameMutationVariables>) {
        return ApolloReactHooks.useMutation<DeletePropertyNameMutation, DeletePropertyNameMutationVariables>(DeletePropertyNameDocument, baseOptions);
      }
export type DeletePropertyNameMutationHookResult = ReturnType<typeof useDeletePropertyNameMutation>;
export type DeletePropertyNameMutationResult = ApolloReactCommon.MutationResult<DeletePropertyNameMutation>;
export type DeletePropertyNameMutationOptions = ApolloReactCommon.BaseMutationOptions<DeletePropertyNameMutation, DeletePropertyNameMutationVariables>;
export const PropertyValuesDocument = gql`
    query propertyValues {
  propertyValues(propertyId: 1) {
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
export const AddPropertyValueDocument = gql`
    mutation addPropertyValue($input1: ID, $input2: String) {
  addPropertyValue(propertyId: $input1, propertyValue: $input2) {
    propertyId
    propertyValue
    propertyValueId
  }
}
    `;
export type AddPropertyValueMutationFn = ApolloReactCommon.MutationFunction<AddPropertyValueMutation, AddPropertyValueMutationVariables>;

/**
 * __useAddPropertyValueMutation__
 *
 * To run a mutation, you first call `useAddPropertyValueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPropertyValueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPropertyValueMutation, { data, loading, error }] = useAddPropertyValueMutation({
 *   variables: {
 *      input1: // value for 'input1'
 *      input2: // value for 'input2'
 *   },
 * });
 */
export function useAddPropertyValueMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddPropertyValueMutation, AddPropertyValueMutationVariables>) {
        return ApolloReactHooks.useMutation<AddPropertyValueMutation, AddPropertyValueMutationVariables>(AddPropertyValueDocument, baseOptions);
      }
export type AddPropertyValueMutationHookResult = ReturnType<typeof useAddPropertyValueMutation>;
export type AddPropertyValueMutationResult = ApolloReactCommon.MutationResult<AddPropertyValueMutation>;
export type AddPropertyValueMutationOptions = ApolloReactCommon.BaseMutationOptions<AddPropertyValueMutation, AddPropertyValueMutationVariables>;
export const DeletePropertyValueDocument = gql`
    mutation deletePropertyValue($input1: ID, $input2: ID) {
  deletePropertyValue(propertyId: $input1, propertyValueId: $input2) {
    propertyId
    propertyValue
    propertyValueId
  }
}
    `;
export type DeletePropertyValueMutationFn = ApolloReactCommon.MutationFunction<DeletePropertyValueMutation, DeletePropertyValueMutationVariables>;

/**
 * __useDeletePropertyValueMutation__
 *
 * To run a mutation, you first call `useDeletePropertyValueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePropertyValueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePropertyValueMutation, { data, loading, error }] = useDeletePropertyValueMutation({
 *   variables: {
 *      input1: // value for 'input1'
 *      input2: // value for 'input2'
 *   },
 * });
 */
export function useDeletePropertyValueMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeletePropertyValueMutation, DeletePropertyValueMutationVariables>) {
        return ApolloReactHooks.useMutation<DeletePropertyValueMutation, DeletePropertyValueMutationVariables>(DeletePropertyValueDocument, baseOptions);
      }
export type DeletePropertyValueMutationHookResult = ReturnType<typeof useDeletePropertyValueMutation>;
export type DeletePropertyValueMutationResult = ApolloReactCommon.MutationResult<DeletePropertyValueMutation>;
export type DeletePropertyValueMutationOptions = ApolloReactCommon.BaseMutationOptions<DeletePropertyValueMutation, DeletePropertyValueMutationVariables>;