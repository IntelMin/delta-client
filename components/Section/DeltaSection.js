import { useWallet } from 'use-wallet';
import chevron from '../../public/chevron.svg';
import { DeltaTitleH1 } from '../Title';
import { ConnectWalletButton } from '../Buttons';

const DeltaSection = ({ title, children, showConnectWalletButton, requiresConnectedWallet, center }) => {
  const wallet = useWallet();

  const renderContent = () => {
    if (requiresConnectedWallet && !wallet?.account) {
      if (showConnectWalletButton) {
        return <ConnectWalletButton />
      }
      return <></>;
    }
    return children;
  }

  if (requiresConnectedWallet && !wallet?.account && !showConnectWalletButton) {
    return <></>;
  }

  return <div className="w-full border-2 mt-4 border-black py-4 px-3 md:py-8 md:px-12 m-auto">
    <div>
      <div className="flex py-2 md:py-4">
        <DeltaTitleH1 className={`${center && "md:text-center"}`}>{title}</DeltaTitleH1>
        <img className="ml-4 self-start" src={chevron} alt="chevron" />
      </div>
      {renderContent()}
    </div>
  </div>;
}

export default DeltaSection