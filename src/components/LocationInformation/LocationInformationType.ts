export type LocationInformationProps = {
    ipAddress: string,
    location: {
        region: string,
        country: string
        lat: number,
        lng: number,
    },
    timezone: string,
    isp: string
}