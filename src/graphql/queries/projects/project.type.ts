export type Entrepreneur = {
  name: string
}

export type Offer = {
  name: string
}

export type Requirement = {
  id: string
  name: string
  icon: string
  projects?: Project[]
}

export type Module = {
  name: string
  institution: Institution
  programme: Programme
}

export type Programme = {
  name: string
}

export type Institution = {
  name: string
  country: Country
}

export type Country = {
  name: string
}

export type Project = {
  id: string
  offersCount: string
  requirementsCount: string
  prize: Prize
  name: string
  website: string
  createdAt: string
  entrepreneur: Entrepreneur
  module: Module
  requirements?: Requirement[]
  offer: Offer[]
}

export type Prize = {
  id: string;
  name: string;
  projectCount: number;
  projects?: Project[]
};