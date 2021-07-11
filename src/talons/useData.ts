import client from "../client";

type Props = {
    endpoint: string;
}

const useData = ({ endpoint }: Props) => {

    const fetchData = async () => {
        const response = await client.get(endpoint);
        const responseData = response?.data;
        if (responseData) {
            return Object.values(responseData);
        }
        return [];
    }

    const postData = async (data: any[]) => {
        await Promise.all(data.map(async (item) => await client.post(endpoint, item)));
    }

    return {
        fetchData,
        postData
    }

}

export { useData };