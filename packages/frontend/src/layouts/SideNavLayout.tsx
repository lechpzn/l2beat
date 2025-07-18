import { Banner } from '~/components/Banner'
import { Footer } from '~/components/Footer'
import { NavLayout } from '~/components/nav/NavLayout'
import { RecategorisationPreviewBanner } from '~/components/recategorisation-preview/RecategorisationPreviewBanner'
import { RecategorisationUpcomingBanner } from '~/components/recategorisation-preview/RecategorisationUpcomingBanner'

export function SideNavLayout({ children }: { children: React.ReactNode }) {
  return (
    <NavLayout
      logoLink="/scaling/summary"
      topChildren={
        <>
          <RecategorisationPreviewBanner className="only:lg:rounded-b-xl only:xl:rounded-br-none" />
          <RecategorisationUpcomingBanner className="lg:rounded-b-xl xl:rounded-br-none" />
          <Banner className="lg:rounded-b-xl xl:rounded-br-none" />
        </>
      }
    >
      <div className="mx-auto min-h-screen max-w-screen-lg md:px-6 lg:pl-0">
        {children}
      </div>
      <Footer
        className="md:px-12 md:pt-8 lg:pr-9 lg:pl-6"
        innerContainerClassName="max-w-[1142px]"
      />
    </NavLayout>
  )
}
