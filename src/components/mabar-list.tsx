import { TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from "@/components/ui/table";
import { FilterBar } from "@/components/filter-bar";
import { CreateMabarDrawer } from "@/components/createmabar-drawer";

interface Session {
    session_id: number;
    is_finish: boolean;
    session_end?: string;
    session_start?: string;
    created_by: User;
    members?: User[]; // Optional array of User objects
    game_info: GameInfo;
}

interface GameInfo {
    id: number;
    name: string;
    icon_url: string;
}

interface User {
    user_id: number;
    username: string;
    avatar_url: string;
    discord_uid: number;
}

const sessionExample: Session = {
    "session_id": 79,
    "is_finish": false,
    "session_end": "",
    "session_start": "",
    "created_by": {
        "user_id": 60,
        "username": "tiradord_elite",
        "avatar_url": "https://media.discordapp.net/avatars/577310684988178432/b002411f74fa84e1b6fff0e9972523cc.jpg",
        "discord_uid": 577310684988178432
    },
    "members": [
        {
            "user_id": 60,
            "username": "tiradord_elite",
            "avatar_url": "https://media.discordapp.net/avatars/577310684988178432/b002411f74fa84e1b6fff0e9972523cc.jpg",
            "discord_uid": 577310684988178432
        },
        {
            "user_id": 1,
            "username": "bismastr",
            "avatar_url": "https://media.discordapp.net/avatars/364635434304798730/f217bddabc4ca4e60edf705cf1454c08.jpg",
            "discord_uid": 364635434304798730
        },
        {
            "user_id": 153,
            "username": "icebear_21",
            "avatar_url": "https://media.discordapp.net/avatars/390090072416059392/79e498e08e4a8c264d11d2321846f6b6.jpg",
            "discord_uid": 390090072416059392
        }
    ],
    "game_info": {
        "id": 2,
        "name": "Deadlock",
        "icon_url": "https://cdn.cloudflare.steamstatic.com/steam/apps/1422450/logo_2x.png?t=1724782459"
    }
}

export function MabarList() {
    return (
        <div>
            {/* Global Gaming Session */}
            <div className="pt-2">
                <div className="text-3xl font-semibold">Global Gaming Session</div>
                <p className="text-base text-muted-foreground">
                    List of players ready to play with you!
                </p>
            </div>

            <div className="pt-3 pb-3 flex justify-between items-center">
                <FilterBar />
                <CreateMabarDrawer />
            </div>

            <Table>
                <TableCaption>Find your fellow Gamers!</TableCaption>
                <TableHeader >
                    <TableRow>
                        <TableHead >Game</TableHead>
                        <TableHead>Game Name</TableHead>
                        <TableHead>Room Name</TableHead>
                        <TableHead>Players</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        {/* Game Icon */}
                        <TableCell className="font-medium">
                            <div className="pl-1">
                                <img src={sessionExample.game_info.icon_url} className="w-8 h-8 rounded-lg object-cover" alt="image" />
                            </div>
                        </TableCell>
                        {/* Game Name */}
                        <TableCell>
                            <div>Deadlock</div>
                        </TableCell>
                        {/* Room Name */}
                        <TableCell>[ID] Fun counter strike 2, all rank bebas bisa join</TableCell>
                        {/* Members Avatar Icon */}
                        <TableCell>
                            <div className="flex-grow h-14 flex">
                                <div className="flex -space-x-4 rtl:space-x-reverse">
                                    {sessionExample.members && sessionExample.members.slice(0, 3).map((m, index) => (
                                        <img
                                            key={index}
                                            className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                                            src={m.avatar_url}
                                            alt=""
                                        />
                                    ))}
                                    <a className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">
                                        +1
                                    </a>
                                </div>
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>

    )
}