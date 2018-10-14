// @flow
export const genericTypes = () => {
    return `
        input SearchInput {
            query: String
            fields: [String]
            operator: String
        }
        
        type ListMeta {
            count: Int
            totalCount: Int
            totalPages: Int
            page: Int
            perPage: Int
            from: Int
            to: Int
            previousPage: Int
            nextPage: Int
        }
  `;
};