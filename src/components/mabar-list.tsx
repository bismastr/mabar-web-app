import { TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from "@/components/ui/table";
import { FilterBar } from "@/components/filter-bar";
import { CreateMabarDrawer } from "@/components/createmabar-drawer";
import { GamingSession } from "@/types/GamingSession";

interface MabarListProps {
    mabar: GamingSession[];
}

export const MabarList: React.FC<MabarListProps> = ({ mabar }) => {
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
                    {mabar.map((session) => (
                        <TableRow key={session.session_id}>
                            {/* Game Icon */}
                            <TableCell className="font-medium">
                                <div className="pl-1">
                                    <img
                                        src={session.game_info.icon_url}
                                        className="w-8 h-8 rounded-lg object-cover"
                                        alt="image"
                                    />
                                </div>
                            </TableCell>
                            {/* Game Name */}
                            <TableCell>
                                <div>{session.game_info.name}</div>
                            </TableCell>
                            {/* Room Name */}
                            <TableCell>{session.name}</TableCell>
                            {/* Members Avatar Icon */}
                            <TableCell>
                                <div className="flex-grow h-14 flex">
                                    <div className="flex -space-x-4 rtl:space-x-reverse">
                                        {session.members && session.members.slice(0, 3).map((m, index) => (
                                            <img
                                                key={index}
                                                className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                                                src={m.avatar_url}
                                                alt=""
                                            />
                                        ))}
                                        {session.members && session.members.length > 3 && (
                                            <a
                                                className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                                                href="#"
                                            >
                                                +{session.members.length - 3}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>

    )
}