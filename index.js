import { getAssetFromKV } from '@cloudflare/kv-asset-handler'

addEventListener('fetch', event => {
    event.respondWith(handleEvent(event))
})

async function handleEvent(event) {
    const options = {
        // eslint-disable-next-line no-undef
        ASSET_NAMESPACE: __CUSTOM_CONTENT,
    }

    try {
        return await getAssetFromKV(event, options)
    } catch (e) {
        return new Response(e.message || e.toString(), { status: 500 })
    }
}
