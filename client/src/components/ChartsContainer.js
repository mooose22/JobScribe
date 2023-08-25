import BarChartComponent from "./BarChartComponent";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/ChartsContainer";

const ChartsContainer = () => {
  const { monthlyApplications: data } = useAppContext();
  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <BarChartComponent data={data} />
    </Wrapper>
  );
};

export default ChartsContainer;
