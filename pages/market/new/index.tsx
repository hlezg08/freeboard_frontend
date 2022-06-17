import MarketWrite from "../../../src/components/units/market/write/MarketWrite.container";
import { withAuth } from "../../../src/components/commons/hocs/withAuth";
function MarketNewPage() {
  return <MarketWrite />;
}
export default withAuth(MarketNewPage);
