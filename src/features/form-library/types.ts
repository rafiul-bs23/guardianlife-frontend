export interface FormLibraryItem {
    file_name: string;
    pdf_download_link: string;
}

export interface FormLibraryResponse {
    success: boolean;
    transaction_id: string;
    data: FormLibraryItem[];
}
