export function getFromLocalStorage(key: string): string|undefined {
    const savedTheme: string = localStorage.getItem(key)
    if(savedTheme) return savedTheme
    else return undefined
}