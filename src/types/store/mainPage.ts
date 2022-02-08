import { ModalType } from "../enum";

export interface MainPageState {
	isLoading: boolean;
	isNewSubjectModal: boolean;
	type: ModalType;
	submitModal: () => void;
	textLabel: string;
	idItem: string;
}
