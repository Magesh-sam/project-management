export type primaryProjectDetailsProps = {
  projectName: string;
  projectDescription: string;
  projectType: string;
  projectSize: string;
  client: string;
};

export type secondaryProjectDetailsProps = {
  projectStatus: string;
  projectLocation: {
    country: string;
    city: string;
  };
  startDate: string;
  endDate: string;
};

export type contactInfoProps = {
  email: string;
  alternativeEmail: string;
  contactNo: string;
  emergencyContactNo: string;
};

export interface projectDetailsProps
  extends primaryProjectDetailsProps,
    secondaryProjectDetailsProps,
    contactInfoProps {}

export interface projectTableRowProps extends projectDetailsProps {
  id: number;
}
