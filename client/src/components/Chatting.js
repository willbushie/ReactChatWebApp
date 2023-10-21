/* Global component CSS */
import '../component_css/global.css'
/* Chatting components specific CSS */
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
 * Chat Conversation List
 */
export function ChatConverstaionList() {
    return (
        <div class="scroll_container" id="chat_conversation_list">
            <ChatConversationItem 
                username={'username_1'}
                last_message={'January 12'}
            />
            <ChatConversationItem 
                username={'username_b'}
                last_message={'January 11'}
            />
            <ChatConversationItem 
                username={'username_c'}
                last_message={'January 10'}
            />
            <ChatConversationItem 
                username={'username_d'}
                last_message={'January 9'}
            />
            <ChatConversationItem 
                username={'username_e'}
                last_message={'January 8'}
            />
            <ChatConversationItem 
                username={'username_f'}
                last_message={'January 7'}
            />
            <ChatConversationItem 
                username={'username_g'}
                last_message={'January 6'}
            />
            <ChatConversationItem 
                username={'username_h'}
                last_message={'January 5'}
            />
            <ChatConversationItem 
                username={'username_i'}
                last_message={'January 4'}
            />
            <ChatConversationItem 
                username={'username_j'}
                last_message={'January 3'}
            />
            <ChatConversationItem 
                username={'username_k'}
                last_message={'January 2'}
            />
            <ChatConversationItem 
                username={'username_l'}
                last_message={'January 1'}
            />
        </div>
    );
}

/**
 * Chat Conversation List Options
 */
export function ChatConversationListOptions() {
    return (
        <div id="chat_conversation_list_options">
            <button class="default_button" id="new_chat_button">New</button>
            <button class="default_button" id="sort_chats_button">Sort</button>
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
 * Chat Window
 */
export function ChatChattingWindow() {
    return (
        <div id="chat_active_chat">
            <div id="chat_messages_section"></div>
            <ChatWindowEditor />
        </div>
    );
}

/**
 * Chat Message
 */
export function ChatMessage() {}

/**
 * Chat Window Text Editor
 */
export function ChatWindowEditor() {
    return (
        <div id="chat_active_message_editor">
            <textarea></textarea>
        </div>
    );
}