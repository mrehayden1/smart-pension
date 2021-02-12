import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Root = {
  readonly __typename?: 'Root';
  readonly allFilms: Maybe<FilmsConnection>;
  readonly film: Maybe<Film>;
  readonly allPeople: Maybe<PeopleConnection>;
  readonly person: Maybe<Person>;
  readonly allPlanets: Maybe<PlanetsConnection>;
  readonly planet: Maybe<Planet>;
  readonly allSpecies: Maybe<SpeciesConnection>;
  readonly species: Maybe<Species>;
  readonly allStarships: Maybe<StarshipsConnection>;
  readonly starship: Maybe<Starship>;
  readonly allVehicles: Maybe<VehiclesConnection>;
  readonly vehicle: Maybe<Vehicle>;
  /** Fetches an object given its ID */
  readonly node: Maybe<Node>;
};


export type RootAllFilmsArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['String']>;
  last: Maybe<Scalars['Int']>;
};


export type RootFilmArgs = {
  id: Maybe<Scalars['ID']>;
  filmID: Maybe<Scalars['ID']>;
};


export type RootAllPeopleArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['String']>;
  last: Maybe<Scalars['Int']>;
};


export type RootPersonArgs = {
  id: Maybe<Scalars['ID']>;
  personID: Maybe<Scalars['ID']>;
};


export type RootAllPlanetsArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['String']>;
  last: Maybe<Scalars['Int']>;
};


export type RootPlanetArgs = {
  id: Maybe<Scalars['ID']>;
  planetID: Maybe<Scalars['ID']>;
};


export type RootAllSpeciesArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['String']>;
  last: Maybe<Scalars['Int']>;
};


export type RootSpeciesArgs = {
  id: Maybe<Scalars['ID']>;
  speciesID: Maybe<Scalars['ID']>;
};


export type RootAllStarshipsArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['String']>;
  last: Maybe<Scalars['Int']>;
};


export type RootStarshipArgs = {
  id: Maybe<Scalars['ID']>;
  starshipID: Maybe<Scalars['ID']>;
};


export type RootAllVehiclesArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['String']>;
  last: Maybe<Scalars['Int']>;
};


export type RootVehicleArgs = {
  id: Maybe<Scalars['ID']>;
  vehicleID: Maybe<Scalars['ID']>;
};


export type RootNodeArgs = {
  id: Scalars['ID'];
};

/** A connection to a list of items. */
export type FilmsConnection = {
  readonly __typename?: 'FilmsConnection';
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<FilmsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  readonly totalCount: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  readonly films: Maybe<ReadonlyArray<Maybe<Film>>>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  readonly __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
};

/** An edge in a connection. */
export type FilmsEdge = {
  readonly __typename?: 'FilmsEdge';
  /** The item at the end of the edge */
  readonly node: Maybe<Film>;
  /** A cursor for use in pagination */
  readonly cursor: Scalars['String'];
};

/** A single film. */
export type Film = Node & {
  readonly __typename?: 'Film';
  /** The title of this film. */
  readonly title: Maybe<Scalars['String']>;
  /** The episode number of this film. */
  readonly episodeID: Maybe<Scalars['Int']>;
  /** The opening paragraphs at the beginning of this film. */
  readonly openingCrawl: Maybe<Scalars['String']>;
  /** The name of the director of this film. */
  readonly director: Maybe<Scalars['String']>;
  /** The name(s) of the producer(s) of this film. */
  readonly producers: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** The ISO 8601 date format of film release at original creator country. */
  readonly releaseDate: Maybe<Scalars['String']>;
  readonly speciesConnection: Maybe<FilmSpeciesConnection>;
  readonly starshipConnection: Maybe<FilmStarshipsConnection>;
  readonly vehicleConnection: Maybe<FilmVehiclesConnection>;
  readonly characterConnection: Maybe<FilmCharactersConnection>;
  readonly planetConnection: Maybe<FilmPlanetsConnection>;
  /** The ISO 8601 date format of the time that this resource was created. */
  readonly created: Maybe<Scalars['String']>;
  /** The ISO 8601 date format of the time that this resource was edited. */
  readonly edited: Maybe<Scalars['String']>;
  /** The ID of an object */
  readonly id: Scalars['ID'];
};


/** A single film. */
export type FilmSpeciesConnectionArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['String']>;
  last: Maybe<Scalars['Int']>;
};


