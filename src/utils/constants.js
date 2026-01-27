export const UserRoleEnum = {
    ADMIN : "admin",
    PROJECT_ADMIN: "project_admin",
    MEMBER : "member"
}


export const AvailableUserRole = Object.values(UserRolesEnum);
    
export const TaskStausEnum  = {
   TODO : "todo",
   IN_PROGRESS: "in_progress",
   DONE: "done"
}


export const AvailableTaskStatus = Object.values(TaskStausEnum)