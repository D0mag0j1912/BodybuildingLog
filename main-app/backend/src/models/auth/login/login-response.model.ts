import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class LoginResponseDto {
    @ApiProperty({
        description: 'Message returned by server upon successful authentication',
        example: 'Authentication successful',
    })
    Message: string;

    @ApiProperty({
        description: 'Boolean indicating whether authentication was successful',
        example: true,
    })
    Success: boolean;

    @ApiPropertyOptional({
        description: 'Token returned upon successful login',
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAd',
    })
    Token?: string;

    @ApiPropertyOptional({
        description: 'Integer indicating token expiration',
        example: 10800,
    })
    ExpiresIn?: number;

    @ApiPropertyOptional({
        description: 'Unique _id indicating authentication call',
        example: '62b431c1e8f98f07dcbc9d94',
    })
    _id?: string;
}