/** A single film. */
export type FilmStarshipConnectionArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['String']>;
  last: Maybe<Scalars['Int']>;
};


/** A single film. */
export type FilmVehicleConnectionArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['String']>;
  last: Maybe<Scalars['Int']>;
};


/** A single film. */
export type FilmCharacterConnectionArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['String']>;
  last: Maybe<Scalars['Int']>;
};


/** A single film. */
export type FilmPlanetConnectionArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['String']>;
  last: Maybe<Scalars['Int']>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  readonly id: Scalars['ID'];
};

/** A connection to a list of items. */
export type FilmSpeciesConnection = {
  readonly __typename?: 'FilmSpeciesConnection';
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<FilmSpeciesEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  readonly totalCount: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  readonly species: Maybe<ReadonlyArray<Maybe<Species>>>;
};

/** An edge in a connection. */
export type FilmSpeciesEdge = {
  readonly __typename?: 'FilmSpeciesEdge';
  /** The item at the end of the edge */
  readonly node: Maybe<Species>;
  /** A cursor for use in pagination */
  readonly cursor: Scalars['String'];
};

/** A type of person or character within the Star Wars Universe. */
export type Species = Node & {
  readonly __typename?: 'Species';
  /** The name of this species. */
  readonly name: Maybe<Scalars['String']>;
  /** The classification of this species, such as "mammal" or "reptile". */
  readonly classification: Maybe<Scalars['String']>;
  /** The designation of this species, such as "sentient". */
  readonly designation: Maybe<Scalars['String']>;
  /** The average height of this species in centimeters. */
  readonly averageHeight: Maybe<Scalars['Float']>;
  /** The average lifespan of this species in years, null if unknown. */
  readonly averageLifespan: Maybe<Scalars['Int']>;
  /**
   * Common eye colors for this species, null if this species does not typically
   * have eyes.
   */
  readonly eyeColors: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /**
   * Common hair colors for this species, null if this species does not typically
   * have hair.
   */
  readonly hairColors: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /**
   * Common skin colors for this species, null if this species does not typically
   * have skin.
   */
  readonly skinColors: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** The language commonly spoken by this species. */
  readonly language: Maybe<Scalars['String']>;
  /** A planet that this species originates from. */
  readonly homeworld: Maybe<Planet>;
  readonly personConnection: Maybe<SpeciesPeopleConnection>;
  readonly filmConnection: Maybe<SpeciesFilmsConnection>;
  /** The ISO 8601 date format of the time that this resource was created. */
  readonly created: Maybe<Scalars['String']>;
  /** The ISO 8601 date format of the time that this resource was edited. */
  readonly edited: Maybe<Scalars['String']>;
  /** The ID of an object */
  readonly id: Scalars['ID'];
};


/** A type of person or character within the Star Wars Universe. */
export type SpeciesPersonConnectionArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['String']>;
  last: Maybe<Scalars['Int']>;
};


/** A type of person or character within the Star Wars Universe. */
export type SpeciesFilmConnectionArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['String']>;
  last: Maybe<Scalars['Int']>;
};

/**
 * A large mass, planet or planetoid in the Star Wars Universe, at the time of
 * 0 ABY.
 */
export type Planet = Node & {
  readonly __typename?: 'Planet';
  /** The name of this planet. */
  readonly name: Maybe<Scalars['String']>;
  /** The diameter of this planet in kilometers. */
  readonly diameter: Maybe<Scalars['Int']>;
  /**
   * The number of standard hours it takes for this planet to complete a single
   * rotation on its axis.
   */
  readonly rotationPeriod: Maybe<Scalars['Int']>;
  /**
   * The number of standard days it takes for this planet to complete a single orbit
   * of its local star.
   */
  readonly orbitalPeriod: Maybe<Scalars['Int']>;
  /**
   * A number denoting the gravity of this planet, where "1" is normal or 1 standard
   * G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
   */
  readonly gravity: Maybe<Scalars['String']>;
  /** The average population of sentient beings inhabiting this planet. */
  readonly population: Maybe<Scalars['Float']>;
  /** The climates of this planet. */
  readonly climates: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** The terrains of this planet. */
  readonly terrains: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /**
   * The percentage of the planet surface that is naturally occuring water or bodies
   * of water.
   */
  readonly surfaceWater: Maybe<Scalars['Float']>;
  readonly residentConnection: Maybe<PlanetResidentsConnection>;
  readonly filmConnection: Maybe<PlanetFilmsConnection>;
  /** The ISO 8601 date format of the time that this resource was created. */
  readonly created: Maybe<Scalars['String']>;
  /** The ISO 8601 date format of the time that this resource was edited. */
  readonly edited: Maybe<Scalars['String']>;
  /** The ID of an object */
  readonly id: Scalars['ID'];
};


