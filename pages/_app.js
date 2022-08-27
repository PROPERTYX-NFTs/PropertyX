import {MantineProvider} from '@mantine/core'
import '../styles/globals.css'
import {NotificationsProvider} from "@mantine/notifications";

function MyApp({Component, pageProps}) {

    return <MantineProvider withGlobalStyles withNormalizeCSS>
        <NotificationsProvider>
            <Component {...pageProps} />
        </NotificationsProvider>
    </MantineProvider>
}

export default MyApp
