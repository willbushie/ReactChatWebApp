import '../component_css/chatting.css'


/**
 * Master Chat Window Component
 */
export default function ChatWindow() {
    return (
        <ChatHeader />
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
 * Chat Conversation List
 */
export function ChatConverstaionList() {
    return (
        <div id="chat_converstion_list">
            <ChatConversation />
        </div>
    );
}

/**
 * Chat Conversation Icon/Box
 * 
 * @param username
 * @param last_message
 */
export function ChatConversation({ username, last_message }) {
    return (
        <div class="chat_conversation_list_item">
            
        </div>
    );
}

/**
 * Chat Message
 */
export function ChatMessage() {}
