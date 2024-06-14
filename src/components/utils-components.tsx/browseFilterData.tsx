

export default function generateFilterModel(nextPageNumber: number, visibleItemCount: number, filters?: any) {
    console.log('nextPageNumber ' + nextPageNumber)
    console.log('visibleItemCount ' +visibleItemCount)
    let model: any = {
        nextPageNumber: nextPageNumber,
        visibleItemCount: visibleItemCount,
    }

    if (filters) model.filters = [...filters];

    return model
}