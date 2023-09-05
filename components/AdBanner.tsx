'use client'
import { usePathname } from 'next/navigation'

const AdBanner = (props: {
  'data-ad-slot': string
  'data-ad-format': string
  'data-full-width-responsive': string
  className: string
}) => {
  const pathName = usePathname()
  return (
    <div key={pathName} className={props.className}>
      <ins
        key={pathName}
        data-ad-client="ca-pub-4568277783171675"
        data-ad-slot={props['data-ad-slot']}
        data-ad-format={props['data-ad-format']}
        data-full-width-responsive={props['data-full-width-responsive']}
        className="adsbygoogle w-full"
      />
      <script>{`(adsbygoogle = window.adsbygoogle || []).push({});`}</script>
    </div>
  )
}
export default AdBanner