/**
 * A large mass, planet or planetoid in the Star Wars Universe, at the time of
 * 0 ABY.
 */
export type PlanetResidentConnectionArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['String']>;
  last: Maybe<Scalars['Int']>;
};


/**
 * A large mass, planet or planetoid in the Star Wars Universe, at the time of
 * 0 ABY.
 */
export type PlanetFilmConnectionArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['String']>;
  last: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type PlanetResidentsConnection = {
  readonly __typename?: 'PlanetResidentsConnection';
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<PlanetResidentsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  readonly totalCount: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  readonly residents: Maybe<ReadonlyArray<Maybe<Person>>>;
};

/** An edge in a connection. */
export type PlanetResidentsEdge = {
  readonly __typename?: 'PlanetResidentsEdge';
  /** The item at the end of the edge */
  readonly node: Maybe<Person>;
  /** A cursor for use in pagination */
  readonly cursor: Scalars['String'];
};

/** An individual person or character within the Star Wars universe. */
export type Person = Node & {
  readonly __typename?: 'Person';
  /** The name of this person. */
  readonly name: Maybe<Scalars['String']>;
  /**
   * The birth year of the person, using the in-universe standard of BBY or ABY -
   * Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is
   * a battle that occurs at the end of Star Wars episode IV: A New Hope.
   */
  readonly birthYear: Maybe<Scalars['String']>;
  /**
   * The eye color of this person. Will be "unknown" if not known or "n/a" if the
   * person does not have an eye.
   */
  readonly eyeColor: Maybe<Scalars['String']>;
  /**
   * The gender of this person. Either "Male", "Female" or "unknown",
   * "n/a" if the person does not have a gender.
   */
  readonly gender: Maybe<Scalars['String']>;
  /**
   * The hair color of this person. Will be "unknown" if not known or "n/a" if the
   * person does not have hair.
   */
  readonly hairColor: Maybe<Scalars['String']>;
  /** The height of the person in centimeters. */
  readonly height: Maybe<Scalars['Int']>;
  /** The mass of the person in kilograms. */
  readonly mass: Maybe<Scalars['Float']>;
  /** The skin color of this person. */
  readonly skinColor: Maybe<Scalars['String']>;
  /** A planet that this person was born on or inhabits. */
  readonly homeworld: Maybe<Planet>;
  readonly filmConnection: Maybe<PersonFilmsConnection>;
  /** The species that this person belongs to, or null if unknown. */
  readonly species: Maybe<Species>;
  readonly starshipConnection: Maybe<PersonStarshipsConnection>;
  readonly vehicleConnection: Maybe<PersonVehiclesConnection>;
  /** The ISO 8601 date format of the time that this resource was created. */
  readonly created: Maybe<Scalars['String']>;
  /** The ISO 8601 date format of the time that this resource was edited. */
  readonly edited: Maybe<Scalars['String']>;
  /** The ID of an object */
  readonly id: Scalars['ID'];
};


/** An individual person or character within the Star Wars universe. */
export type PersonFilmConnectionArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['String']>;
  last: Maybe<Scalars['Int']>;
};


/** An individual person or character within the Star Wars universe. */
export type PersonStarshipConnectionArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['String']>;
  last: Maybe<Scalars['Int']>;
};


/** An individual person or character within the Star Wars universe. */
export type PersonVehicleConnectionArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['String']>;
  last: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type PersonFilmsConnection = {
  readonly __typename?: 'PersonFilmsConnection';
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<PersonFilmsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  readonly totalCount: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  readonly films: Maybe<ReadonlyArray<Maybe<Film>>>;
};

