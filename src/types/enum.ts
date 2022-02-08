export enum InputSize {
	right = "right",
	left = "left",
	both = "both",
}

export enum ModalType {
	createNewSubject = "createSubject",
	deleteSubject = "deleteSubject",
	editSubject = "editSubjectName",
	errorPage = "errorPage",
	errorModal = "errorModal",
}

export enum ObjectType {
	question = "question",
	subject = "subject",
}

export enum QuestionLabelType {
	question = "question",
	condition = "condition",
}

export enum QuestionType {
	or = "0",
	and = "1",
	text = "2",
}

export enum NumQuestionType {
	or = 0,
	and = 1,
	text = 2,
}

export enum AuthStates {
	IDLE = "idle",
	LOADING = "loading",
}

export enum LoginRoutes {
	home ="/",
	login = "/login",
	reset = "/reset",
	newPassword = "newPassword",
}

export enum HomeRoutes {
	home = "/",
	questionnaire = "/questionnaire",
	questionnaireAdd = "/questionnaire/add",
	questionnaireDetails = "/questionnaire/details",
	subjects = "/subjects",
	users = "/users",
	usersDetails = "/users/details",
	profile = "/profile",
}

export enum ActionQuestionType {
	questionGo = 'Go to question',
	endTest = 'End test',
}

export enum ActionQuestionTypeValue {
	questionGo = '0',
	endTest = '1',
}

export enum size {
	widthSize = "768px",
	sizeBox = "213px",
}

export enum WidthScreen{
	size1200 = 1200,
	size768 = 768,
}
