CREATE TABLE [dbo].[DropPins] (
    [Id]          BIGINT          IDENTITY (1, 1) NOT NULL,
    [Latitude]    NUMERIC (7, 4)  NOT NULL,
    [Longitude]   NUMERIC (7, 4)  NOT NULL,
    [Description] NVARCHAR (1000) NOT NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);