/** An edge in a connection. */
export type PersonFilmsEdge = {
  readonly __typename?: 'PersonFilmsEdge';
  /** The item at the end of the edge */
  readonly node: Maybe<Film>;
  /** A cursor for use in pagination */
  readonly cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type PersonStarshipsConnection = {
  readonly __typename?: 'PersonStarshipsConnection';
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<PersonStarshipsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  readonly totalCount: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  readonly starships: Maybe<ReadonlyArray<Maybe<Starship>>>;
};

/** An edge in a connection. */
export type PersonStarshipsEdge = {
  readonly __typename?: 'PersonStarshipsEdge';
  /** The item at the end of the edge */
  readonly node: Maybe<Starship>;
  /** A cursor for use in pagination */
  readonly cursor: Scalars['String'];
};

/** A single transport craft that has hyperdrive capability. */
export type Starship = Node & {
  readonly __typename?: 'Starship';
  /** The name of this starship. The common name, such as "Death Star". */
  readonly name: Maybe<Scalars['String']>;
  /**
   * The model or official name of this starship. Such as "T-65 X-wing" or "DS-1
   * Orbital Battle Station".
   */
  readonly model: Maybe<Scalars['String']>;
  /**
   * The class of this starship, such as "Starfighter" or "Deep Space Mobile
   * Battlestation"
   */
  readonly starshipClass: Maybe<Scalars['String']>;
  /** The manufacturers of this starship. */
  readonly manufacturers: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** The cost of this starship new, in galactic credits. */
  readonly costInCredits: Maybe<Scalars['Float']>;
  /** The length of this starship in meters. */
  readonly length: Maybe<Scalars['Float']>;
  /** The number of personnel needed to run or pilot this starship. */
  readonly crew: Maybe<Scalars['String']>;
  /** The number of non-essential people this starship can transport. */
  readonly passengers: Maybe<Scalars['String']>;
  /**
   * The maximum speed of this starship in atmosphere. null if this starship is
   * incapable of atmosphering flight.
   */
  readonly maxAtmospheringSpeed: Maybe<Scalars['Int']>;
  /** The class of this starships hyperdrive. */
  readonly hyperdriveRating: Maybe<Scalars['Float']>;
  /**
   * The Maximum number of Megalights this starship can travel in a standard hour.
   * A "Megalight" is a standard unit of distance and has never been defined before
   * within the Star Wars universe. This figure is only really useful for measuring
   * the difference in speed of starships. We can assume it is similar to AU, the
   * distance between our Sun (Sol) and Earth.
   */
  readonly MGLT: Maybe<Scalars['Int']>;
  /** The maximum number of kilograms that this starship can transport. */
  readonly cargoCapacity: Maybe<Scalars['Float']>;
  /**
   * The maximum length of time that this starship can provide consumables for its
   * entire crew without having to resupply.
   */
  readonly consumables: Maybe<Scalars['String']>;
  readonly pilotConnection: Maybe<StarshipPilotsConnection>;
  readonly filmConnection: Maybe<StarshipFilmsConnection>;
  /** The ISO 8601 date format of the time that this resource was created. */
  readonly created: Maybe<Scalars['String']>;
  /** The ISO 8601 date format of the time that this resource was edited. */
  readonly edited: Maybe<Scalars['String']>;
  /** The ID of an object */
  readonly id: Scalars['ID'];
};


/** A single transport craft that has hyperdrive capability. */
export type StarshipPilotConnectionArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['String']>;
  last: Maybe<Scalars['Int']>;
};


/** A single transport craft that has hyperdrive capability. */
export type StarshipFilmConnectionArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['String']>;
  last: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type StarshipPilotsConnection = {
  readonly __typename?: 'StarshipPilotsConnection';
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<StarshipPilotsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  readonly totalCount: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  readonly pilots: Maybe<ReadonlyArray<Maybe<Person>>>;
};

