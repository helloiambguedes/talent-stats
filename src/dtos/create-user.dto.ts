import { IsNotEmpty, IsInt, IsString, IsBoolean } from 'class-validator';

export class CreateUserDTO {
    @IsNotEmpty()
    @IsInt()
    id: number;

    @IsNotEmpty()
    @IsString()
    twitterUrl: string;

    @IsNotEmpty()
    @IsBoolean()
    isFollowing: boolean;
}