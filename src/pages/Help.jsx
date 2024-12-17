import DashboardLayout from "../components/DashboardLayout";
import NoContentPlaceholder from "../components/NoContentPlaceHolder";

const Help = () => {
    return (
        <DashboardLayout
        >
          <div className="text-sm">
            <NoContentPlaceholder message={'Coming soon'} />
          </div>
        </DashboardLayout>
      );
};
export default Help;