/** An edge in a connection. */
export type StarshipPilotsEdge = {
  readonly __typename?: 'StarshipPilotsEdge';
  /** The item at the end of the edge */
  readonly node: Maybe<Person>;
  /** A cursor for use in pagination */
  readonly cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type StarshipFilmsConnection = {
  readonly __typename?: 'StarshipFilmsConnection';
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<StarshipFilmsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  readonly totalCount: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  readonly films: Maybe<ReadonlyArray<Maybe<Film>>>;
};

/** An edge in a connection. */
export type StarshipFilmsEdge = {
  readonly __typename?: 'StarshipFilmsEdge';
  /** The item at the end of the edge */
  readonly node: Maybe<Film>;
  /** A cursor for use in pagination */
  readonly cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type PersonVehiclesConnection = {
  readonly __typename?: 'PersonVehiclesConnection';
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<PersonVehiclesEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  readonly totalCount: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  readonly vehicles: Maybe<ReadonlyArray<Maybe<Vehicle>>>;
};

/** An edge in a connection. */
export type PersonVehiclesEdge = {
  readonly __typename?: 'PersonVehiclesEdge';
  /** The item at the end of the edge */
  readonly node: Maybe<Vehicle>;
  /** A cursor for use in pagination */
  readonly cursor: Scalars['String'];
};

/** A single transport craft that does not have hyperdrive capability */
export type Vehicle = Node & {
  readonly __typename?: 'Vehicle';
  /**
   * The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder
   * bike".
   */
  readonly name: Maybe<Scalars['String']>;
  /**
   * The model or official name of this vehicle. Such as "All-Terrain Attack
   * Transport".
   */
  readonly model: Maybe<Scalars['String']>;
  /** The class of this vehicle, such as "Wheeled" or "Repulsorcraft". */
  readonly vehicleClass: Maybe<Scalars['String']>;
  /** The manufacturers of this vehicle. */
  readonly manufacturers: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** The cost of this vehicle new, in Galactic Credits. */
  readonly costInCredits: Maybe<Scalars['Float']>;
  /** The length of this vehicle in meters. */
  readonly length: Maybe<Scalars['Float']>;
  /** The number of personnel needed to run or pilot this vehicle. */
  readonly crew: Maybe<Scalars['String']>;
  /** The number of non-essential people this vehicle can transport. */
  readonly passengers: Maybe<Scalars['String']>;
  /** The maximum speed of this vehicle in atmosphere. */
  readonly maxAtmospheringSpeed: Maybe<Scalars['Int']>;
  /** The maximum number of kilograms that this vehicle can transport. */
  readonly cargoCapacity: Maybe<Scalars['Float']>;
  /**
   * The maximum length of time that this vehicle can provide consumables for its
   * entire crew without having to resupply.
   */
  readonly consumables: Maybe<Scalars['String']>;
  readonly pilotConnection: Maybe<VehiclePilotsConnection>;
  readonly filmConnection: Maybe<VehicleFilmsConnection>;
  /** The ISO 8601 date format of the time that this resource was created. */
  readonly created: Maybe<Scalars['String']>;
  /** The ISO 8601 date format of the time that this resource was edited. */
  readonly edited: Maybe<Scalars['String']>;
  /** The ID of an object */
  readonly id: Scalars['ID'];
};


/** A single transport craft that does not have hyperdrive capability */
export type VehiclePilotConnectionArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['String']>;
  last: Maybe<Scalars['Int']>;
};


/** A single transport craft that does not have hyperdrive capability */
export type VehicleFilmConnectionArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['String']>;
  last: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type VehiclePilotsConnection = {
  readonly __typename?: 'VehiclePilotsConnection';
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<VehiclePilotsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  readonly totalCount: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  readonly pilots: Maybe<ReadonlyArray<Maybe<Person>>>;
};

/** An edge in a connection. */
export type VehiclePilotsEdge = {
  readonly __typename?: 'VehiclePilotsEdge';
  /** The item at the end of the edge */
  readonly node: Maybe<Person>;
  /** A cursor for use in pagination */
  readonly cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type VehicleFilmsConnection = {
  readonly __typename?: 'VehicleFilmsConnection';
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<VehicleFilmsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  readonly totalCount: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  readonly films: Maybe<ReadonlyArray<Maybe<Film>>>;
};

/** An edge in a connection. */
export type VehicleFilmsEdge = {
  readonly __typename?: 'VehicleFilmsEdge';
  /** The item at the end of the edge */
  readonly node: Maybe<Film>;
  /** A cursor for use in pagination */
  readonly cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type PlanetFilmsConnection = {
  readonly __typename?: 'PlanetFilmsConnection';
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<PlanetFilmsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  readonly totalCount: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  readonly films: Maybe<ReadonlyArray<Maybe<Film>>>;
};

/** An edge in a connection. */
export type PlanetFilmsEdge = {
  readonly __typename?: 'PlanetFilmsEdge';
  /** The item at the end of the edge */
  readonly node: Maybe<Film>;
  /** A cursor for use in pagination */
  readonly cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type SpeciesPeopleConnection = {
  readonly __typename?: 'SpeciesPeopleConnection';
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<SpeciesPeopleEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  readonly totalCount: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  readonly people: Maybe<ReadonlyArray<Maybe<Person>>>;
};

/** An edge in a connection. */
export type SpeciesPeopleEdge = {
  readonly __typename?: 'SpeciesPeopleEdge';
  /** The item at the end of the edge */
  readonly node: Maybe<Person>;
  /** A cursor for use in pagination */
  readonly cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type SpeciesFilmsConnection = {
  readonly __typename?: 'SpeciesFilmsConnection';
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<SpeciesFilmsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  readonly totalCount: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  readonly films: Maybe<ReadonlyArray<Maybe<Film>>>;
};

/** An edge in a connection. */
export type SpeciesFilmsEdge = {
  readonly __typename?: 'SpeciesFilmsEdge';
  /** The item at the end of the edge */
  readonly node: Maybe<Film>;
  /** A cursor for use in pagination */
  readonly cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type FilmStarshipsConnection = {
  readonly __typename?: 'FilmStarshipsConnection';
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<FilmStarshipsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  readonly totalCount: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  readonly starships: Maybe<ReadonlyArray<Maybe<Starship>>>;
};

/** An edge in a connection. */
export type FilmStarshipsEdge = {
  readonly __typename?: 'FilmStarshipsEdge';
  /** The item at the end of the edge */
  readonly node: Maybe<Starship>;
  /** A cursor for use in pagination */
  readonly cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type FilmVehiclesConnection = {
  readonly __typename?: 'FilmVehiclesConnection';
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<FilmVehiclesEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  readonly totalCount: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  readonly vehicles: Maybe<ReadonlyArray<Maybe<Vehicle>>>;
};

/** An edge in a connection. */
export type FilmVehiclesEdge = {
  readonly __typename?: 'FilmVehiclesEdge';
  /** The item at the end of the edge */
  readonly node: Maybe<Vehicle>;
  /** A cursor for use in pagination */
  readonly cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type FilmCharactersConnection = {
  readonly __typename?: 'FilmCharactersConnection';
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<FilmCharactersEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  readonly totalCount: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  readonly characters: Maybe<ReadonlyArray<Maybe<Person>>>;
};

/** An edge in a connection. */
export type FilmCharactersEdge = {
  readonly __typename?: 'FilmCharactersEdge';
  /** The item at the end of the edge */
  readonly node: Maybe<Person>;
  /** A cursor for use in pagination */
  readonly cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type FilmPlanetsConnection = {
  readonly __typename?: 'FilmPlanetsConnection';
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<FilmPlanetsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  readonly totalCount: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  readonly planets: Maybe<ReadonlyArray<Maybe<Planet>>>;
};

/** An edge in a connection. */
export type FilmPlanetsEdge = {
  readonly __typename?: 'FilmPlanetsEdge';
  /** The item at the end of the edge */
  readonly node: Maybe<Planet>;
  /** A cursor for use in pagination */
  readonly cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type PeopleConnection = {
  readonly __typename?: 'PeopleConnection';
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<PeopleEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  readonly totalCount: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  readonly people: Maybe<ReadonlyArray<Maybe<Person>>>;
};

/** An edge in a connection. */
export type PeopleEdge = {
  readonly __typename?: 'PeopleEdge';
  /** The item at the end of the edge */
  readonly node: Maybe<Person>;
  /** A cursor for use in pagination */
  readonly cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type PlanetsConnection = {
  readonly __typename?: 'PlanetsConnection';
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<PlanetsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  readonly totalCount: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  readonly planets: Maybe<ReadonlyArray<Maybe<Planet>>>;
};

/** An edge in a connection. */
export type PlanetsEdge = {
  readonly __typename?: 'PlanetsEdge';
  /** The item at the end of the edge */
  readonly node: Maybe<Planet>;
  /** A cursor for use in pagination */
  readonly cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type SpeciesConnection = {
  readonly __typename?: 'SpeciesConnection';
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<SpeciesEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  readonly totalCount: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  readonly species: Maybe<ReadonlyArray<Maybe<Species>>>;
};

/** An edge in a connection. */
export type SpeciesEdge = {
  readonly __typename?: 'SpeciesEdge';
  /** The item at the end of the edge */
  readonly node: Maybe<Species>;
  /** A cursor for use in pagination */
  readonly cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type StarshipsConnection = {
  readonly __typename?: 'StarshipsConnection';
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<StarshipsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  readonly totalCount: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  readonly starships: Maybe<ReadonlyArray<Maybe<Starship>>>;
};

/** An edge in a connection. */
export type StarshipsEdge = {
  readonly __typename?: 'StarshipsEdge';
  /** The item at the end of the edge */
  readonly node: Maybe<Starship>;
  /** A cursor for use in pagination */
  readonly cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type VehiclesConnection = {
  readonly __typename?: 'VehiclesConnection';
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<VehiclesEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  readonly totalCount: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  readonly vehicles: Maybe<ReadonlyArray<Maybe<Vehicle>>>;
};

/** An edge in a connection. */
export type VehiclesEdge = {
  readonly __typename?: 'VehiclesEdge';
  /** The item at the end of the edge */
  readonly node: Maybe<Vehicle>;
  /** A cursor for use in pagination */
  readonly cursor: Scalars['String'];
};

export type AllPeopleQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPeopleQuery = (
  { readonly __typename?: 'Root' }
  & { readonly allPeople: Maybe<(
    { readonly __typename?: 'PeopleConnection' }
    & { readonly edges: Maybe<ReadonlyArray<Maybe<(
      { readonly __typename?: 'PeopleEdge' }
      & { readonly node: Maybe<(
        { readonly __typename?: 'Person' }
        & Pick<Person, 'id' | 'name' | 'birthYear' | 'gender' | 'height' | 'mass'>
        & { readonly species: Maybe<(
          { readonly __typename?: 'Species' }
          & Pick<Species, 'name'>
        )> }
      )> }
    )>>> }
  )> }
);

export type AllStarshipsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllStarshipsQuery = (
  { readonly __typename?: 'Root' }
  & { readonly allStarships: Maybe<(
    { readonly __typename?: 'StarshipsConnection' }
    & { readonly edges: Maybe<ReadonlyArray<Maybe<(
      { readonly __typename?: 'StarshipsEdge' }
      & { readonly node: Maybe<(
        { readonly __typename?: 'Starship' }
        & Pick<Starship, 'id' | 'name' | 'hyperdriveRating'>
      )> }
    )>>> }
  )> }
);


export const AllPeopleDocument = gql`
    query allPeople {
  allPeople {
    edges {
      node {
        id
        name
        birthYear
        gender
        species {
          name
        }
        height
        mass
      }
    }
  }
}
    `;

/**
 * __useAllPeopleQuery__
 *
 * To run a query within a React component, call `useAllPeopleQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPeopleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPeopleQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllPeopleQuery(baseOptions?: Apollo.QueryHookOptions<AllPeopleQuery, AllPeopleQueryVariables>) {
        return Apollo.useQuery<AllPeopleQuery, AllPeopleQueryVariables>(AllPeopleDocument, baseOptions);
      }
export function useAllPeopleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllPeopleQuery, AllPeopleQueryVariables>) {
          return Apollo.useLazyQuery<AllPeopleQuery, AllPeopleQueryVariables>(AllPeopleDocument, baseOptions);
        }
export type AllPeopleQueryHookResult = ReturnType<typeof useAllPeopleQuery>;
export type AllPeopleLazyQueryHookResult = ReturnType<typeof useAllPeopleLazyQuery>;
export type AllPeopleQueryResult = Apollo.QueryResult<AllPeopleQuery, AllPeopleQueryVariables>;
export const AllStarshipsDocument = gql`
    query allStarships {
  allStarships {
    edges {
      node {
        id
        name
        hyperdriveRating
      }
    }
  }
}
    `;

/**
 * __useAllStarshipsQuery__
 *
 * To run a query within a React component, call `useAllStarshipsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllStarshipsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllStarshipsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllStarshipsQuery(baseOptions?: Apollo.QueryHookOptions<AllStarshipsQuery, AllStarshipsQueryVariables>) {
        return Apollo.useQuery<AllStarshipsQuery, AllStarshipsQueryVariables>(AllStarshipsDocument, baseOptions);
      }
export function useAllStarshipsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllStarshipsQuery, AllStarshipsQueryVariables>) {
          return Apollo.useLazyQuery<AllStarshipsQuery, AllStarshipsQueryVariables>(AllStarshipsDocument, baseOptions);
        }
export type AllStarshipsQueryHookResult = ReturnType<typeof useAllStarshipsQuery>;
export type AllStarshipsLazyQueryHookResult = ReturnType<typeof useAllStarshipsLazyQuery>;
export type AllStarshipsQueryResult = Apollo.QueryResult<AllStarshipsQuery, AllStarshipsQueryVariables>;