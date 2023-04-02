export type Entrepreneur = {
  name: string
  email: string
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
  flag: string
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
  project: Project;
};

export type Category = {
  id: string;
  name: string;
  prize: Prize;
};