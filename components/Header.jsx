import { ConnectButton } from "@rainbow-me/rainbowkit"
import Link from "next/link"
import NextLink from "next/link"
function Header() {
  return (
    <header>
      <h1>
        <Link href="/">TokenTribe</Link>
      </h1>
      <Link href="/create" className="head1">
        Create Token
      </Link>
      <Link href="/shop" className="head2">
        Market Place
      </Link>
      <Link href="" className="head2">
        White Paper
      </Link>
      {/* <button className="box">Connect Wallet</button> */}
      <div>
        <ConnectButton showBalance={false} />
      </div>
    </header>
  )
}

export default Header
