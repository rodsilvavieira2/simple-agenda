export type MacroUserActionsState = {
  isMobileSidebarOpen: boolean
  isExportModalOpen: boolean
  isVerifyEmailModalOpen: boolean
  searchValue: string
}

export const macroUserActionsInitialState: MacroUserActionsState = {
  isExportModalOpen: false,
  isMobileSidebarOpen: false,
  isVerifyEmailModalOpen: false,
  searchValue: ''
}

export type MacroUserActionsActions =
  | {
      type: 'toggle-export-modal-open'
    }
  | {
      type: 'toggle-mobile-sidebar-open'
    }
  | {
      type: 'set-search-value'
      payload: string
    }
  | {
      type: 'toggle-verify-your-email-modal'
    }

export const macroUserActionsReducer = (
  state: MacroUserActionsState,
  actions: MacroUserActionsActions
): MacroUserActionsState => {
  switch (actions.type) {
    case 'toggle-export-modal-open': {
      return {
        ...state,
        isExportModalOpen: !state.isExportModalOpen
      }
    }

    case 'toggle-mobile-sidebar-open': {
      return {
        ...state,

        isMobileSidebarOpen: !state.isMobileSidebarOpen
      }
    }

    case 'set-search-value': {
      return {
        ...state,
        searchValue: actions.payload
      }
    }

    case 'toggle-verify-your-email-modal': {
      return {
        ...state,
        isVerifyEmailModalOpen: !state.isVerifyEmailModalOpen
      }
    }

    default: {
      return state
    }
  }
}
