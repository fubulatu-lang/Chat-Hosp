import PageContainer from "../../../components/common/PageContainer";
import PageHeader from "../../../components/common/PageHeader";
import RegistrationWizard from "../components/RegistrationWizard";

export default function PatientRegistrationPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Register Patient"
        subtitle="Create a new patient record"
      />

      <RegistrationWizard />
    </PageContainer>
  );
}