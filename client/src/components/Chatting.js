import '../component_css/chatting.css'


/**
 * Master Chat Window Component
 */
export default function ChatWindow() {
    return (
        <div id="chat_chatting_page">
            <ChatHeader />
            <div id="chat_list_and_window">
                <ChatConverstaionList />
                <ChatChattingWindow />
            </div>
        </div>
    );
}

/**
 * Page Header/Toolbar for Chat Window
 */
export function ChatHeader() {
    return (
        <header id="chat_page_header">
            <div id="chat_header_website_name">
                <p>Chatter</p>
            </div>
            <div id="chat_header_user_profile">
                <img 
                    src="../images/default_profile_photo.png"
                    alt="Default Profile Photo"
                    width={50}
                    height={50}
                />
            </div>
        </header>
    );
}

/**
 * Chat Window
 */
export function ChatChattingWindow() {
    return (
        <div id="chat_active_chat"></div>
    );
}

/**
 * Chat Conversation List
 */
export function ChatConverstaionList() {
    return (
        <div id="chat_conversation_list">
            <ChatConversationItem 
                username={'username_1'}
                last_message={'January 1'}
            />
            <ChatConversationItem 
                username={'username_b'}
                last_message={'January 2'}
            />
        </div>
    );
}

/**
 * Chat Conversation Icon/Box
 * 
 * @param username
 * @param last_message
 */
export function ChatConversationItem({ username, last_message }) {
    return (
        <div class="chat_conversation_list_item">
            <div id="">
                <img
                    src="../images/default_profile_photo.png"
                    alt="Profile"
                    width={50}
                    height={50}
                />
                <p>{username}</p>
            </div>
            <div id="last_message_date_time">
                <p>{last_message}</p>
            </div>
        </div>
    );
}

/**
 * Chat Message
 */
export function ChatMessage() {}
